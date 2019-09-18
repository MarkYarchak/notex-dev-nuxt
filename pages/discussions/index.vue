<template>
  <div :style="$vuetify.breakpoint.lgAndUp ? 'display: flex; flex-wrap: wrap; justify-content: center;' : ''">
    <v-card
      max-width="1000"
      elevation="0"
      :class="$vuetify.breakpoint.mdOnly ? 'ml-3' : ''"
    >
      <v-card
        class="mx-auto"
        tile
        :loading="searchLoading"
      >
        <v-list
          :dense="dense"
          two-line
          :three-line="threeLine"
          :shaped="shaped"
          :flat="flat"
          :subheader="subheader"
          :inactive="inactive"
          :sub-group="subGroup"
          :nav="nav"
          avatar
          :rounded="rounded"
        >
          <v-subheader>All discussions</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <div class="text-center pt-3 pb-3">
        <v-pagination
          v-model="page"
          :length="15"
          color="blue"
          :total-visible="$vuetify.breakpoint.mdAndDown ? 7 : 9"
          circle
        ></v-pagination>
      </div>
    </v-card>
    <v-card
      v-if="$vuetify.breakpoint.xlOnly"
      width="350"
      class="ml-3"
      color="grey lighten-3"
    >
      <v-card-title>Search discussion</v-card-title>
      <div class="pl-2 pr-2">
        <v-text-field
          placeholder="Name of discussion"
          solo
          prepend-inner-icon="search"
          hide-details
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
export default {
  name: "index",
  data: () => ({
    page: 1,
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
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "&mdash; Wish I could come, but I'm out of town this weekend.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: "Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem blanditiis dicta ex hic magnam odit quaerat quisquam reiciendis voluptatibus.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: "Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: "Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
  }),
};
</script>

<style scoped>

</style>
