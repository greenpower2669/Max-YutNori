import {defineConfig} from 'vite';
export default defineConfig({root:'web',base:'./',build:{outDir:'../web-dist/game',emptyOutDir:true,chunkSizeWarningLimit:3000}});
