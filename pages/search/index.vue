<template>
  <div>
    <v-toolbar

    >
      <h1 class="mr-3">Search</h1>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(btn, bi) in navigationButtons"
        :key="bi"
        :color="btn.color"
        rounded
        dark
        class="mr-3"
        :to="btn.to"
      >
        <v-icon>{{ btn.icon }}</v-icon>
        <span class="pl-2">{{ btn.title }}</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'account',
  data() {
    return {
      navigationButtons: [
        {
          icon: 'apps',
          title: 'all',
          color: 'blue-grey darken-2',
          to: '/search'
        },
        {
          icon: 'group_work',
          title: 'Teams',
          color: 'green darken-2',
          to: '/search/teams'
        },
        {
          icon: 'accessibility', // accessible_forward
          title: 'People',
          color: 'blue darken-2',
          to: '/search/people'
        },
        {
          icon: 'library_books',
          title: 'Notes',
          color: 'orange darken-3',
          to: '/search/public-notes'
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
