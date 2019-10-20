<template>
  <div
    style="margin: 0 auto;"
    class="center_large"
  >
    <v-card
      max-width="1000"
      :width="$vuetify.breakpoint.lgAndUp ? '1000' : ''"
      elevation="0"
      :class="$vuetify.breakpoint.mdOnly ? 'ml-3' : ''"
    >
      <v-card
        class="mx-auto"
        tile
        :loading="searchLoading"
      >
        <v-list
          two-line
          :three-line="threeLine"
          :shaped="shaped"
          :flat="flat"
          :subheader="subheader"
          :sub-group="subGroup"
          nav
          avatar
        >
          <v-subheader>People</v-subheader>
          <v-list-item
            v-for="(person, persi) in users"
            :key="persi"
          >
            <v-list-item-avatar
              v-ripple
              style="cursor: pointer;"
              @click="$router.push(`/profile/${person.username}`)"
            >
              <v-img src="https://source.unsplash.com/random"/>
            </v-list-item-avatar>
            <div
              v-ripple
              style="cursor: pointer;"
              @click="$router.push(`/profile/${person.username}`)"
            >
              <v-list-item-title>{{ person.fullName }}</v-list-item-title>
              <v-list-item-subtitle>{{ person.username }}</v-list-item-subtitle>
            </div>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <!--              <v-list-item-action-text>{{ person }}</v-list-item-action-text>-->
              <v-btn
                text
                color="blue"
                :to="`/discussions/${person.username}`"
              >
                <v-icon>message</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>
    <v-card
      width="350"
      class="ml-3 d-none_middle-small"
      color="grey lighten-3"
    >
      <v-card-title>Search people</v-card-title>
      <div class="pl-2 pr-2">
        <v-text-field
          v-model="searchPeopleField"
          placeholder="Name of discussion"
          solo
          prepend-inner-icon="search"
          hide-details
          clearable
          :loading="searchLoading"
        ></v-text-field>
      </div>
      <v-card-title>Parameters</v-card-title>
      <div style="padding: 12px 10px 10px 25px;">
        <v-checkbox
          v-model="dense"
          label="Dense"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="searchLoading"
          label="Loading"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="threeLine"
          label="Three line"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="shaped"
          label="Shaped"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="flat"
          label="Flat"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="subheader"
          label="Subheader"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="inactive"
          label="Inactive"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="subGroup"
          label="Sub group"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="nav"
          label="Nav"
          color="green"
        ></v-checkbox>
        <v-checkbox
          v-model="rounded"
          label="Rounded"
          color="green"
        ></v-checkbox>
      </div>
    </v-card>
  </div>
</template>

<script>
import USERS from '../../assets/graphqlDefs/users.graphql';

export default {
  name: "people",
  layout: 'account',
  apollo: {
    users: {
      query: USERS,
    },
  },
  data() {
    return {
      searchPeopleField: '',
      searchLoading: false,
      tab: null,
      item: 5,
      dense: false,
      threeLine: false,
      shaped: false,
      flat: false,
      subheader: false,
      inactive: false,
      subGroup: false,
      nav: false,
      rounded: false,
    };
  },
};
</script>

<style
  lang="stylus"
  scoped>

  @media (min-width: 1100px) {
    .center_large {
      display: flex
      justify-content: center
    }
  }
  @media (max-width: 1903px) {
    .d-none_middle-small {
      display: none
    }
  }
</style>
