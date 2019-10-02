<template>
  <v-card
    elevation="0"
    v-resize="onScreenResize"
  >
    <v-toolbar
      id="messages_toolbar"
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
      <div><b>{{ params.id }}</b></div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      </v-toolbar-items>
      <v-btn
        dark
        icon
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
        <font-awesome-icon
          :icon="['fas', 'ellipsis-v']"
          @click.prevent=""
        />
      </v-btn>
    </v-toolbar>
    <v-row
      justify="center"
      class="pl-small"
    >
      <v-sheet
        tag="div"
        class="mt-2 pa-2 scrolling-messages_container"
        :height="messagesContainerHeight"
        @scroll="scrollMess"
      >
        <div
          id="messages-container"
          class="messages_block"
        >
          <!--         bounce zoomInUp fadeIn-->
          <transition-group
            name="slide"
            enter-active-class="animated"
          >
            <OneDiscussionsMessage
              v-for="(message, mesid) in messagesArr"
              :key="(mesid + 0)"
              :message="message"
              :interlocutor="params.id"
              draggable="true"
            />
          </transition-group>
        </div>
      </v-sheet>
    </v-row>
    <v-footer
      id="messages_footer"
      color="white"
      elevation="5"
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-textarea
          label="Your message"
          outlined
          :rows="countTextareaRows"
          no-resize
          hide-details
        ></v-textarea>
        <v-btn
          icon
          large
          color="blue darken-2"
          class="ml-1 pl-1"
          @click="sendNewMessage"
        >
          <v-icon>send</v-icon>
        </v-btn>
      </v-row>
    </v-footer>
    <v-dialog
      v-model="confirmVideochatDialog"
      width="290"
    >
      <v-card>
        <v-card-title><v-toolbar-title>New call</v-toolbar-title></v-card-title>
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
  </v-card>
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
      freeBlockHeight: '',
      messagesContainerHeight: '',
      uniqueId,
      openVideoNewTab: true,
      confirmVideochatDialog: false,
      messagesArr: [
        1, 2,// 3, 4, 5, 6, 7, 8, 9, 10, 3, 4, 5, 6, 7, 8, 9, 10,
      ],
    };
  },
  computed: {
    countTextareaRows() {
      return this.$vuetify.breakpoint.smAndDown ? 2 : 4;
    },
  },
  mounted() {
    this.onScreenResize();
    this.$vuetify.goTo(document.getElementById('messages-container').offsetHeight + 1000, {
      container: ".scrolling-messages_container",
      duration: 0,
    });
  },
  methods: {
    onScreenResize() {
      const toolbar = document.getElementById('messages_toolbar');
      const footer = document.getElementById('messages_footer');
      const freeHeight = this.$vuetify.breakpoint.mdAndUp ? 73 : 65;
      this.messagesContainerHeight =
        ((window.innerHeight - toolbar.offsetHeight) - footer.offsetHeight) - freeHeight;
      // console.log({ x: window.innerWidth, y: window.innerHeight });
    },
    sendNewMessage() {
      this.messagesArr.push(this.messagesArr.length + 1);
      this.$vuetify.goTo(document.getElementById('messages-container').offsetHeight, {
        container: ".scrolling-messages_container",
        duration: 300,
      });
    },
    scrollMess() {
      // console.log( 'Текущая прокрутка сверху: ' + document.getElementById('messages-container').offsetHeight);

      // console.log( 'Текущая прокрутка сверху: ' + document.getElementById('messages-container').pageYOffset);
    },
  },
};
</script>

<style
  lang="stylus"
  scoped>
  .messages_block
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center
    padding-top 10px
    /*height: 100%*/
  .scrolling-messages_container
    max-width: 1200px
    overflow-y auto
    overflow-x: hidden
    display: flex
    flex-direction: column-reverse


  .scrolling-messages_container::-webkit-scrollbar
    display: block
    max-width: 9px
  .scrolling-messages_container::-webkit-scrollbar-thumb
    background: #fff
  .scrolling-messages_container::-webkit-scrollbar-track-piece
    background-color: #fff
  .scrolling-messages_container::-webkit-scrollbar-button
    background-color: #fff
    height: 1px
  .scrolling-messages_container:hover::-webkit-scrollbar-thumb
    background-color: #c8c8c8
  .scrolling-messages_container:hover::-webkit-scrollbar-track-piece
    background-color: #ebebeb
  .scrolling-messages_container:hover::-webkit-scrollbar-button
    background-color: #c8c8c8


  .sm-low {
    margin-right: 10px!important;
  }
@media (max-width: 1215px) {
  .pl-small {
    padding-left: 8px
  }
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
