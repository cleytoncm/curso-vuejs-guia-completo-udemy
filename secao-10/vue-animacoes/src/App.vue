<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinamento transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <h3 class="font-weight-light">Tecnologias</h3>

      <div class="form-group">
        <input
            type="text"
            class="form-control"
            placeholder="Insira um novo item e pressione Enter"
            @keyup.enter="adicionar"
            ref="input"
        >
      </div>

      <transition-group tag="ul" class="list-group" name="list">
        <li
            class="list-group-item"
            v-for="(tecnologia, indice) in tecnologias"
            :key="tecnologia"
        >
          <span>{{ tecnologia }}</span>
          <button
              class="btn btn-danger btn-sm float-end"
              @click="remover(indice)"
          >
            x
          </button>
        </li>
      </transition-group>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tecnologias: [
        'Javascript',
        'Vue JS',
        'Vuex',
        'Vue Router',
      ],
    }
  },
  methods: {
    adicionar(event) {
      const novoItem = event.target.value;
      if (novoItem) {
        const indice = Math.floor(Math.random() * this.tecnologias.length);
        this.tecnologias.splice(indice, 0, novoItem);
        this.$refs.input.value = '';
      }
    },
    remover(indice) {
      this.tecnologias.splice(indice, 1);
    }
  },
}
</script>



<style scoped>
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-70px);
  }

  .list-enter-active, .list-leave-active, .list-move {
    transition: all 1s;
  }

  .list-leave-active {
    position: absolute;
    width: calc(100% - 100px);
  }

</style>
