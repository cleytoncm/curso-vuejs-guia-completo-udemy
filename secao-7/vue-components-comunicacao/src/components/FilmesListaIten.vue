<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-secondary float-end">Selecionar</button>
    </li>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    titulo: {
      type: String,
      required: true,
    },
    ano: {
      type: Number,
      required: true,
    },
  },
  computed: {
    filmeTituloConcatenado() {
      return `Título: ${this.titulo}`;
    },
  },
  created() {
    console.log('Attrs: ', this.$attrs);
  }
}
</script>