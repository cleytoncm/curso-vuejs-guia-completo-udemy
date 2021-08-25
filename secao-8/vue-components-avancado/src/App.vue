<template>
  <div id="app" class="container">
    <h1>VueJS</h1>
    <Post titulo="Components no Vue">
      <h2 slot="cabecalho">Components no Vue</h2>
      <template>
        <p class="post-paragrafo">Components são uma das peças mais importantes no Vue</p>
        <span>...</span>
      </template>
      <small slot="rodape">por {{autor}}</small>
    </Post>
  </div>
</template>

<script>
  import Post from './components/Post';

  export default {
    components: {
      Post
    },
    data() {
      return {
        autor: 'Cleyton de Castro'
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