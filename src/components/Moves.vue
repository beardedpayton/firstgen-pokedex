<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="moves-wrapper">
        <h3>Moves</h3>
        <hr>
      </div>
    </v-flex>
        <v-flex xs6 v-for="move in pokeMoves" :key="move.move.name">
          <div class="moves">
            <p>{{move.move.name.toUpperCase()}}</p>
            <p>Level Learned at: {{move.version_group_details[0].level_learned_at}}</p>
          </div>
        </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Moves',
  props: [
    'pokeMoves'
  ]
}
</script>

<style scoped>
hr {
  margin-bottom: 15px;
}
.moves p:first-child {
  margin-bottom: 0;
}
.moves p:last-child {
  font-style: italic;
}
</style>
