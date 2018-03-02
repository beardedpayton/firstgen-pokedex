<template>
  <section>
    <div>
      <v-layout row wrap>
        <v-flex v-for="poke in pokemon" :key="poke.id" xs2>
          <router-link :to="{name: 'pokemon-view', params: {id: poke.id}}">
            <div class="pokeWrapper">
              <h4>{{ poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}} - {{'#' + poke.id}}</h4>
              <img :src="poke.link" :alt="poke.name + '--' + 'image'">
            </div>
          </router-link>
        </v-flex>
      </v-layout>
    </div>
  </section>
</template>

<script>
import PokeService from '@/services/PokeService'
import Data from '@/pokemon.js'

export default {
  name: 'Home',
  data () {
    return {
      pokemon: null,
      sprites: Data
    }
  },
  async mounted () {
    this.pokemon = (await PokeService.getPokemon()).data.results
    const arr = this.sprites
    for (let i = 0; i < arr.length; i++) {
      Object.assign(this.pokemon[i], this.pokemon[i], arr[i])
    }
  }
}
</script>

<style scoped>
.pokeWrapper {
  width: 75%;
  background-color: #fff;
  color: #000;
  box-shadow: 4px 8px #cecece;
  border-radius: 7px;
  text-align: center;
  margin-bottom: 50px;
  padding-top: 20px;
}
</style>
