import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(
      {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('vue-')
        }
      }
    }
    )
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'vue-web-custom-element',
      // the proper extensions will be added
      fileName: 'vue-web-custom-element'
    }
  },
  define: {
    // 'process.env': process.env
    'process': {
      env: process.env.NODE_ENV
    }
  }
})
