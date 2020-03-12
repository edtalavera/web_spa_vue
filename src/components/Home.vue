<template>
  <div class="container">
    <div class="row justify-contet-center">
      <div class="col col-md-10">
       <div class="text-center">
             <h2>{{ texto }}</h2>   
        </div>  
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      texto: "Pagina Home"
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 1rem !important;
}
</style>
