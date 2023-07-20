import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

function resize() {
  const styles: any = document.body.style
  styles.zoom = window.innerWidth <= 1450 ? 1 : window.innerWidth / 1920
}
window.onresize = resize

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(Toast).use(pinia).use(router).mount('#app')

resize()
