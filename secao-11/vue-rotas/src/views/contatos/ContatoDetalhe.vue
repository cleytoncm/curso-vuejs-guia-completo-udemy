<template>
  <h3 class="font-weight-light">Detalhes sobre o Contato com id: {{ id }}</h3>
</template>

<script>
export default {
  name: "ContatoDetalhe",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  created() {
    console.log('Parâmetros da rota: ', this.id);
  },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
}
</script>

<style scoped>

</style>