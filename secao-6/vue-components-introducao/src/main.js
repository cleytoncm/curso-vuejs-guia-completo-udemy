import Vue from 'vue';

// const data = {
//   titulo: 'Curso de VueJS',
//   contador: 0,
// };

/*Vue.component('pjn-component', {
  data: function() {
    return {
      titulo: 'Curso de VueJS',
      contador: 0,
    }
  },
  methods: {
    incrementar: function () {
      this.contador++;
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }}</button>
    </div>
  `
});*/

const pjnComponent = {
  data: function() {
    return {
      titulo: 'Curso de VueJS',
      contador: 0,
    }
  },
  methods: {
    incrementar: function () {
      this.contador++;
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }}</button>
    </div>
  `
};

new Vue({
  el: '#app1',
  components: {
    'pjn-component': pjnComponent,
  }
});

new Vue({
  el: '#app2',
});