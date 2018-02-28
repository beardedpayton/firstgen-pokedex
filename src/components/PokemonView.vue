<template>
  <section>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="poke-card">
          <profile :profile="pokeData" />
          <stats :pokeStats="pokeData.stats" />
          <moves :pokeMoves="pokeData.moves" />
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import PokeService from '@/services/PokeService'
import Profile from '@/components/Profile'
import Stats from '@/components/Stats'
import Moves from '@/components/Moves'

export default {
  data () {
    return {
      pokeData: null
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.pokeData = (await PokeService.stats(id)).data
  },
  components: {
    Profile,
    Stats,
    Moves
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
img {
  padding-bottom: 25px;
}
.stats-wrapper h3,
.moves-wrapper h3 {
  text-align: left;
}
</style>
