import Vue from 'vue';
import VueRouter from "vue-router";

// import Contatos from "./views/contatos/Contatos";

import Error404 from "./views/Error404";
import Erro404Contatos from "./views/contatos/Erro404Contatos";
import Login from "./views/login/Login";

import EventBus from './event-bus';

const Contatos = () => import(/* webpackChunkName: "contatos" */ "./views/contatos/Contatos");
const ContatoDetalhes = () => import(/* webpackChunkName: "contatos" */ "./views/contatos/ContatoDetalhes");
const ContatoHome = () => import(/* webpackChunkName: "contatos" */ "./views/contatos/ContatoHome");
const ContatoEditar = () => import(/* webpackChunkName: "contatos" */ "./views/contatos/ContatoEditar");
const Home = () => import("./views/Home");

Vue.use(VueRouter);

const extrairParamentroId = route => ({ id: +route.params.id });

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'btn btn-dark',
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        // caso queira aguardar animação da página terminar e depois descer até a ancora
        // eslint-disable-next-line no-unused-vars
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         if (savedPosition) {
        //             return resolve(savedPosition);
        //         }
        //         if (to.hash) {
        //             return resolve({
        //                 selector: to.hash,
        //                 offset: { x: 0, y: 0 }
        //             });
        //         }
        //         resolve({ x: 0, y: 0 });
        //     }, 3000)
        // });

        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: to.hash,
                offset: { x: 0, y: 0 }
            }
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            // component: () => import("./views/contatos/Contatos"),
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
                    meta: {
                        requerAutenticacao: true,
                    },
                    beforeEnter(to, from, next){
                        console.log('beforeEnter');
                        // if (to.query.autenticado === 'true') {
                        //     return next();
                        // }
                        // next('/contatos');
                        next(); // continuar
                        // next(true); // continuar
                        // next(false); // bloquear
                        // next('/contatos'); // redirecionar
                        // next({ name: 'contatos' }); // redirecionar - pode usar o mesmo esquema de objeto da routelink
                        // next(new Error(`Permissões insuficientes para acessar o recurso "${to.fullPath}"`)); // lançar erro

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
        { path: '/login', component: Login },
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
    console.log('Requer Autenticação?', to.meta.requerAutenticacao);
    const estaAutenticado = EventBus.autenticado
    if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
        if (!estaAutenticado) {
            next({
                path: '/login',
                query: { redirecionar: to.fullPath }
            })
            return;
        }
    }
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

router.onError((erro) => {
    console.log(erro)
})

export default router;