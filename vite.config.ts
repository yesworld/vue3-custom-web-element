import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'

const command = process.env.npm_lifecycle_event.split(':')

if (!command[1]) {
  throw new Error('Incorrect script syntax. [environment]:[name_project]');
}

const application = command[1]

export default defineConfig({
  root: 'src/'+application,
  plugins: [
    inject({
      $: 'jquery',
    }),
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
    lib: {
      entry: `./main.ce.ts`,
      name: 'vue-web-custom-element',
      fileName: 'vue-web-custom-element'
    },
    sourcemap: true,
    target: 'esnext',
    minify: false,
    rollupOptions: {
      // external: ['vue'],
      // output: {
      //   globals: {
      //     vue: 'Vue',
      //   }
      // }
    },
  },
  define: {
    'process.env': {}
    // 'process': {
    //   env: process.env.NODE_ENV
    // }
  }
})
