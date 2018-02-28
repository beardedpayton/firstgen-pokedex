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
  ],
  data () {
    return {
      statValue: this.pokeStats
    }
  },
  mounted () {
    const statBar = document.querySelectorAll('.stat-bar-bg')
    const setWidth = (element) => {
      for (let i = 0; i < this.statValue.length; i++) {
        element[i].style.width = (this.statValue[i].base_stat / 2) + '%'
      }
    }
    setWidth(statBar)
  }
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
}
.stat-number,
.stat-name {
  text-align: left;
}
</style>
