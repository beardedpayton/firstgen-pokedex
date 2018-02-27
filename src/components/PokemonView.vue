<template>
  <section>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="poke-card">
          <v-layout row wrap>
          <v-flex xs6>
          <h1>{{pokeData.name}}</h1>
          </v-flex>
          <v-flex xs6>
            <ul>
              <li>Weight: {{pokeData.weight}}</li>
              <li>Height: {{pokeData.height}}</li>
            </ul>
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
  height: 530px;
  padding: 25px;
  text-align: center;
}
.poke-card h1 {
  text-transform: uppercase;
}
ul {
  list-style-type: none;
}
</style>
