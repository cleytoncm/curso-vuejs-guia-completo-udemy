import Vue from 'vue';
import VueRouter from "vue-router";

import Contatos from "./views/contatos/Contatos";
import Home from "./views/Home";
import ContatoDetalhes from "./views/contatos/ContatoDetalhes";
import ContatoHome from "./views/contatos/ContatoHome";
import ContatoEditar from "./views/contatos/ContatoEditar";
import Error404 from "./views/Error404";
import Erro404Contatos from "./views/contatos/Erro404Contatos";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'btn btn-dark',
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            alias: ['/meus-contatos', '/lista-de-contatos'],
            children: [
                { path: ':id', component: ContatoDetalhes },
                {
                    path: ':id/editar',
                    alias: ':id/alterar',
                    components: {
                        default: ContatoEditar,
                        'contato-detalhes': ContatoDetalhes
                    }
                },
                { path: '', component: ContatoHome, name: 'contato' },
                { path: '*', component: Erro404Contatos },
            ]
        },
        { path: '/home', component: Home },
        // { path: '/', redirect: '/contatos' },
        {
            path: '/',
            // eslint-disable-next-line no-unused-vars
            redirect: to => {
                return '/contatos'
            }
        },
        { path: '*', component: Error404 },
    ],
});