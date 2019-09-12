<template>
  <v-app>
    <v-app-bar
      app
      color="blue darken-4"
    >
      <v-toolbar-title class="headline text-uppercase white--text">
        <span>Notex</span>
        <span class="font-weight-light ml-2">Mark Yarchak Dev</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="orange darken-1"
        dark
        @click="$router.push('/')"
      >
        <span class="mr-2">Main workspace</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "login"
};
</script>

<style
  lang="stylus"
  scoped>

</style>
