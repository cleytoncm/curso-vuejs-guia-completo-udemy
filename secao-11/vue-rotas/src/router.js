import Vue from 'vue';
import VueRouter from "vue-router";

import Contatos from "./views/contatos/Contatos";
import Home from "./views/Home";
import ContatoDetalhes from "./views/contatos/ContatoDetalhes";
import ContatoHome from "./views/contatos/ContatoHome";
import ContatoEditar from "./views/contatos/ContatoEditar";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'btn btn-dark',
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            children: [
                { path: ':id', component: ContatoDetalhes, name: 'contato' },
                {
                    path: ':id/editar',
                    components: {
                        default: ContatoEditar,
                        'contato-detalhes': ContatoDetalhes
                    }
                },
                { path: '', component: ContatoHome },
            ]
        },
        { path: '/', component: Home },
    ],
});