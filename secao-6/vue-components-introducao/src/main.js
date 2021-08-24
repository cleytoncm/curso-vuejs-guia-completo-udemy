import Vue from 'vue';
// import AppContador from './AppContador';
import App from './App';

// Vue.component('app-contador', AppContador);

new Vue({
    render: h => h(App),
}).$mount('#app');
