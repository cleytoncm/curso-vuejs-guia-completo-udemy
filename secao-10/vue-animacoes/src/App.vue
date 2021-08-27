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

<!--      <transition
          enter-class=""
          enter-active-class="animate__animated animate__bounceInLeft"
          enter-to-class=""
          leave-active-class="animate__animated animate__bounceOutDown"
      >-->
<!--      <transition

          appear

          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"

          :css="false"
      >-->
      <transition
          appear

          appear-class=""
          appear-active-class="animate__animated animate__flipInY"
          appear-to-class=""

          @before-appear="beforeAppear"
          @appear="appear"
          @after-appear="afterAppear"
          @appear-cancelled="appearCancelled"

          enter-class=""
          enter-active-class="animate__animated animate__bounceInLeft"
          enter-to-class=""
          leave-active-class="animate__animated animate__bounceOutDown"
      >
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
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');

      let contagem = 0;
      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
    },
    afterEnter() {
      console.log('afterEnter');
    },
    enterCancelled() {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      el.style.transition = 'width 0.5s';
      el.style.overflow = 'hidden';
      el.style.whiteSpace = 'nowrap';
    },
    leave(el, done) {
      console.log('enter');

      let contagem = 0;
      const tamanho = el.offsetWidth;

      const intervalo = setInterval(() => {
        el.style.width = (tamanho * (1 - (contagem / 10))) + 'px';
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);

    },
    afterLeave() {
      console.log('afterLeave');
    },
    // somente funciona para o v-show
    leaveCancelled() {
      console.log('leaveCancelled');
    },
    beforeAppear() {
      console.log('beforeAppear');
    },
    appear(el, done) {
      done();
      console.log('appear');
    },
    afterAppear() {
      console.log('afterAppear');
    },
    appearCancelled() {
      console.log('appearCancelled');
    },
  }
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
    transition: opacity 2s;
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
