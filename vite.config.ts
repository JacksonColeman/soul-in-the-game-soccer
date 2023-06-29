import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/soul-in-the-game-soccer',
  build: {
    outDir: 'docs',
  },
});