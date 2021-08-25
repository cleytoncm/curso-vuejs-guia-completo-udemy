<template>
  <div id="app" class="container">
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsList'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>

    <p>{{componentSelecionado}}</p>

    <component :is="componentSelecionado"></component>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import PostsLista from './components/PostsLista';
  import Sobre from "./components/Sobre";

  export default {
    components: {
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
    }
  }
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>