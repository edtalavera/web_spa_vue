<template>
  <div class="header">  
    {{msg}} 
     <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/restaurantes">Restaurantes</router-link></li>
        <li><router-link :to="{name: 'restaurante-destacado', params: { id: 16 } }">Restaurante Destacado</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
     </ul>
  </div>
  

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin: 1rem;
}
</style>
