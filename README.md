# Vue 3 and Web Components

Web Components is an umbrella term for a set of web native APIs that allows developers to create reusable custom elements.

We consider Vue and Web Components to be primarily complementary technologies. Vue has excellent support for both consuming and creating custom elements. Whether you are integrating custom elements into an existing Vue application, or using Vue to build and distribute custom elements, you are in good company.

[How to use Custom Elements in Vue](https://vuejs.org/guide/extras/web-components#using-custom-elements-in-vue)

## How to use the project?

To run project number 1:
```shell
npm run dev:app1
```

Build:
```shell
npm run build:app1
```

## Troubleshoot

### With vue3
```shell
Uncaught TypeError: Failed to resolve module specifier "vue". Relative references must start with either "/", "./", or "../".
```

[https://stackoverflow.com/questions/52612446/importing-a-package-in-es6-failed-to-resolve-module-specifier-vue](https://stackoverflow.com/questions/52612446/importing-a-package-in-es6-failed-to-resolve-module-specifier-vue):
```html
<script type="importmap">
  { "imports": {
      "vue":        "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.prod.js",
      "vue-router": "https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.5/vue-router.esm-browser.min.js"
  } }
</script>
```

### Without vue3
Make sure to also externalize any dependencies that you do not want to bundle into your library, e.g. **vue** or **react**.
Add external to config **vite.config.ts**.

[https://vitejs.dev/guide/build#library-mode](https://vitejs.dev/guide/build#library-mode)
```ts
{
  // other code...
  rollupOptions: {
    external: ['vue'],
      output: {
      globals: {
        vue: 'Vue',
      }
    }
  },
}

```

## Create example file 
Gitignore patter: **test-*.html**

Copy file `test-web-component.html.example` to `test-web-component.html`.

### Thanks!
If this helped you, please click Patrick ⭐️. 
