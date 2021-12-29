<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-1 fs-4 fw-ligth">2021, jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <div class="d-flex flex-colum px-3 h-75">
    <textarea 
      placeholder="¿Que sucedio hoy?"
    ></textarea>
  </div>
  <Fab 
    icon= "fa-save"
  />
  <img src="https://media.vandal.net/i/1200x630/5-2021/202151311344210_1.jpg" alt="" class="img-thumbail">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
  }
}
</script>

<style scoped lang="scss">
  textarea { 
    font-size: 1.3rem;
    border:none;
    height: 100%;

    &:focus{
      outline: none;
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color:#000,$alpha:0.2);
  }
</style>