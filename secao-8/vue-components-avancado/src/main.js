import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
// eslint-disable-next-line no-unused-vars
Vue.component('Assincrono', (resolve, reject) => {
  setTimeout(() => {
    resolve({
      template: '<h2>Component Assincrono</h2>'
    });
  }, 2000);

  // chamar reject em caso de erro
});
*/

/*Vue.component('Assincrono',
    () => import('./components/Assincrono')
);*/

new Vue({
  render: h => h(App),
}).$mount('#app')
