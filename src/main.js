import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'contentful-ui-extensions-sdk/dist/cf-extension.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
