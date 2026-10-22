package fr.fab.maxyutnori;

import android.app.Activity;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Build;
import android.view.Surface;

/** Sensor callbacks and lifecycle run on the UI thread. */
final class MotionSensors implements SensorEventListener {
    interface Listener {
        void sample(float x, float y, float z, double milliseconds);
        void tilt(float x, float y, float z, double milliseconds);
        void availability(boolean available);
    }
    private final Activity activity;
    private final SensorManager manager;
    private final Sensor acceleration, linear;
    private final Listener listener;
    private final float[] gravity = new float[3];
    private boolean listening, gravityReady, useLinear;
    private volatile boolean available;
    private long previous, started, delivered, tiltDelivered;

    MotionSensors(Activity activity, Listener listener) {
        this.activity = activity;
        this.listener = listener;
        manager = (SensorManager) activity.getSystemService(Activity.SENSOR_SERVICE);
        acceleration = manager == null ? null : manager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        linear = manager == null ? null : manager.getDefaultSensor(Sensor.TYPE_LINEAR_ACCELERATION);
        available = acceleration != null || linear != null;
    }
    boolean available() { return available; }
    void setEnabled(boolean enabled) {
        boolean desired = enabled && available;
        if (desired == listening) return;
        if (!desired) { manager.unregisterListener(this); listening = false; return; }
        gravityReady = false;
        previous = started = delivered = tiltDelivered = 0;
        boolean hasAcceleration = false;
        useLinear = false;
        try {
            if (acceleration != null) hasAcceleration = manager.registerListener(this, acceleration, SensorManager.SENSOR_DELAY_GAME);
            if (linear != null) useLinear = manager.registerListener(this, linear, SensorManager.SENSOR_DELAY_GAME);
            listening = hasAcceleration || useLinear;
        } catch (RuntimeException failure) { manager.unregisterListener(this); listening = false; }
        if (!listening) { available = false; listener.availability(false); }
    }
    @SuppressWarnings("deprecation")
    private int rotation() {
        return Build.VERSION.SDK_INT >= 30 && activity.getDisplay() != null
            ? activity.getDisplay().getRotation() : activity.getWindowManager().getDefaultDisplay().getRotation();
    }
    private void deliver(float x, float y, float z, long time, boolean tilt) {
        float screenX = x, screenY = y;
        switch (rotation()) {
            case Surface.ROTATION_90: screenX = -y; screenY = x; break;
            case Surface.ROTATION_180: screenX = -x; screenY = -y; break;
            case Surface.ROTATION_270: screenX = y; screenY = -x; break;
            default: break;
        }
        if (tilt) listener.tilt(screenX, screenY, z, time / 1_000_000.0);
        else listener.sample(screenX, screenY, z, time / 1_000_000.0);
    }
    @Override public void onSensorChanged(SensorEvent event) {
        if (!listening || event.values.length < 3) return;
        float x = event.values[0], y = event.values[1], z = event.values[2];
        if (!Float.isFinite(x) || !Float.isFinite(y) || !Float.isFinite(z)) return;
        if (started == 0) started = event.timestamp;
        boolean ready = event.timestamp - started >= 400_000_000L;
        if (event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
            if (previous != 0 && event.timestamp <= previous) return;
            if (!gravityReady) { gravity[0] = x; gravity[1] = y; gravity[2] = z; gravityReady = true; }
            double dt = previous == 0 ? 0.02 : Math.min(0.2, (event.timestamp - previous) / 1e9);
            float alpha = (float) Math.exp(-dt / 0.35);
            for (int i = 0; i < 3; i++) gravity[i] = alpha * gravity[i] + (1 - alpha) * event.values[i];
            previous = event.timestamp;
            if (ready && event.timestamp - tiltDelivered >= 30_000_000L) {
                tiltDelivered = event.timestamp;
                deliver(gravity[0], gravity[1], gravity[2], event.timestamp, true);
            }
            if (useLinear) return;
            x -= gravity[0]; y -= gravity[1]; z -= gravity[2];
        } else if (!useLinear) return;
        if (!ready || event.timestamp - delivered < 30_000_000L) return;
        delivered = event.timestamp;
        deliver(x, y, z, event.timestamp, false);
    }
    @Override public void onAccuracyChanged(Sensor sensor, int accuracy) { }
}
