<template>
    <h2>{{ texto }}</h2>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Restaurante-list',
  mounted(){
    this.getRestaurantes();
    console.log(this.restaurantes);
  },
  data () {
    return {
      texto: 'Restaurantes',
      restaurantes: null
    }
  },
  methods:{
    getRestaurantes(){
      axios.get('http://localhost:4000/api-rest/restaurantes-api.php/restaurantes')
        .then( respuesta => {
            this.restaurantes = respuesta.data.data;
        });
    }
  }
}
</script>