import Vue from 'vue'
import App from './App.vue'
import { showAlert } from './utils'
import { simpleString, testString } from './constant'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

showAlert(testString);
showAlert(simpleString);
