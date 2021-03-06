
import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import '../imports/ui/plugins'
import App from '../imports/ui/App.vue'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'
import VueRouter from 'vue-router'
import routes from '/imports/routes';
import axios from 'axios';
import { db, api, mqtt } from '../env.js'


const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: "bg-gray-dark-light text-bold",
})
Meteor.startup(() => {
  
  Vue.prototype.$http = axios;
  Vue.prototype.$sideNavigationToggle = false;
  Vue.prototype.$param = { db:db(), api:api(), mqtt:mqtt() };
  Vue.use(mdiVue, {
    icons: mdijs
  }) 
  Vue.use(VueRouter)
  Vue.use(Vuesax, {
    colors: {
      primary:'rgb(20, 20, 20)',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark: 'rgb(20, 20, 20)',
      greenLight: 'rgb(22, 138, 63)'
    }
  })
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app")
})
