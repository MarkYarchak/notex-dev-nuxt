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

        <font-awesome-icon
          :icon="['fas', 'arrow-left']"
          style="font-size: 17px;"
          class="sm-low"
        /><span class="sm-break">discussions</span>
      </v-btn>
      <v-spacer></v-spacer>
<!--      <v-text-field-->
<!--        v-model="messageNum"-->
<!--        label="Search message"-->
<!--        hide-details-->
<!--        single-line-->
<!--        prepend-inner-icon="search"-->
<!--        class="ml-2 mr-2"-->
<!--        :suffix="foundMessages"-->
<!--      ></v-text-field>-->
      <div><b>{{ params.id }}</b></div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
<!--        <v-btn-->
<!--          color="accent"-->
<!--          @click="$vuetify.goTo(`#message${messageNum}`, { container: '.scrolling-messages_container' })"-->
<!--        >-->
<!--          saved position-->
<!--        </v-btn>-->
      </v-toolbar-items>
      <v-btn
        dark
        color="green darken-1"
        class="sm-low"
        @click="confirmVideochatDialog = true"
      >
        <font-awesome-icon :icon="['fas', 'video']"/>
      </v-btn>
      <v-btn
        class="sm-low"
        icon
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-sheet
      tag="div"
      class="mt-2 overflow-y-auto pa-2 scrolling-messages_container"
      style="max-height: 77.5vh; min-height: 77.5vh;"
    >
      <div
        id="messages-container"
        style="display: flex; flex-direction: column; justify-content: flex-end;"
      >
        <OneDiscussionsMessage
          v-for="(item, mesid) in messagesArr"
          :key="mesid"
          :interlocutor="params.id"
          :id="'message' + item"
        />
      </div>
    </v-sheet>
    <v-footer
      absolute
      color="white"
      elevation="7"
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
        <v-icon>send</v-icon>
      </v-btn>
    </v-footer>
    <v-dialog
      v-model="confirmVideochatDialog"
      width="290"
    >
      <v-card dark>
        <v-card-title><v-toolbar-title>Call to {{ params.id }}?</v-toolbar-title></v-card-title>
        <v-card-text>
          <div class="mb-2">
            Are you really want to start private videochat with {{ params.id }}?
          </div>
          <v-checkbox
            v-model="openVideoNewTab"
            label="Open in new tab"
            color="orange"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="green darken-1"
            @click="confirmVideochatDialog = false"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            dark
            color="green darken-2"
            :target="openVideoNewTab ? '_blank' : ''"
            :to="`/discussions/media/${uniqueId(25)}`"
            @click="confirmVideochatDialog = false"
          >
            Start
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import OneDiscussionsMessage from '../../components/OneDiscussionsMessage';
import uniqueId from '../../assets/UniqueId';

export default {
  name: "_id",
  components: {
    OneDiscussionsMessage,
  },
  asyncData: ({params}) => ({
    params,
  }),
  data() {
    return {
      uniqueId,
      openVideoNewTab: true,
      confirmVideochatDialog: false,
      messageNum: '',
      messagesArr: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      ],
    };
  },
  computed: {
    foundMessages() {
      return `${this.messagesArr.some(m => m === this.messageNum).length} messages available` || 'no results';
    },
  },
  mounted() {
    this.$vuetify.goTo(document.getElementById('messages-container').offsetHeight, {
      container: ".scrolling-messages_container",
      duration: 0,
    });
  },
};
</script>

<style
  lang="stylus"
  scoped>
  .scrolling-messages_container::-webkit-scrollbar
    display: block
    max-width: 10px
  .scrolling-messages_container::-webkit-scrollbar-thumb
    background-color: dodgerblue
    -webkit-border-radius: 25px
    -moz-border-radius: 25px
    border-radius: 25px
  .scrolling-messages_container::-webkit-scrollbar-track-piece
    background-color: #d1eaff
  .scrolling-messages_container::-webkit-scrollbar-button
    background-color: cornflowerblue
    height: 2px
    display: none

  .sm-low {
    margin-right: 10px!important;
  }
@media (max-width: 900px) {
  .sm-break {
    display: none
  }
  .sm-low {
    margin: 0!important;
  }
}
</style>
