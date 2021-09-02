import { AliasOptions, defineConfig } from 'vite'
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig(({ command }) => {
  const alias: AliasOptions = [
    {
      find: '@',
      replacement: resolve(__dirname, 'src'),
    },
    {
      find: '@@',
      replacement: resolve(__dirname, 'demo'),
    },
  ]

  if (command === 'serve') {
    return {
      plugins: [reactRefresh()],
      root: resolve(__dirname, 'demo'),
      resolve: { alias },
    }
  }

  return {
    alias,
  }
})
