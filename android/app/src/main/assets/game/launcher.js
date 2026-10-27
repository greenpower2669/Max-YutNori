'use strict';
const canvas = document.querySelector('#unity-canvas');
const loading = document.querySelector('#loading');
const statusText = document.querySelector('#status');
const progressBar = document.querySelector('#progress');
window.__gameReady = false;
window.__gameError = null;
function showError(error) {
  const message = String(error && error.message || error);
  window.__gameError = message;
  console.error('[MaxYutNori] ' + message);
  loading.hidden = false;
  progressBar.hidden = true;
  statusText.textContent = 'Le jeu n’a pas pu démarrer. ' + message;
  document.querySelector('#retry').hidden = false;
}
window.addEventListener('error', event => showError(event.message));
window.addEventListener('unhandledrejection', event => showError(event.reason));
if (typeof createUnityInstance !== 'function') {
  showError('Le chargeur du jeu est manquant.');
} else {
  createUnityInstance(canvas, {
    dataUrl: 'Build/game.data',
    frameworkUrl: 'Build/framework.js',
    codeUrl: 'Build/game.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'play.unity.com',
    productName: 'Unity Play Project',
    productVersion: '1.0',
    devicePixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
    showBanner: (message, type) => {
      if (type === 'error') showError(message);
      else console.log('[Unity] ' + message);
    }
  }, progress => {
    progressBar.value = progress;
    statusText.textContent = 'Chargement du jeu… ' + Math.round(progress * 100) + ' %';
  }).then(instance => {
    window.gameInstance = instance;
    window.__gameReady = true;
    loading.hidden = true;
    canvas.focus();
    console.log('[MaxYutNori] GAME_READY');
  }).catch(showError);
}
