<template>
  <div
    :style="$vuetify.breakpoint.mdAndUp ? 'display: flex; justify-content: center; align-items: center;' : ''"
  >
    <v-card
      elevation="0"
      max-width="1000"
      :width="$vuetify.breakpoint.mdAndUp ? '1000' : ''"
    >
      <v-card
        elevation="0"
      >
        <v-row class="pa-3">
          <v-avatar size="180">
            <v-img src="https://source.unsplash.com/random"></v-img>
          </v-avatar>
          <v-card-title>
            <h1>{{ $route.params.username }}</h1>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              icon
              color="blue"
              large
            >
              <font-awesome-icon
                :icon="['fas', 'user-edit']"
                style="font-size: 23px;"
              />
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
      <hr>
      <v-card>
        <v-card-title>{{ profileData.username }}</v-card-title>
        <v-card-text>
          <div><strong>ID:</strong> {{ profileData.id }}</div>
          <div><strong>Name:</strong> {{ profileData.fullName }}</div>
          <div><strong>Email:</strong> {{ profileData.email }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            outlined
            color="orange darken-2"
          >
            Edit profile
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </div>
</template>

<script>
// import gql from 'graphql-tag';
import { serverConfig } from '../../nuxtServerConfig';
const graphqlPath = `${serverConfig.httpHost}:${serverConfig.port}/graphql`;

export default {
  name: "_username",
  layout: 'default',
  async validate ({params, $axios}) {
    const availableUser = await $axios.post(graphqlPath, {
      query: `{ profileUser (username: "${params.username}") { id, username }}`
    });
    return availableUser.data.data.profileUser.length;
  },
  async asyncData({ params, $axios }) {
    const currentProfileData = await $axios.post(graphqlPath, {
      query: `{ profileUser (username: "${params.username}") { id, username, email, fullName }}`
    });
    return {
      profileData: currentProfileData.data.data.profileUser[0],
    };
  },
  apollo: {
  },
};
</script>

<style scoped>

</style>
