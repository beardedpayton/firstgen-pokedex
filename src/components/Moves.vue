<template>
  <v-flex xs12>
    <div class="moves-wrapper">
      <h3>Moves</h3>
      <hr>
      <v-flex xs6 v-for="move in pokeMoves" :key="move.move.name">
        <p>{{move.move.name}}</p>
      </v-flex>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'Moves',
  props: [
    'pokeMoves'
  ]
}
</script>

<style>

</style>
