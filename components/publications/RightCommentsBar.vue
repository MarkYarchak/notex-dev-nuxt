<template>
  <v-card
    width="400"
    class="ml-1"
    color="grey lighten-3"
  >
    <v-card-title>Search for comment</v-card-title>
    <div class="pl-2 pr-2">
      <v-text-field
        v-model="searchDiscussionField"
        placeholder="Find comment"
        solo
        prepend-inner-icon="search"
        hide-details
        clearable
        :loading="searchLoading"
      ></v-text-field>
    </div>
    <v-card-title>Comments</v-card-title>
    <div style="padding: 12px 10px 10px 25px;">
      <div class="center_messages_container">
        <v-sheet
          tag="div"
          class="mt-2 scrolling-messages_container"
        >
<!--          :height="messagesContainerHeight"-->
<!--          @scroll="scrollMess"-->
          <div
            id="messages-container"
            class="messages_block"
          >
            <!--         bounce fadeIn-->
            <transition-group
              name="slide"
              enter-active-class="animated"
            >
              <OneDiscussionsMessage
                v-for="(message, mesid) in messagesArr"
                :key="(mesid + 0)"
                :message="message"
                :interlocutor="'Mark Yarchak'"
              />
            </transition-group>
          </div>
        </v-sheet>
      </div>
    </div>
  </v-card>
</template>

<script>
import OneDiscussionsMessage from '../OneDiscussionsMessage';

export default {
  name: "RightCommentsBar",
  components: {
    OneDiscussionsMessage,
  },
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
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
      messagesArr: [
          1,2,3,4,5,6,7,8,9,10
      ],
    };
  },
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>

<style scoped>

</style>
