import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/git
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    target: 'es2018'
  }
})
