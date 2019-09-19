<template>
  <div>
    <v-card
      class="d-none_large"
      color="grey lighten-3"
    >
      <v-layout
        wrap
      >
        <div class="mb-3">
          <v-text-field
            placeholder="Search discussion"
            solo
            prepend-inner-icon="search"
            hide-details
            clearable
            :loading="searchLoading"
          ></v-text-field>
        </div>
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Parameters</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div style="display: flex; flex-wrap: wrap">
                <div
                  v-for="(parameter, pi) in parametersArr"
                  :key="pi"
                  style="width: 125px;"
                >
                  <v-checkbox
                    v-model="parameter.checkPosition"
                    :label="parameter.label"
                    color="green"
                  ></v-checkbox>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
    </v-card>

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
            <template v-if="items.length">
              <v-list-item-group
                v-model="item"
                color="blue darken-3"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="`/discussions/${item.title}`"
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
            </template>
            <div v-else>
              <v-banner
                single-line
                icon-color="blue"
                icon="message"
              >
                There is no discussions
                <template v-slot:actions>
                  <v-btn
                    text
                    color="blue darken-2"
                  >
                    Create new one
                  </v-btn>
                </template>
              </v-banner>
            </div>
          </v-list>
        </v-card>
        <div class="text-center pt-3 pb-3">
          <v-pagination
            v-model="page"
            :length="15"
            color="blue"
            :total-visible="7"
            circle
          ></v-pagination>
        </div>
      </v-card>

      <v-card
        width="350"
        class="ml-3 d-none_middle-small"
        color="grey lighten-3"
      >
        <v-card-title>Search discussion</v-card-title>
        <div class="pl-2 pr-2">
          <v-text-field
            v-model="searchDiscussionField"
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
            v-for="(parameter, pi) in parametersArr"
            :key="pi"
            v-model="parameter.checkPosition"
            :label="parameter.label"
            color="green"
          ></v-checkbox>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      page: 1,
      searchDiscussionField: '',
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
      parametersArr: [
        {
          label: 'Dense',
          checkPosition: this.dense,
        },
        {
          label: 'Loading',
          checkPosition: this.searchLoading,
        },
        {
          label: 'Three line',
          checkPosition: this.threeLine,
        },
        {
          label: 'Shaped',
          checkPosition: this.shaped,
        },
        {
          label: 'Flat',
          checkPosition: this.flat,
        },
        {
          label: 'Subheader',
          checkPosition: this.subheader,
        },
        {
          label: 'Inactive',
          checkPosition: this.inactive,
        },
        {
          label: 'Sub group',
          checkPosition: this.subGroup,
        },
        {
          label: 'Nav',
          checkPosition: this.nav,
        },
        {
          label: 'Rounded',
          checkPosition: this.rounded,
        },
      ],
      itemsFake: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
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
          title: 'Summer BBQ',
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
          title: 'Summer BBQ',
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
      copyItems: null,
    };
  },
  computed: {
    items() {
      return this.copyItems.filter((dio) => dio.title.toLowerCase().search(this.searchDiscussionField.toLowerCase()) > -1);
    },
  },
  created() {
    this.copyItems = this.itemsFake;
  },
  methods: {
    loadDiscussions() {
      // this.searchLoading = true;
    },
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
@media (min-width: 1904px) {
  .d-none_large {
    display: none
  }
}
@media (max-width: 1903px) {
  .d-none_middle-small {
    display: none
  }
}
</style>
