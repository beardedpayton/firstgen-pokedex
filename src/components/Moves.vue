<template>
  <v-flex xs12>
    <div class="moves-wrapper">
      <h3>Moves</h3>
      <hr>
      <div v-for="move in pokeMoves" :key="move.move.name">
        <v-flex xs6>
          <p>{{move.move.name}}</p>
        </v-flex>
      </div>
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
