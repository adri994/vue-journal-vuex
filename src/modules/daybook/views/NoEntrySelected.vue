<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada Seleccionada</h1>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'no-entry',
  components: {
    Fab: defineAsyncComponent (()=> import( '../components/Fab.vue' )),
  },
}
</script>

<style scoped lang="scss">
div{
  height:100%
}

</style>