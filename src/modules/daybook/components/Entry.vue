<template>
  <div
    @click="$router.push({ name: 'entry', params: {id: 10} })"
    class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">07</span>
      <span class="mx-1 fs-5">Noviembre</span>
      <span class="mx-2 fw-light">2021,Domingo</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore
      corrupti pariatur ipsa? Ipsa, aperiam, hic quod, quo est quam at delectus
      dolorem ducimus iure ratione. Vitae nam provident molestias.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  entry-description {
    font-size: 0.9rem;
  }
}
</style>
