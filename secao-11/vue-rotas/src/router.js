import Vue from 'vue';
import VueRouter from "vue-router";

import Contatos from "./views/contatos/Contatos";
import Home from "./views/Home";
import ContatoDetalhe from "./views/contatos/ContatoDetalhe";
import ContatoHome from "./views/contatos/ContatoHome";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'btn btn-dark',
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            children: [
                { path: ':id', component: ContatoDetalhe },
                { path: '', component: ContatoHome },
            ]
        },
        { path: '/', component: Home },
    ],
});