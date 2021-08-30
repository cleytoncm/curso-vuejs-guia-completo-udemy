<template>
  <h3 class="font-weight-light">Detalhes sobre o Contato com id: {{ $route.params.id }}</h3>
</template>

<script>
export default {
  name: "ContatoDetalhe",
  created() {
    console.log('Parâmetros da rota: ', this.$route.params);
  }
}
</script>

<style scoped>

</style>