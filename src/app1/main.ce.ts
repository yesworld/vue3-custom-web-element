import { defineCustomElement } from 'vue'
import VueWebCustomElement from './VueWebCustomElement.vue'

const webCustomElement = defineCustomElement(VueWebCustomElement)

customElements.define('vue-web-custom-element-a', webCustomElement)
