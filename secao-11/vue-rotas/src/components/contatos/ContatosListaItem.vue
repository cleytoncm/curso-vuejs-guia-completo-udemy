<template>
  <li>
    <span>{{ contato.nome }}</span>
    <router-link
        :to="{
        path: `/contatos/${contato.id}`,
        hash: '#parametros'
        }"
        class="btn btn-info btn-sm float-end"
    >
      Detalhes
    </router-link>
<!--    <button-->
<!--        class="btn btn-info btn-sm float-end"-->
<!--        @click="verDetalhes"-->
<!--    >-->
<!--      Detalhes-->
<!--    </button>-->
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
  methods: {
    verDetalhes() {
      // this.$router.push(`/contatos/${this.contato.id}`);
      // this.$router.push({ path: `/contatos/${this.contato.id}` });
      // this.$router.push({ name: 'contato', params: { id: this.contato.id } });
      // this.$router.replace({ name: 'contato', params: { id: this.contato.id } });
    }
  },
}
</script>

<style scoped>

</style>