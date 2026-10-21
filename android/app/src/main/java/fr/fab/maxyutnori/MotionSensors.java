package fr.fab.maxyutnori;

import android.app.Activity;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Build;
import android.view.Surface;

/** All lifecycle methods and samples run on the UI thread. No permission or network needed. */
final class MotionSensors implements SensorEventListener {
    interface Listener {
        void sample(float x, float y, float z, double milliseconds);
        void availability(boolean available);
    }
    private final Activity activity;
    private final SensorManager manager;
    private final Sensor sensor;
    private final Listener listener;
    private final float[] gravity = new float[3];
    private boolean listening, gravityReady;
    private volatile boolean available;
    private long previous, started, delivered;

    MotionSensors(Activity activity, Listener listener) {
        this.activity = activity;
        this.listener = listener;
        manager = (SensorManager) activity.getSystemService(Activity.SENSOR_SERVICE);
        Sensor candidate = manager == null ? null : manager.getDefaultSensor(Sensor.TYPE_LINEAR_ACCELERATION);
        if (candidate == null && manager != null) candidate = manager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        sensor = candidate;
        available = sensor != null;
    }
    boolean available() { return available; }
    void setEnabled(boolean enabled) {
        boolean desired = enabled && available;
        if (desired == listening) return;
        if (!desired) { manager.unregisterListener(this); listening = false; return; }
        gravityReady = false;
        previous = started = delivered = 0;
        try { listening = manager.registerListener(this, sensor, SensorManager.SENSOR_DELAY_GAME); }
        catch (RuntimeException failure) { listening = false; }
        if (!listening) { available = false; listener.availability(false); }
    }
    @SuppressWarnings("deprecation")
    private int rotation() {
        return Build.VERSION.SDK_INT >= 30 && activity.getDisplay() != null
            ? activity.getDisplay().getRotation() : activity.getWindowManager().getDefaultDisplay().getRotation();
    }
    @Override public void onSensorChanged(SensorEvent event) {
        if (!listening || event.values.length < 3) return;
        float x = event.values[0], y = event.values[1], z = event.values[2];
        if (!Float.isFinite(x) || !Float.isFinite(y) || !Float.isFinite(z)) return;
        if (started == 0) started = event.timestamp;
        if (sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
            if (!gravityReady) { gravity[0] = x; gravity[1] = y; gravity[2] = z; gravityReady = true; }
            double dt = previous == 0 ? 0.02 : Math.min(0.2, (event.timestamp - previous) / 1e9);
            float alpha = (float) Math.exp(-dt / 0.35);
            for (int i = 0; i < 3; i++) gravity[i] = alpha * gravity[i] + (1 - alpha) * event.values[i];
            x -= gravity[0]; y -= gravity[1]; z -= gravity[2];
        }
        previous = event.timestamp;
        if (event.timestamp - started < 400_000_000L || event.timestamp - delivered < 30_000_000L) return;
        delivered = event.timestamp;
        float screenX = x, screenY = y;
        switch (rotation()) {
            case Surface.ROTATION_90: screenX = -y; screenY = x; break;
            case Surface.ROTATION_180: screenX = -x; screenY = -y; break;
            case Surface.ROTATION_270: screenX = y; screenY = -x; break;
            default: break;
        }
        listener.sample(screenX, screenY, z, event.timestamp / 1_000_000.0);
    }
    @Override public void onAccuracyChanged(Sensor sensor, int accuracy) { }
}
