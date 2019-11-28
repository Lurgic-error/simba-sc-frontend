import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import './plugins/vee-validate';
import './assets/styles/main.scss';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false;


Vue.component('ValidationObserver',ValidationObserver);
Vue.component('ValidationProvider',ValidationProvider);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
