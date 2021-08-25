<template>
  <div id="app">
    <h1>VueJS</h1>
    <Post titulo="Components no Vue">
      <h2>Components no Vue</h2>
      <p>Compopnents são uma das peças mais importantes no Vue</p>
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