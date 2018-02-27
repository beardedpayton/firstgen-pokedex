<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <router-link :to="{name: 'home'}">Pokemon</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
a {
  color: #fff;
  text-decoration: none;
}
</style>
