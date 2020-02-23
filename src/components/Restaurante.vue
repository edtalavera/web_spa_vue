<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-md-6">
                <div class="bg-light text-left p-5">
                     <h3 class="text-info">Detalle del restaurante {{id}}</h3>
                     <div class="detalles-restaurante mt-3">
                         <div v-if="restaurante != null">
                             <h4>Nombre: {{restaurante.nombre}}</h4>
                             <h6>Direccion: {{restaurante.direccion}}</h6>
                             <p class="mt-3">{{restaurante.descripcion}}</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import clienteAxios from '../config/clienteAxios'

export default {
   name: 'restaurante-detalle',
    mounted(){
        this.id = this.$route.params.id;
        clienteAxios.get(`/restaurante/${this.id}`)
            .then(respuesta => {
                this.restaurante = respuesta.data.data;
            })
    },
    data(){
        return{
            id: null,
            restaurante: null
        }
    }
}
</script>

<style lang="scss">
 
</style>

