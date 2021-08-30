<template>
  <li>
    <span>{{ contato.nome }}</span>
    <router-link
        :to="`/contatos/${contato.id}`"
        class="btn btn-info btn-sm float-end"
    >
      Detalhes
    </router-link>
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