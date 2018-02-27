import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PokemonView from '@/components/PokemonView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-view',
      component: PokemonView
    }
  ]
})
