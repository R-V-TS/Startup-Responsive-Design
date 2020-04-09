import Vue from 'vue'
import App from './App.vue'
import device from 'vue-device-detector'

Vue.config.productionTip = false
Vue.use(device)

new Vue({
  render: h => h(App),
}).$mount('#app')
