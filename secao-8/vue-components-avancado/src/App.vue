<template>
  <div id="app" class="container">
    <h1>VueJS</h1>
    <Post titulo="Components no Vue">
      <h2 slot="cabecalho">Components no Vue</h2>
      <template slot="conteudo">
        <p slot="conteudo">Compopnents são uma das peças mais importantes no Vue</p>
        <span>...</span>
      </template>
      <small slot="rodape">por Cleyton de Castro</small>
    </Post>
  </div>
</template>

<script>
  import Post from './components/Post';

  export default {
    components: {
      Post
    }
  }
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>