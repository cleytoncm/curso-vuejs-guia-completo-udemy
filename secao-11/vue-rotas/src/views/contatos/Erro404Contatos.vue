<template>
  <div>
    <div class="alert alert-warning">
      <h3 class="text-center">Erro 404!</h3>
      <p class="text-center">Página não encontrada.</p>
    </div>
    <button class="btn btn-secondary mb-4 mt-4" @click="$router.back()">Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Erro404Contatos"
}
</script>

<style scoped>

</style>