<template>
  <div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <v-app dark>
        <v-navigation-drawer
          v-model="drawer"
          clipped
          bottom
          fixed
          dark
          color="grey darken-4"
          app
        >
<!--          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"-->
          <template v-slot:prepend>
            <v-list>
              <v-list-item
                link
                two-line
                :to="`/profile/markyarchak`"
                color="orange"
              >
                <v-list-item-avatar size="60">
                  <v-img src="https://source.unsplash.com/random/2"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">Mark Yarchak</v-list-item-title>
                  <v-list-item-subtitle>@markyarchak</v-list-item-subtitle>
                </v-list-item-content>
<!--                <v-list-item-action>-->
<!--                  <v-icon>mdi-menu-right</v-icon>-->
<!--                </v-list-item-action>-->
              </v-list-item>
            </v-list>
          </template>

          <v-divider></v-divider>

          <v-list
            nav
            dense
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
              color="orange"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"/>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
          color="orange darken-3"
          dark
          clipped-left
          fixed
          app
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-toolbar-title>
            <span class="main-text">{{ title }}</span>
          </v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="mainSearch"
            placeholder="Search anything"
            solo
            prepend-inner-icon="search"
            hide-details
            clearable
            light
            :loading="searchLoading"
          ></v-text-field>
          <div class="free-space-2"></div>
        </v-app-bar>
        <v-content style="background-color: #fff;">
          <v-container>
            <nuxt />
          </v-container>
        </v-content>
      </v-app>
    </transition>
    <v-overlay
      :value="searchOverlay"
      z-index="3"
    >
    </v-overlay>
  </div>
</template>

<script>
export default {
  // middleware: ['authUser'],
  data () {
    return {
      mainSearch: '',
      searchLoading: false,
      drawer: this.$vuetify.breakpoint.lgAndUp,
      items: [
        {
          icon: 'mdi-briefcase',
          title: 'Workspaces',
          to: '/workspaces'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Collaborators',
          to: '/collaborators'
        },
        {
          icon: 'mdi-forum',
          title: 'Discussions',
          to: '/discussions'
        },
        {
          icon: 'mdi-account-group',
          title: 'Organizations',
          to: '/organizations'
        },
        {
          icon: 'mdi-file-document-box',
          title: 'Publications',
          to: '/publications'
        },
        {
          icon: 'mdi-settings',
          title: 'Settings',
          to: '/settings'
        },
      ],
      title: 'Notex Dev System'
    };
  },
  computed: {
    searchOverlay() {
      return !!this.mainSearch;
    },
  },
};
</script>

<style
  lang="stylus"
  scoped
>
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  .main-text
    font-family: 'Lato', sans-serif;
    font-weight: bold
  .free-space-2
    flex-grow: 2;

@media (max-width: 1000px) {
  .free-space-2 {
    display: none
  }
}
</style>
