package fr.fab.maxyutnori;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.FilterInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayDeque;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public final class MainActivity extends Activity {
    private static final String ORIGIN = "appassets.androidplatform.net";
    private static final String START = "https://" + ORIGIN + "/game/index.html";
    private final ArrayDeque<String> log = new ArrayDeque<>();
    private WebView webView;
    private FrameLayout root;
    private boolean foreground;
    private AlertDialog exitDialog;
    private MotionSensors motion;
    private boolean motionRequested;

    @SuppressLint("SetJavaScriptEnabled")
    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(16, 43, 41));
        if (Build.VERSION.SDK_INT >= 30) {
            getWindow().setDecorFitsSystemWindows(false);
            root.setOnApplyWindowInsetsListener((view, insets) -> {
                android.graphics.Insets safe = insets.getInsets(
                        WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout());
                view.setPadding(safe.left, safe.top, safe.right, safe.bottom);
                return insets;
            });
        } else {
            root.setFitsSystemWindows(true);
        }
        setContentView(root);
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(16, 43, 41));
        root.addView(webView, new FrameLayout.LayoutParams(-1, -1));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setSupportMultipleWindows(false);
        settings.setBuiltInZoomControls(false);
        motion = new MotionSensors(this, new MotionSensors.Listener() {
            @Override public void sample(float x, float y, float z, double time) {
                if (motionAllowed()) webView.evaluateJavascript("window.onNativeMotion?.(" + x + "," + y + "," + z + "," + time + ")", null);
            }
            @Override public void availability(boolean available) {
                if (webView != null) webView.evaluateJavascript("window.onNativeMotionStatus?.(" + available + ")", null);
            }
        });
        webView.addJavascriptInterface(new MotionBridge(), "MaxYutMotion");
        webView.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return serve(request.getUrl(), request.getMethod(), request.getRequestHeaders());
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                return !START.equals(url.toString());
            }
            @Override public void onPageFinished(WebView view, String url) { sendPauseState(); }
            @Override public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                motionRequested = false;
                motion.setEnabled(false);
                record("Moteur Web arrêté. Crash=" + detail.didCrash());
                root.removeView(view);
                view.destroy();
                webView = null;
                new AlertDialog.Builder(MainActivity.this)
                    .setTitle("Le jeu s'est arrêté")
                    .setMessage("Android a arrêté le moteur Web. La partie en cours peut être perdue.")
                    .setPositiveButton("Relancer", (dialog, which) -> recreate())
                    .setNeutralButton("Copier le diagnostic", (dialog, which) -> { copyDiagnostic(); finish(); })
                    .setNegativeButton("Fermer", (dialog, which) -> finish()).setCancelable(false).show();
                return true;
            }
        });
        webView.setWebChromeClient(new WebChromeClient() {
            @Override public boolean onConsoleMessage(ConsoleMessage message) {
                record(message.messageLevel() + " " + message.message());
                return true;
            }
        });
        record("Max YutNori " + BuildConfig.VERSION_NAME + " / Android " + Build.VERSION.SDK_INT);
        record("WebView " + WebView.getCurrentWebViewPackage());
        webView.loadUrl(START);
        if (Build.VERSION.SDK_INT >= 33) {
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                android.window.OnBackInvokedDispatcher.PRIORITY_DEFAULT, this::showExitDialog);
        }
        hideBars();
    }

    private WebResourceResponse serve(Uri uri, String method, Map<String, String> requestHeaders) {
        String path = uri.getPath();
        if (!"GET".equals(method) || !"https".equals(uri.getScheme()) || !ORIGIN.equals(uri.getHost())
                || path == null || !path.startsWith("/game/") || path.contains("..") || path.contains("\\")) {
            record("Requête refusée : " + uri.getScheme() + "://" + uri.getHost());
            return error(403, "Forbidden");
        }
        try {
            InputStream stream = getAssets().open(path.substring(1));
            String mime = path.endsWith(".wasm") ? "application/wasm"
                : path.endsWith(".js") ? "application/javascript"
                : path.endsWith(".html") ? "text/html"
                : path.endsWith(".css") ? "text/css"
                : path.endsWith(".m4a") ? "audio/mp4"
                : path.endsWith(".txt") ? "text/plain"
                : path.endsWith(".json") ? "application/json"
                : path.endsWith(".svg") ? "image/svg+xml" : "application/octet-stream";
            String encoding = mime.startsWith("text/") || mime.equals("application/javascript") ? "UTF-8" : null;
            Map<String, String> headers = new HashMap<>();
            headers.put("Cache-Control", "no-cache");
            headers.put("X-Content-Type-Options", "nosniff");
            if (path.endsWith(".m4a")) {
                long length = stream.available();
                headers.put("Accept-Ranges", "bytes");
                headers.put("Content-Length", Long.toString(length));
                String range = null;
                for (Map.Entry<String, String> header : requestHeaders.entrySet()) {
                    if ("Range".equalsIgnoreCase(header.getKey())) range = header.getValue();
                }
                if (range != null) {
                    java.util.regex.Matcher match = java.util.regex.Pattern.compile("bytes=(\\d+)-(\\d*)").matcher(range);
                    if (!match.matches()) { stream.close(); return error(416, "Range Not Satisfiable"); }
                    long start, end;
                    try {
                        start = Long.parseLong(match.group(1));
                        end = match.group(2).isEmpty() ? length - 1 : Math.min(length - 1, Long.parseLong(match.group(2)));
                    } catch (NumberFormatException exception) { stream.close(); return error(416, "Range Not Satisfiable"); }
                    if (start > end || start >= length) { stream.close(); return error(416, "Range Not Satisfiable"); }
                    long skipped = 0;
                    while (skipped < start) {
                        long n = stream.skip(start - skipped);
                        if (n == 0) { if (stream.read() < 0) throw new IOException("Unexpected end"); n = 1; }
                        skipped += n;
                    }
                    headers.put("Content-Range", "bytes " + start + "-" + end + "/" + length);
                    headers.put("Content-Length", Long.toString(end - start + 1));
                    return new WebResourceResponse(mime, null, 206, "Partial Content", headers, new LimitedStream(stream, end - start + 1));
                }
            }
            return new WebResourceResponse(mime, encoding, 200, "OK", headers, stream);
        } catch (IOException exception) {
            record("Fichier local absent : " + path);
            return error(404, "Not Found");
        }
    }

    private static final class LimitedStream extends FilterInputStream {
        private long remaining;
        LimitedStream(InputStream in, long length) { super(in); remaining = length; }
        @Override public int read() throws IOException {
            if (remaining == 0) return -1;
            int value = super.read(); if (value >= 0) remaining--; return value;
        }
        @Override public int read(byte[] buffer, int offset, int length) throws IOException {
            if (length == 0) return 0;
            if (remaining == 0) return -1;
            int count = in.read(buffer, offset, (int) Math.min(length, remaining));
            if (count > 0) remaining -= count; return count;
        }
    }

    private static WebResourceResponse error(int status, String reason) {
        return new WebResourceResponse("text/plain", "UTF-8", status, reason, Collections.emptyMap(),
            new ByteArrayInputStream(reason.getBytes(StandardCharsets.UTF_8)));
    }

    private synchronized void record(String message) {
        if (log.size() >= 100) log.removeFirst();
        log.addLast(message.substring(0, Math.min(message.length(), 800)));
    }

    private synchronized void copyDiagnostic() {
        ClipboardManager clipboard = (ClipboardManager) getSystemService(CLIPBOARD_SERVICE);
        clipboard.setPrimaryClip(ClipData.newPlainText("Max YutNori — diagnostic", String.join("\n", log)));
        Toast.makeText(this, "Diagnostic copié", Toast.LENGTH_SHORT).show();
    }

    private void hideBars() {
        if (Build.VERSION.SDK_INT >= 30) {
            WindowInsetsController control = getWindow().getInsetsController();
            if (control != null) {
                control.hide(WindowInsets.Type.systemBars());
                control.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION);
        }
    }

    @Override public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideBars();
    }
    private void sendPauseState() {
        boolean paused = !foreground || (exitDialog != null && exitDialog.isShowing());
        if (motion != null) motion.setEnabled(motionAllowed());
        if (webView != null) webView.evaluateJavascript("window.setNativePaused?.(" + paused + ")", null);
    }
    private boolean motionAllowed() {
        return motionRequested && foreground && webView != null && START.equals(webView.getUrl())
            && (exitDialog == null || !exitDialog.isShowing());
    }
    private final class MotionBridge {
        @JavascriptInterface public boolean available() { return motion != null && motion.available(); }
        @JavascriptInterface public void setEnabled(boolean enabled) {
            runOnUiThread(() -> {
                motionRequested = enabled;
                if (motion != null) motion.setEnabled(motionAllowed());
            });
        }
    }
    @Override protected void onPause() {
        foreground = false;
        sendPauseState();
        if (webView != null) webView.onPause();
        record("Pause");
        super.onPause();
    }
    @Override protected void onResume() {
        super.onResume();
        foreground = true;
        if (webView != null) webView.onResume();
        sendPauseState();
        record("Reprise");
    }
    // Legacy fallback for API 26-32 only. API 33+ uses the platform dispatcher
    // registered in onCreate; predictive back on Android 16 is therefore handled.
    @SuppressLint("GestureBackNavigation")
    @SuppressWarnings("deprecation")
    @Override public void onBackPressed() {
        showExitDialog();
    }
    private void showExitDialog() {
        if (exitDialog != null && exitDialog.isShowing()) return;
        exitDialog = new AlertDialog.Builder(this).setTitle("Max YutNori — " + BuildConfig.VERSION_NAME)
            .setMessage("Quitter la partie en cours ?")
            .setPositiveButton("Quitter", (dialog, which) -> finish())
            .setNegativeButton("Continuer", (dialog, which) -> hideBars())
            .setNeutralButton("Copier le diagnostic", (dialog, which) -> {
                if (webView != null) webView.evaluateJavascript("JSON.stringify(window.maxYutDiagnostic?.())", value -> { record(value); copyDiagnostic(); });
                else copyDiagnostic();
            }).create();
        exitDialog.setOnDismissListener(dialog -> { exitDialog = null; sendPauseState(); hideBars(); });
        exitDialog.show();
        sendPauseState();
    }
    @Override protected void onDestroy() {
        if (motion != null) motion.setEnabled(false);
        if (webView != null) {
            root.removeView(webView);
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
