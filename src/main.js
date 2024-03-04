import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/main.css'; 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueFormulate from "@braid/vue-formulate";


Vue.use(VueFormulate);


new Vue({
  render: (h) => h(App)
}).$mount('#app')
