<template>
  <li>
    <span>{{ contato.nome }}</span>
    <button class="btn btn-info btn-sm float-end">Detalhes</button>
  </li>
</template>

<script>
export default {
  name: "ContatosListaItem",
  props: {
    contato: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>