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
            <ul class="type-abilities">
              <li>
                Type:
                <span v-for="type in pokeData.types" :key="type.slot">
                  {{type.type.name}}
                </span>
              </li>
              <li>
                Abilities:
                <span v-for="ability in pokeData.abilities" :key="ability.name">
                  {{ability.ability.name}}
                </span>
              </li>
            </ul>
          </v-flex>
          <v-flex xs12>
            <div class="stats-wrapper">
              <h3>Stats</h3>
              <hr>
              <div class="stats" v-for="stat in pokeData.stats" :key="stat.stat.name">
                <span class="stat-name">{{stat.stat.name}}</span>
                <span class="stat-number"><div class="stat-bar">{{stat.base_stat}}</div></span>
              </div>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="moves-wrapper">
              <h3>Moves</h3>
              <hr>
              <div v-for="move in pokeData.moves" :key="move.move.name">
                <v-flex xs6>
                  <p>{{move.move.name}}</p>
                </v-flex>
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
  height: 600px;
  overflow: scroll;
  border: 3px solid black;
  padding: 25px;
  text-align: center;
  box-shadow: 5px 10px #eee;
}
h1 {
  text-transform: uppercase;
}
ul {
  list-style-type: none;
  padding: 25px 0 15px 0;
}
li {
  padding-bottom: 10px;
}
.stat-name {
  text-transform: uppercase;
}
img {
  padding-bottom: 25px;
}
.type-abilities span {
  background: #eee;
  border: 1px solid #000;
  margin-right: 4px;
  padding: 3px;
}
.stats-wrapper h3,
.moves-wrapper h3 {
  text-align: left;
}
.stats {
  padding-top: 15px;
}
.stat-bar {
  height: 20px;
  background-color: #eee;
  width: 50%;
  float: right;
  padding-left: 10px;
}
.stat-number,
.stat-name {
  text-align: left;
}
</style>
