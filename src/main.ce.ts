import { defineCustomElement } from 'vue'
import SimpleSampleComponent from './SimpleSample.vue'

const SimpleSample = defineCustomElement(SimpleSampleComponent)

customElements.define('simple-sample', SimpleSample)
