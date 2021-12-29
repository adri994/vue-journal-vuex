<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon:{
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style scoped lang="scss">
button{ 
  border-radius: 100%;
  bottom:1rem;
  height:5rem;
  position: fixed;
  right: 1rem;
  width:5rem;
}
</style>