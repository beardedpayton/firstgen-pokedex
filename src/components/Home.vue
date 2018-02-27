<template>
  <section>
    <div>
      <v-layout row wrap>
        <v-flex v-for="poke in pokemon" :key="poke.id" xs2>
          <router-link :to="{name: 'pokemon-view', params: {id: poke.id}}">
            <div class="pokeWrapper">
              <h4>{{ poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}}</h4>
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
export default {
  name: 'Home',
  data () {
    return {
      pokemon: null,
      sprites: [
        {
          id: 1,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur-color.png'
        },
        {
          id: 2,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/ivysaur-color.png'
        },
        {
          id: 3,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/venusaur-color.png'
        },
        {
          id: 4,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/charmander-color.png'
        },
        {
          id: 5,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/charmeleon-color.png'
        },
        {
          id: 6,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/charizard-color.png'
        },
        {
          id: 7,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/squirtle-color.png'
        },
        {
          id: 8,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/wartortle-color.png'
        },
        {
          id: 9,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/blastoise-color.png'
        },
        {
          id: 10,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/caterpie-color.png'
        },
        {
          id: 11,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/metapod-color.png'
        },
        {
          id: 12,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/butterfree-color.png'
        },
        {
          id: 13,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/weedle-color.png'
        },
        {
          id: 14,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/kakuna-color.png'
        },
        {
          id: 15,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/beedrill-color.png'
        },
        {
          id: 16,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/pidgey-color.png'
        },
        {
          id: 17,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/pidgeotto-color.png'
        },
        {
          id: 18,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/pidgeot-color.png'
        },
        {
          id: 19,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/rattata-color.png'
        },
        {
          id: 20,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/raticate-color.png'
        },
        {
          id: 21,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/spearow-color.png'
        },
        {
          id: 22,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/fearow-color.png'
        },
        {
          id: 23,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/ekans-color.png'
        },
        {
          id: 24,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/arbok-color.png'
        },
        {
          id: 25,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/pikachu-color.png'
        },
        {
          id: 26,
          link: 'https://img.pokemondb.net/sprites/red-blue/normal/raichu-color.png'
        }
      ]
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
  text-align: center;
  border: 1px dotted #000;
  margin-bottom: 50px;
  width: 75%;
  padding: 15px 0;
  box-shadow: 4px 7px #eee;
  color: #000;
}
</style>
