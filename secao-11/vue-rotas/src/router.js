import Vue from 'vue';
import VueRouter from "vue-router";

import Contatos from "./views/contatos/Contatos";
import Home from "./views/Home";
import ContatoDetalhe from "./views/contatos/ContatoDetalhe";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'btn btn-dark',
    routes: [
        { path: '/contatos', component: Contatos },
        { path: '/contatos/:id', component: ContatoDetalhe },
        { path: '/', component: Home },
    ],
});