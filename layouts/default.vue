<template>
  <div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <v-app dark>
        <v-navigation-drawer
          v-model="drawer"
          clipped
          :bottom="bottomMenu"
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
<!--                  <v-icon>menu-right</v-icon>-->
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
<!--                <span v-if="item.title === 'People'">-->
<!--                  <font-awesome-icon :icon="['fas', 'users']" />-->
<!--                </span>-->
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
          <v-toolbar-title v-if="!fullSizeSearch">
            <span class="main-text">{{ title }}</span>
          </v-toolbar-title>
          <v-spacer />
          <v-text-field
            ref="mainSearch"
            v-model="mainSearch"
            placeholder="Search anything..."
            solo
            prepend-inner-icon="search"
            hide-details
            clearable
            light
            class="top-main-search sm-break"
            :class="{'top-full-main-search': fullSizeSearch}"
            :loading="searchLoading"
            @blur="fullSizeSearch = false"
            @keypress.enter="startMainSearch"
          ></v-text-field>
          <span
            class="sm-add"
            :style="fullSizeSearch ? 'min-width: 87%;' : ''"
          >
            <v-text-field
              v-if="fullSizeSearch"
              ref="mobileMainSearch"
              v-model="mainSearch"
              placeholder="Search anything..."
              style="min-width: 100%;"
              solo
              prepend-inner-icon="search"
              hide-details
              clearable
              light
              :loading="searchLoading"
              @blur="fullSizeSearch = false"
              @keypress.enter="startMainSearch"
            ></v-text-field>
            <v-btn
              v-if="!fullSizeSearch"
              rounded
              color="grey darken-4"
              @click="focusMobileSearch()"
            >
              <v-icon>search</v-icon>
            </v-btn>
          </span>
          <div class="free-space-2"></div>
        </v-app-bar>
        <v-content style="background-color: #fff;">
          <nuxt />
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
      isMobile: this.$vuetify.breakpoint.smAndDown,
      mainSearch: '',
      fullSizeSearch: false,
      searchLoading: false,
      drawer: this.$vuetify.breakpoint.lgAndUp,
      items: [
        {
          icon: 'work',
          title: 'Workspaces',
          to: '/workspaces'
        },
        {
          icon: 'group',
          title: 'Collaborators',
          to: '/collaborators'
        },
        {
          icon: 'note',
          title: 'Notes',
          to: '/notes'
        },
        {
          icon: 'forum',
          title: 'Discussions',
          to: '/discussions'
        },
        {
          icon: 'group_work',
          title: 'Organizations',
          to: '/organizations'
        },
        {
          icon: 'view_day',
          title: 'Publications',
          to: '/publications'
        },
        {
          icon: 'accessibility', // accessible_forward
          title: 'People',
          to: '/people'
        },
        {
          icon: 'settings',
          title: 'Settings',
          to: '/settings'
        },
      ],
      title: 'Notex Dev System'
    };
  },
  computed: {
    searchOverlay() {
      return !!this.mainSearch && this.isMobile ? this.fullSizeSearch : false;
    },
    bottomMenu() {
      return this.$store.state.appSettings.isBottomMenu;
    },
  },
  methods: {
    startMainSearch() {
      this.$router.push('/');
      this.$refs.mainSearch.blur();
    },
    focusMobileSearch() {
      this.fullSizeSearch = true;
      setTimeout(() => this.$refs.mobileMainSearch.focus(), 0);
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
  .top-full-main-search
    max-width none
    min-width 87%
  .sm-break
    display: block!important
  .sm-add
    display: none!important
@media (max-width: 960px) {
  .free-space-2 {
    display: none
  }
}
@media (max-width: 600px) {
  .top-main-search {
    max-width 48px
  }
  .sm-break {
    display: none!important
  }
  .sm-add {
    display: block!important
  }
}
</style>
