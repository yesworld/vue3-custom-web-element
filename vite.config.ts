import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const application = process.env.VITE_APP ? process.env.VITE_APP : 'default'
console.log(application)

export default defineConfig({
  root: 'src/'+application,
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
    outDir: resolve(__dirname, `./dist/${application}`),
    // minify: 'esbuild',
    lib: {
      entry: `./main.ce.ts`,
      name: 'vue-web-custom-element',
      fileName: 'vue-web-custom-element'
    },
  },
  define: {
    'process.env': {}
    // 'process': {
    //   env: process.env.NODE_ENV
    // }
  }
})
