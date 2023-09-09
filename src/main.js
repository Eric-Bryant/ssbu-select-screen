import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp({
  store,
  render: (h) => h(App),
})

app.use(store)

app.mount('#app')