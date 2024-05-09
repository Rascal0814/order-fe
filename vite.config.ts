import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.VITE_BASE_URL)

  return {
    plugins: [uni()],
    server: {
      port: 8888,
      proxy: {
        '/api': {
          // target: env.VITE_BASE_URL,
          target: 'http://43.143.80.123:8000',
          changeOrigin: true,
        },
      },
    },
  }
})
