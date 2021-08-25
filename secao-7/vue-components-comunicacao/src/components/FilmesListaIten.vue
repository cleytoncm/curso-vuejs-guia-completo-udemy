<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} | {{ filme.ano }}</span>
        <button class="btn btn-secondary float-end">Selecionar</button>
    </li>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    filme: {
      type: Object,
      required: true,
    }
  }
}
</script>