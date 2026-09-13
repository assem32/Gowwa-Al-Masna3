import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gowwa-Al-Masna3/',
  server: {
    allowedHosts: [
      'envision-unsettled-oxidize.ngrok-free.dev'
    ]
  }
})
