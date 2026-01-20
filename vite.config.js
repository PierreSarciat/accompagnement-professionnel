import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url'; // Nécessaire pour convertir les chemins

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@logo': fileURLToPath(new URL('./src/assets/logo', import.meta.url)), 
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)), // Alias pour le dossier logo
    },
  },
});
