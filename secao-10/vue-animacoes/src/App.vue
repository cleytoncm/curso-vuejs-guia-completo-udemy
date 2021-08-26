<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinamento transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>

      <transition name="zoom">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
    }
  },
}
</script>

<style scoped>

  .zoom-enter, .zoom-leave-to {
    transform: scale(0);
  }

  .zoom-enter-active, .zoom-leave-active {
    transition: transform 0.5s;
  }

  /* Não necessário para o caso de transform: scale */
  /*.zoom-enter-to, .zoom-leave {
    transform: scale(1);
  }*/

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  /* Não necessário para o caso de opacity */
  /*.fade-enter-to, .fade-leave {
    opacity: 1;
  }*/
</style>
