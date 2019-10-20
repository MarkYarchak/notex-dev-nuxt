<template>
  <div style="display: flex; justify-content: center; padding-top: 15px;">
    <v-card
      v-if="!passwordUpdateStatus"
      style="background-color: #e5e5e5;"
    >
      <v-form
        ref="validateForm"
        @submit.prevent="saveNewPassword">
        <v-card-title>Change your password</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            label="Password"
            :rules="[(v) => v && v.length > 7 || 'Min 8 charters']"
            class="colored-input-label"
            validate-on-blur
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-text-field
            v-model="passwordConfirm"
            label="Confirm password"
            :rules="[(v) => v && v.length > 7 || 'Min 8 charters']"
            validate-on-blur
            class="colored-input-label"
            :type="showPassword ? 'text' : 'password'"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            style="background-color: orangered; color: white"
            type="submit"
          >
            Change
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-form>
    </v-card>
    <div v-else>
      <h1>Password updated</h1>
    </div>
    <v-snackbar
      v-model="updatePasswordErrorsSnackbar"
      :timeout="4000"
      multi-line
      top
    >
      {{ updatePasswordErrors }}
      <v-btn
        text
        style="color: #ff005f"
        @click="updatePasswordErrorsSnackbar = false"
      >
        close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { gqlHttpUrl } from '../../../nuxtServerConfig';

export default {
  name: "index",
  async validate({ $axios, params, query }) {
    const resData = await $axios.post(gqlHttpUrl, {
      query: `{ verifyRecoveryLink(paramsId: "${params.id}", queryParametersToken: "${query.record}") }`,
    });
    return resData.data.data;
  },
  data() {
    return {
      showPassword: false,
      password: '',
      passwordConfirm: '',
      passwordUpdateStatus: false,
      updatePasswordErrors: null,
      updatePasswordErrorsSnackbar: false,
    };
  },
  methods: {
    async saveNewPassword() {
      // send new password to server
      if (this.$refs.validateForm.validate()) {
        if (this.password === this.passwordConfirm) {
          let { gqlHttpUrl } = require('../../../nuxtClientConfig');
          this.passwordUpdateStatus = await this.$axios.post(gqlHttpUrl, {
            query: `mutation { passwordRecovery (urlToken: "${this.$route.query.record}", password: "${this.password}") }`,
          }).catch((err) => {
            this.updatePasswordErrors = err;
            this.updatePasswordErrorsSnackbar = true;
          });
        } else {
          this.updatePasswordErrors = 'Passwords should be the same';
          this.updatePasswordErrorsSnackbar = true;
        }
      } else {
        this.updatePasswordErrors = 'Invalid fields content';
        this.updatePasswordErrorsSnackbar = true;
      }
    },
  },
};
</script>

<style
  lang="stylus"
  scoped>

.colored-input-label
  color orangered
</style>
