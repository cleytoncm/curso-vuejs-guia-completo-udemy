<template>
  <div id="app" class="container">
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'Assincrono'">Assincrono</button>
    <button @click="componentSelecionado = 'Contato'">Contato</button>

<!--    <keep-alive :include="'Sobre'">-->
<!--    <keep-alive :exclude="['Home', 'PostsLista']">-->
<!--    <keep-alive :include="/Home|Sobre/">-->
<!--    <keep-alive :include="/Home|Sobre/">-->
    <keep-alive max="2">
      <component :is="componentSelecionado" v-bind="propsAtuais"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import PostsLista from './components/PostsLista';
  import Sobre from "./components/Sobre";

  const Contato = {
    render: h => h({
      name: 'ContatoDados',
      template: '<h2>Component Anonimo</h2>'
    })
  }

  export default {
    components: {
      Assincrono: () => ({
        // eslint-disable-next-line no-unused-vars
        component: new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(import('./components/Assincrono'));
          }, 2000)
        }),
        loading: { template: '<p>Carregando...</p>' },
        error: { template: '<p>Erro ao carregar components!</p>' },
        delay: 200,
        timeout: 3000
      }),
      Contato,
      Home,
      PostsLista,
      Sobre
    },
    data() {
      return {
        componentSelecionado: 'Home',
        posts: [
          {id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes do Vue', autor: 'Cleyton de Castro'},
          {id: 2, titulo: 'Distribuindo conteúdo em slots', conteudo: 'Slosts podem ser usados como repositórios de códigos HTML', autor: 'Cleyton de Castro'},
        ]
      }
    },
    computed: {
      propsAtuais() {
        return this.componentSelecionado === 'PostsLista' ? { posts: this.posts } : {}
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>