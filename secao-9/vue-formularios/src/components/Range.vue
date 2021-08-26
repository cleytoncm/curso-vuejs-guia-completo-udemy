<template>
  <div>
    <label for="">{{ customLabel }}</label>
    <input
        type="range"
        :value="valor"
        v-bind="$attrs"
        :class="inputClasses"
        @change="atualizar"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'valor',
    event: 'change',
  },
  props: {
    label: String,
    valor: [Number, String],
    inputClasses: [String, Object, Array],
  },
  created() {
    console.log('Attrs: ', this.$attrs);
  },
  computed: {
    customLabel() {
      return `${this.label} (R$ ${this.valorAtual})`
    }
  },
  data() {
    return {
      valorAtual: this.valor || this.$attrs.min,
    }
  },
  methods: {
    atualizar(event) {
      const valor = event.target.value;
      this.$emit('change', valor);
      this.valorAtual = valor;
    }
  }
}
</script>