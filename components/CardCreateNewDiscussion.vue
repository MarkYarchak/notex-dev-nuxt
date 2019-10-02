<template>
  <div>
    <v-toolbar flat color="blue-grey darken-1" dark>
      <v-toolbar-title>Create new discussion</v-toolbar-title>
    </v-toolbar>
    <v-tabs
      v-model="openedTab"
      centered
      :vertical="largeOnly"
      :show-arrows="xsOnly"
      grow
      color="blue-grey darken-1"
    >
      <div
        style="display: flex;"
        :style="largeOnly ? 'flex-direction: column' : ''"
      >
        <v-tab>
          <font-awesome-icon
            :icon="['fas', 'comment-alt']"
            class="mr-2"
          />
          Option 1
        </v-tab>
        <v-tab>
          <font-awesome-icon
            :icon="['fas', 'video']"
            class="mr-2"
          />
          Option 2
        </v-tab>
        <v-tab>
          <font-awesome-icon
            :icon="['fas', 'key']"
            class="mr-2"
          />
          Option 3
        </v-tab>
        <v-tab>
          <font-awesome-icon
            :icon="['fas', 'lock']"
            class="mr-2"
          />
          Option 4
        </v-tab>
      </div>


      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-card>
      <v-card-title>
        <v-toolbar-title>Options</v-toolbar-title>
      </v-card-title>
      <v-card-text>
        <v-switch
          v-model="newDiscussion.manyPeople"
          color="blue darken-1"
          label="Many people discussion"
        ></v-switch>
        <v-checkbox
          v-if="newDiscussion.manyPeople"
          v-model="newDiscussion.isPrivate"
          label="Private discussion (invite by link only)"
          color="blue darken-1"
        ></v-checkbox>
        <div style="display: flex; align-items: center;">
          <v-switch
            label="One to one communication"
            hide-details
            color="blue darken-1"
          ></v-switch>
          <strong style="color: #0000ab; margin: 3px 0 0 3px;">(beta)</strong>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="blue-grey darken-1"
          @click="closeCreateDialog"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          dark
          color="blue-grey darken-1"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardCreateNewDiscussion",
  data() {
    return {
      openedTab: 0,
      newDiscussion: {
        manyPeople: false,
        isPrivate: false,
      },
    };
  },
  computed: {
    largeOnly() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    xsOnly() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  methods: {
    closeCreateDialog() {
      this.$emit('close-create-dialog');
    },
  },
};
</script>

<style scoped>

</style>
