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
      name: 'simple-sample',
      // the proper extensions will be added
      fileName: 'simple-sample'
    }
  },
  define: {
    'process.env': process.env
  }
})
