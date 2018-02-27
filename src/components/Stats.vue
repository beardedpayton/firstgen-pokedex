<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="stats-wrapper">
        <h3>Stats</h3>
        <hr>
        <div class="stats" v-for="stat in pokeStats" :key="stat.stat.name">
          <span class="stat-name">{{stat.stat.name}}</span>
          <span class="stat-number"><div class="stat-bar">{{stat.base_stat}}</div></span>
        </div>
      </div>
</v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Stats',
  props: [
    'pokeStats'
  ]
}
</script>

<style>

</style>
