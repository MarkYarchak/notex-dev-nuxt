<template>
  <div>
    <v-container>
      <h1>Settings page</h1>
      <v-btn
        dark
        color="grey darken-3"
        class="mr-2"
        @click="logOutDialog = true"
      >
        <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="fa-lg"/>
      </v-btn>
    </v-container>
    <v-dialog
      v-model="logOutDialog"
      max-width="290"
      dark
    >
      <v-card>
        <v-card-title class="headline">Log out</v-card-title>

        <v-card-text>
          Are you really want to logout from your account?
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            @click="logOutDialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="orange darken-1"
            to="/login"
          >
            Leave
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      logOutDialog: false,
    };
  },
};
</script>

<style scoped>

</style>
