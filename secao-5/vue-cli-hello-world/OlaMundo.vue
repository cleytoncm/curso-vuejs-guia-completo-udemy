<template>
  <div>
    <h1>{{ titulo }}</h1>
    <input type="text" v-model="titulo" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: "Olá Vuejs",
    };
  },
};
</script>

<style scoped></style>
