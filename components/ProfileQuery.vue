<template>
  <ApolloQuery
    :query="require('../assets/graphqlDefs/profileUser.graphql')"
    :variables="{ username: 'markyarchak' }"
  >
    <template slot-scope="{ result: { loading, error, data }}">
      <div v-if="loading">Loading...</div>
      <div v-if="error"><strong style="color: red">Error!</strong></div>
      <div v-if="data">
        <v-card>
          <v-card-title>{{ data.profileUser[0].username }}</v-card-title>
          <v-card-text>
            <div><strong>ID:</strong> {{ data.profileUser[0].id }}</div>
            <div><strong>Name:</strong> {{ data.profileUser[0].fullName }}</div>
            <!--                <v-subheader>{{ data.profileUser[0].email }}</v-subheader>-->
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
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: "ProfileQuery"
};
</script>

<style scoped>

</style>
