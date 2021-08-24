<template>
    <li class="list-group-item">
        <span>{{ filmeTitulo }}</span>
        <button class="btn btn-secondary float-end">Selecionar</button>
    </li>
</template>

<script>
export default {
  props: ['filmeTitulo']
}
</script>