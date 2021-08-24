<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-secondary float-end">Selecionar</button>
    </li>
</template>

<script>
export default {
  props: {
    filmeTitulo: String,
  },
  computed: {
    filmeTituloConcatenado() {
      return `Título: ${this.filmeTitulo}`;
    },
  },
  created() {
    console.log(typeof this.filmeTitulo);
  }
}
</script>