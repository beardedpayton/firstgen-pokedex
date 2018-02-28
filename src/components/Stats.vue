<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="stats-wrapper">
        <h3>Stats</h3>
        <hr>
        <div class="stats" v-for="stat in pokeStats" :key="stat.stat.name">
          <span class="stat-name">{{stat.stat.name}}</span>
          <span class="stat-bar">
            <div class="stat-bar-bg">
              {{stat.base_stat}}
            </div>
          </span>
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

<style scoped>
.stat-name {
  text-transform: uppercase;
}
.stats {
  padding-top: 15px;
}
.stat-bar {
  position: relative;
  height: 20px;
  background-color: #eee;
  width: 300px;
  float: right;
}
.stat-bar-bg{
  background-color: green;
  color: #fff;
  width: 20%;
}
.stat-number,
.stat-name {
  text-align: left;
}
</style>
