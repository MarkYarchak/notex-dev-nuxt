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
            <div
              v-if="userStatus"
              class="status_box"
            >
              <span class="online_status status_sign"></span>
              <span class="status_text">online</span>
            </div>
            <div
              v-else
              class="status_box"
            >
              <span class="offline_status status_sign"></span>
              <span class="status_text">offline</span>
            </div>
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
      <!--      <canvas id="canvas"></canvas>-->
      <p>{{ accountLink }}</p>
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
import { gqlHttpUrl } from '~/nuxtClientConfig';
// const QRCode = require('qrcode');

export default {
  name: "index",
  layout: 'account',
  async validate ({params, $axios}) {
    const availableUser = await $axios.post(gqlHttpUrl, {
      query: `{ profileUser (username: "${params.username}") { id, username }}`
    });
    return availableUser.data.data.profileUser;
  },
  async asyncData({ params, $axios }) {
    const currentProfileData = await $axios.post(gqlHttpUrl, {
      query: `{ profileUser (username: "${params.username}") { id, username, email, fullName }}`
    });
    return {
      profileData: currentProfileData.data.data.profileUser,
    };
  },
  data() {
    return {
      accountLink: '',
    };
  },
  computed: {
    userStatus() {
      return this.$nuxt.isOnline;
    },
  },
  apollo: {
  },
  // async mounted() {
  //   this.accountLink = await QRCode.toDataURL(window.location.href).catch((error) => console.error(error));
  //   QRCode.toCanvas(document.getElementById('canvas'), window.location.href, (error) => {
  //     if (error) console.error(error);
  //     else console.info('success!');
  //   });
  // },
};
</script>

<style
  lang="stylus"
  scoped>
  .status_box
    display: flex
    align-items: center
    margin-top: -17px
  .status_text
    color grey
    letter-spacing -0.3px
  .status_sign
    margin: 0 2px 0 10px
    height: 15px
    width: 15px
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    border 2px solid #00a400
  .online_status
    background-color: #00e500
  .offline_status
    background-color: #fff
</style>
