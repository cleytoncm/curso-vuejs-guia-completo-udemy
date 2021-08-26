<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} | {{ filme.ano }}</span>
        <button class="btn btn-secondary float-end" @click="selecionar">Selecionar</button>
    </li>
</template>

<script>
import { eventBus } from '../main';

export default {
  inheritAttrs: false,
  props: {
    filme: {
      type: Object,
      required: true,
    }
  },
  methods: {
    selecionar() {
      // this.$emit('selecionarFilme', this.filme);
      // eventBus.$emit('selecionarFilme', this.filme);
      eventBus.selecionarFilme(this.filme);
    }
  },
}
</script>