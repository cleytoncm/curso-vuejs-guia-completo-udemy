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

const extrairParamentroId = route => ({ id: +route.params.id });

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'btn btn-dark',
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            alias: ['/meus-contatos', '/lista-de-contatos'],
            props: (route) => {
                const busca = route.query.busca;
                return busca ? { busca } : {};
            },
            children: [
                {
                    path: ':id(\\d+)',
                    component: ContatoDetalhes,
                    name: 'contato',
                    props: extrairParamentroId,
                },
                {
                    // path: ':id(\\d+)/editar/:opcional?',
                    // path: ':id(\\d+)/editar/:zeroOuMais*',
                    // path: ':id(\\d+)/editar/:umOuMais+',
                    path: ':id(\\d+)/editar',
                    alias: ':id(\\d+)/alterar',
                    beforeEnter(to, from, next){
                        console.log('beforeEnter');
                        // if (to.query.autenticado === 'true') {
                        //     return next();
                        // }
                        // next('/contatos');
                        next();
                    },
                    components: {
                        default: ContatoEditar,
                        'contato-detalhes': ContatoDetalhes,
                    },
                    props: {
                      default: extrairParamentroId,
                      'contato-detalhes': extrairParamentroId,
                    },
                },
                { path: '', component: ContatoHome, name: 'contatos' },
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

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    next();
});

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve');
    next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    console.log('afterEach');
});

export default router;