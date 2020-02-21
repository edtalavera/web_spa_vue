import './scss/app.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'// importamos la libreria


import Home from './components/Home.vue'
import RestauranteTop from './components/RestauranteTop.vue'
import RestauranteList from './components/RestauranteList.vue'
import Contacto from './components/Contacto.vue'

import App from './App.vue'

Vue.use(VueRouter);// cargamos la libreria

const routes = [
      {path: '/contacto', component: Contacto},
      {path: '/restaurante-destacado/:id', name:'restaurante-destacado', component: RestauranteTop},
      {path: '/restaurantes', component: RestauranteList},
      {path: '/home', component: Home},
      {path: '/', component: Home},   
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
