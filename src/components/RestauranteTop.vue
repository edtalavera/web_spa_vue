<template>
    <h2>{{ texto }} : {{ id_restaurate }}</h2>
</template>

<script>
export default {
  name: 'Restaurante-top',
  mounted(){
    this.id_restaurate = this.$route.params.id;
  },
  data () {
    return {
      texto: 'Pagina Restaurante destacado',
      id_restaurate: null
    }
  }
}
</script>