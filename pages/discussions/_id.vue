<template>
  <div>
    <v-toolbar
      dense
      class="pb-2 pt-2"
    >
      <v-btn
        text
        to="/discussions"
      >
        <v-icon left>mdi-arrow-left</v-icon>go back
      </v-btn>
      <v-text-field
        label="Search message"
        hide-details
        single-line
        prepend-inner-icon="search"
        class="ml-2 mr-2"
      ></v-text-field>
      <v-toolbar-items>
        <v-btn
          color="accent"
          @click="$vuetify.goTo('#message50')"
        >
          saved position
        </v-btn>
      </v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-sheet
      tag="div"
      class="mt-2 overflow-y-auto pa-2"
      style="max-height: 77.5vh; min-height: 77.5vh;"
    >
      <v-card
        v-for="(item, mesid) in 100"
        :key="mesid"
        :id="'message' + item"
      >
        <v-card-title>{{ params.id }}</v-card-title>
      </v-card>
    </v-sheet>
    <v-footer
      absolute
      color="white"
    >
      <v-text-field
        label="Your message"
        outlined
        hide-details
      ></v-text-field>
      <v-btn
        icon
        large
        color="blue darken-2"
        class="ml-1 pl-1"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "_id",
  asyncData: ({params}) => ({
    params,
  }),
};
</script>

<style scoped>

</style>
