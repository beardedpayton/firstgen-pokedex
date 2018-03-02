<template>
<v-layout row wrap>
  <v-flex xs12>
    <h1>{{profile.name}} &dash; {{'#' + profile.id}}</h1>
    <img :src="profile.sprites.front_default">
  </v-flex>
  <v-flex xs6>
    <ul>
      <li><b>Height:</b> {{profile.height}}</li>
      <li><b>Weight:</b> {{profile.weight}}</li>
    </ul>
  </v-flex>
  <v-flex xs6>
    <ul class="type-abilities">
      <li>
        <b>Type:</b>
        <span v-for="type in profile.types" :key="type.slot">
          {{type.type.name}}
        </span>
      </li>
      <li>
        <b>Abilities:</b>
        <span v-for="ability in profile.abilities" :key="ability.name">
          {{ability.ability.name}}
        </span>
      </li>
    </ul>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'Profile',
  props: [
    'profile'
  ]
}
</script>

<style>
.type-abilities span {
  background: #eee;
  border: 1px solid #000;
  margin: 0 4px 5px 0;
  padding: 3px;
}
</style>
