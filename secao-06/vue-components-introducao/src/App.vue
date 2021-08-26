<template>
  <div>
    <AppHeader />
    <contador-info></contador-info>
    <contador></contador>
  </div>
</template>

<script>
  import Contador from "./components/contador/Contador";
  import ContadorInfo from "./components/contador/ContadorInfo";
  import AppHeader from './components/shared/AppHeader';

  export default {
    components: {
      Contador,
      AppHeader,
      ContadorInfo
    }
  }
</script>