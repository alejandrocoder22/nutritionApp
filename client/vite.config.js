import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // Config of vitest
    environment: 'happy-dom'
  }
})
