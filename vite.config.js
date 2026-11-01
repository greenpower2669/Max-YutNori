import {defineConfig} from 'vite';
import {webPwaPlugin} from './scripts/build-pwa-plugin.mjs';
export default defineConfig(({mode})=>({root:'web',base:'./',plugins:mode==='web'?[webPwaPlugin()]:[],build:{outDir:mode==='web'?'../pwa-dist':'../web-dist/game',emptyOutDir:true,chunkSizeWarningLimit:3000}}));
