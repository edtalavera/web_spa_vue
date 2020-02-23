<template>
  <div class="row justify-content-center">
    <div class="col col-md-8">
      <h4>Agregar Nuevo Restaurante</h4>
      <form v-on:submit.prevent="guardarRestaurante">

        <div class="form-group">
          <div class="form-group">
            <label for="inputName">Name</label>
            <input 
                type="text"
                v-model="restaurante.nombre"
                class="form-control" 
                id="inputName"
                />
          </div>
        </div>

        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            v-model="restaurante.direccion"
            class="form-control"
            id="inputAddress"
            placeholder="your address"
          />
        </div>

          <div class="form-group">
          <label for="inputDescription">Description</label>
          <textarea
            type="text"
            v-model="restaurante.descripcion"
            class="form-control"
            id="inputDescription"
            placeholder="add a description for your restaurant..."
          ></textarea>
        </div>


        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputState">Price</label>
            <select
                id="inputState"
                class="form-control"
                v-model="restaurante.precio">
                <option selected>
                    Choose an option...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
          </div>
            <div class="form-group col col-md-6 d-flex align-items-center">
            <button type="submit" class="btn btn-primary ml-5 mt-5">Update Restaurant</button>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import clienteAxios from '../config/clienteAxios';
import Swal from 'sweetalert2'

export default {
    name: 'restaurante-add',
    mounted(){
        
    },
    data(){
        return {
            restaurante: {
                nombre: '',
                direccion: '',
                descripcion: '',
                precio: 'normal'
            }
        };
    },
    methods: {
         async guardarRestaurante(){
            const router = this.$router; 
            const params = `json=${JSON.stringify(this.restaurante)}`;  
            console.log(params); 
            clienteAxios.post('/restaurantes',params)
                .then(respuesta => {
                    if (respuesta.status === 200) {
                        console.log(respuesta);
                            Swal.fire({
                                icon: 'success',
                                title: respuesta.data.message,
                                text: 'Tu restaurante se agrego exitosamente!',
                                })
                            // redireccionar   
                            router.push('/restaurantes');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
