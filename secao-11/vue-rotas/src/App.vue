<template>
  <div id="app">
    <div class="p-5 mb-4 bg-light rounded-3">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">

      <router-link
          to="/"
          class="btn btn-info mb-4 me-2"
          exact
      >
        Home
      </router-link>
      <router-link
          :to="{ path: '/contatos' }"
          class="btn btn-info mb-4 me-2"
      >
        Contatos
      </router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>
