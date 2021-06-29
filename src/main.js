import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import VueHighlightJS from 'vue-highlightjs'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueHighlightJS)
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
