import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自定义的vite插件
import { viteHookBind } from './src/plugins/viteHookBind'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteHookBind()
  ],
})
