<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <div class="form-group">
      <input
          type="search"
          class="form-control"
          @keyup.enter="buscar"
          :value="busca"
      >
    </div>

    <hr>

    <ul class="list-group" v-if="contatosFiltrados.length > 0">
      <ContatosListaItem
          class="list-group-item"
          v-for="contato in contatosFiltrados"
          :key="contato.id"
          :contato="contato"
      />
    </ul>

    <p v-else>Nenhum contato cadastrado.</p>

    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosListaItem from "./ContatosListaItem";

export default {
  name: "ContatosLista",
  components: {
    ContatosListaItem
  },
  props: ['busca'],
  data() {
    return {
      contatos: [
        { id: 1, nome: 'Isaac Newton', email: 'isaac@email.com' },
        { id: 2, nome: 'Albert Eisntein', email: 'einstein@email.com' },
        { id: 3, nome: 'Stephen Hawking', email: 'stephen@email.com' },
      ]
    }
  },
  computed: {
    contatosFiltrados() {
      const busca = this.$route.query.busca;

      return !busca ? this.contatos : this.contatos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()));
    },
  },
  methods: {
    buscar(event) {
      this.$router.push({
        path: '/contatos',
        query: {
          busca: event.target.value
        }
      });
    },
    voltar() {
      this.$router.back();
    },

  },
}
</script>

<style scoped>

</style>