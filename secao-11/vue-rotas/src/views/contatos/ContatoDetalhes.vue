<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre o Contato com id: {{ id }}</h3>
    <p>Paramêttrtos: {{ parametros }}</p>
    <router-link
        :to="`/contatos/${id}/editar`"
        class="btn btn-primary"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ContatoDetalhes",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      parametros: this.$route.params,
    }
  },
  created() {
    console.log('Parâmetros da rota: ', this.$props);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    this.parametros = to.params;
    next();
  }
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