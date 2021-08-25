<template>
  <div id="app" class="container">
    <h1>VueJS</h1>

    <PostsLista :posts="posts" />
    <hr>
    <h1>Slots com escopo</h1>
    <PostsLista :posts="posts">
      <template slot-scope="{meuPost}">
        <h2>{{meuPost.titulo}}</h2>
        <p>{{meuPost.conteudo}}</p>
        <small>{{meuPost.autor}}</small>
      </template>
    </PostsLista>

  </div>
</template>

<script>
  import PostsLista from './components/PostsLista';

  export default {
    components: {
      PostsLista
    },
    data() {
      return {
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