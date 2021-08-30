<template>
  <div>
    <ContatosLista />
    <router-view></router-view>
  </div>
</template>

<script>
import ContatosLista from "../../components/contatos/ContatosLista";

export default {
  name: "Contatos",
  components: {
    ContatosLista
  },
}
</script>

<style scoped>

</style>