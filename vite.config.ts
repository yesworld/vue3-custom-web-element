import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const command = process.env.npm_lifecycle_event.split(':')

if (!command[1]) {
  throw new Error('Incorrect script syntax. [environment]:[name_project]');
}

const application = command[1]

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
