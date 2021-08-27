<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinamento transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
<!--      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>-->

      <div class="form-group mb-3">
        <label>Animações:</label>
        <select class="form-control" v-model="animacaoSelecionada">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
          <option value="zoom">Zoom</option>
        </select>
      </div>

      <div class="form-group mb-3">
        <label>Mensagem:</label>
        <select class="form-control" v-model="alertaAtual">
          <option value="info">Informação</option>
          <option value="warning">Alerta</option>
          <option value="success">Sucesso</option>
        </select>
      </div>

      <div class="form-group mb-3">
        <label>Component:</label>
        <select class="form-control" v-model="componenteSelecionado">
          <option value="AppHome">Home</option>
          <option value="AppSobre">Sobre</option>
        </select>
      </div>

<!--      <transition :name="animacaoSelecionada" mode="out-in">-->
<!--        <div :class="classesDeAlerta" :key="alertaAtual">Animações no Vue</div>-->
<!--&lt;!&ndash;        <div class="alert alert-warning" v-if="alertaAtual === 'warning'" key="warning">Animações no Vue (alerta)</div>-->
<!--        <div class="alert alert-success" v-if="alertaAtual === 'success'" key="sucesso">Animações no Vue (success)</div>&ndash;&gt;-->
<!--      </transition>-->

      <transition :name="animacaoSelecionada" mode="out-in">
        <component :is="componenteSelecionado"></component>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppHome: () => import('./components/Home'),
    AppSobre: () => import('./components/Sobre'),
  },
  computed: {
    classesDeAlerta() {
      return {
        alert: true,
        [`alert-${this.alertaAtual}`]: true
      }
    },
  },
  data() {
    return {
      mostrar: true,
      animacaoSelecionada: 'fade',
      alertaAtual: 'info',
      componenteSelecionado: 'AppHome',
    }
  },
}
</script>

<style>
  body {
    overflow: hidden;
  }
</style>

<style scoped>
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

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide 0.7s ease-in-out;
    transition: opacity 0.7s;
  }

  .slide-leave-active {
    animation: slide 0.7s reverse;
    transition: opacity 0.7s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-100px);
    }

    100% {
      transform: translateX(0);
    }
  }
</style>
