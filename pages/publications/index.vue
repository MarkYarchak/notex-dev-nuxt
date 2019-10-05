<template>
  <v-layout
    justify-center
    align-center
    wrap
  >
<!--    <v-lazy-->
<!--      v-model="isActive"-->
<!--      :options="{-->
<!--          threshold: .5-->
<!--        }"-->
<!--      transition="fade-transition"-->
<!--    >-->
      <OnePostCard
        v-for="(user, uid) in users"
        :key="uid"
        :user="user"
      />
<!--    </v-lazy>-->
  </v-layout>
</template>

<script>
import gql from 'graphql-tag';
import OnePostCard from '../../components/OnePostCard';

const subscribe = `

    subscription {
      newUser {
        username
        fullName
      }
    }
`;

export default {
  layout: 'default',
  components: {
    OnePostCard,
  },
  apollo: {
    users: gql`{
      users {
        id
        username
        fullName
      }
    }`,
  },
  data() {
    return {
      isActive: false,
    };
  },
}
</script>
