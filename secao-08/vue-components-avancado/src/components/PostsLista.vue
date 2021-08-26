<template>
  <div>
    <h2>Lista de posts</h2>
    <PostsListaItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
    >
      <slot :meuPost="post"></slot>
    </PostsListaItem>
  </div>
</template>

<script>
import PostsListaItem from "./PostsListaItem";

export default {
  components: {
    PostsListaItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>