<template>
  <div>
    <label for="">{{ customLabel }}</label>
    <input
        type="range"
        :value="value"
        v-bind="$attrs"
        :class="inputClasses"
        @input="atualizar"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: [Number, String],
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
      valorAtual: this.value || this.$attrs.min,
    }
  },
  methods: {
    atualizar(event) {
      const valor = event.target.value;
      this.$emit('input', valor);
      this.valorAtual = valor;
    }
  }
}
</script>