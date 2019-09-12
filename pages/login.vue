<template>
  <v-layout
    text-center
    wrap
  >
    <div class="image-background-block">
      <div class="login-container">
        <div class="login-form">
          <v-form>
            <v-card
              width="300"
              class="pt-1"
            >
              <v-card-title>Login</v-card-title>
              <v-card-text class="pt-3">
                <v-text-field
                  outlined
                  label="Email"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Password"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="pb-3">
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  color="blue"
                  large
                >
                  Start
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-form>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "login",
  layout: 'login',
};
</script>

<style
  lang="stylus"
  scoped>
  .image-background-block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center
    background: center center/cover no-repeat url("https://hdwallpaperim.com/wp-content/uploads/2017/08/22/226108-space_art-landscape-shapes-digital_art-night-lights-artwork.jpg") #4fabff;
    height: 93.4vh;
  }
  .login-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    height: 700px;
    background-color: rgba(255, 255, 255, 0);
    -webkit-border-radius: 21px;
    -moz-border-radius: 21px;
    border-radius: 21px;
  }
</style>
