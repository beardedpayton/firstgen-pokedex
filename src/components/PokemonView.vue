<template>
  <section>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="poke-card">
          <v-layout row wrap>
          <v-flex xs12>
            <h1>{{pokeData.name}} &dash; {{'#' + pokeData.id}}</h1>
            <img :src="pokeData.sprites.front_default">
            <hr>
          </v-flex>
          <v-flex xs6>
            <ul>
              <li>Height: {{pokeData.height}}</li>
              <li>Weight: {{pokeData.weight}}</li>
            </ul>
          </v-flex>
          <v-flex xs6>
            <ul>
              <li>
                Type:
                <span v-for="type in pokeData.types" :key="type.slot">
                  {{type.type.name}}/
                </span>
              </li>
              <li>
                Abilities:
                <span v-for="ability in pokeData.abilities" :key="ability.name">
                  {{ability.ability.name}}/
                </span>
              </li>
            </ul>
          </v-flex>
          <v-flex xs12>
            <h1>Stats</h1>
            <hr>
            <div
            class="stats"
            v-for="stat in pokeData.stats"
            :key="stat.stat.name">
              <div>
                <span class="stat-name">{{stat.stat.name}}</span>
                <span class="stat-number">{{stat.base_stat}}</span>
              </div>
            </div>
          </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import PokeService from '@/services/PokeService'

export default {
  data () {
    return {
      pokeData: null
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.pokeData = (await PokeService.stats(id)).data
  }
}
</script>

<style>
.poke-card {
  border: 3px solid black;
  padding: 25px;
  text-align: center;
}
h1 {
  text-transform: uppercase;
}
ul {
  list-style-type: none;
}
.stat-name {
  text-transform: uppercase;
}
</style>
