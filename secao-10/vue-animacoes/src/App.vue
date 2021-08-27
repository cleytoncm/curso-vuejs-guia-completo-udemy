<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinamento transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <h3 class="font-weight-light">Animações de estado</h3>

      <div class="form-group">
        <input class="form-control" v-model="numero" step="50">
      </div>

      <div class="alert alert-info">
        <h3 class="font-weight-light">
          <strong>Número: </strong>
          <span>{{ numero }}</span>
        </h3>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: 0,
    }
  },
}
</script>

