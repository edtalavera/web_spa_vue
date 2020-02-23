<template>
    <div class="container">
                <div class="row justify-content-space-between" id="restaurantes-list" v-if=" restaurantes != null">
                    <div class="col-10 col-xl-6" v-for="restaurante in restaurantes" :key="restaurante.id">
                         <div class="box-restaurantes">
                               <strong class="m-2"> {{ restaurante.nombre }}</strong>
                               <div class="campo-acciones">
                                    <router-link class="btn btn-success m-1" :to="{name: 'restaurante', params:{id : restaurante.id}}">Ver</router-link>
                                    <router-link class="btn btn-primary m-1" :to="{name: 'editar-restaurante', params:{id : restaurante.id}}">Editar</router-link>
                                    <span v-if="showBorrar != restaurante.id">
                                        <a @click="borrarRestaurante(restaurante.id)" class="btn btn-danger text-white">Eliminar</a>
                                    </span>
                                    <span v-else>
                                        <p>¿Estas seguro de Borrar?</p>
                                        <button @click="cancelarBorrado()" class="btn btn-info">Cancelar</button>
                                         <button @click="confirmarBorrado(restaurante.id)" class="btn btn-danger">Eliminar</button>
                                    </span>
                               </div>
                         </div>
                    </div>
              </div>
              <span v-else>Cargando restaurantes...</span>
    </div>
</template>

<script>

import clienteAxios from '../config/clienteAxios'
import Swal from 'sweetalert2'

export default {
  name: 'Restaurante-list',
  mounted(){
    this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Restaurantes',
      restaurantes: null,
      showBorrar: null
    }
  },
  methods:{
    async getRestaurantes(){
        await clienteAxios.get('/restaurantes')
        .then( respuesta => {
           this.restaurantes = respuesta.data.data;
        })
        .catch(error => {
            console.log(`Uupss tenemos el siguiente error ${error}`);
        });
    },
    borrarRestaurante(id){
        this.showBorrar = id
    },
    cancelarBorrado(){
      this.showBorrar = null;
    },
    confirmarBorrado(id){
      clienteAxios.get(`/delete-restaurante/${id}`)
        .then( (res) => {
            this.showBorrar = null;
            this.getRestaurantes();
             Swal.fire({
                  icon: 'success',
                  title: res.data.message,
                  text: 'Tu restaurante se borro exitosamente!',
             }); 
        })
    }
  }
}
</script>

<style lang="scss">
  .container {
     #restaurantes-list{
      .box-restaurantes {
          margin-top: 10px;
          border:1px solid #ddd;
          background: #eee;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
    }
  }
}
</style>