<template>
  <div>
    <AppHeader />
    <contador></contador>
  </div>
</template>

<script>
  import Contador from "./components/contador/Contador";
  import AppHeader from './components/shared/AppHeader';

  export default {
    components: {
      Contador,
      AppHeader
    }
  }
</script>