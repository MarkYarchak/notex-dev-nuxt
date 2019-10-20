<template>
  <div>
    <v-card
      elevation="0"
      v-resize="onScreenResize"
    >
      <v-toolbar
        id="messages_toolbar"
        dense
        :absolute="collapseToolbar"
        :collapse="collapseToolbar"
      >
        <template v-if="collapseToolbar">
          <v-btn
            color="green darken-1"
            dark
            :depressed="!smallOnly"
            :rounded="!smallOnly"
            :small="smallOnly"
            :text="smallOnly"
            :fab="smallOnly"
            @click="doCollapseToolbar"
          >
            <font-awesome-icon
              :icon="['fas', 'angle-double-right']"
              style="font-size: 17px;"
            />
          </v-btn>
        </template>
        <template v-else>
          <v-toolbar-items>
            <v-btn
              text
              @click="$router.replace('/discussions')"
            >

              <font-awesome-icon
                :icon="['fas', 'arrow-left']"
                style="font-size: 17px;"
                class="sm-low"
              /><span class="sm-break">back</span>
            </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <div><b>{{ params.id }}</b></div>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              text
              @click="doCollapseToolbar"
            >
              <font-awesome-icon
                :icon="['fas', 'angle-double-left']"
                style="font-size: 17px;"
              />
            </v-btn>
          </v-toolbar-items>
          <v-btn
            class="sm-low"
            icon
          >
            <font-awesome-icon
              :icon="['fas', 'ellipsis-v']"
              @click.prevent=""
            />
          </v-btn>
          <v-speed-dial
            v-model="collapseToolbarActions"
            direction="bottom"
            transition="slide-y-transition"
          >
            <template v-slot:activator>
              <v-fab-transition>
                <v-btn
                  v-model="collapseToolbarActions"
                  color="green darken-1"
                  dark
                  :depressed="!smallOnly"
                  :rounded="!smallOnly"
                  :small="smallOnly"
                  :icon="smallOnly"
                  :fab="smallOnly"
                >
                  <font-awesome-icon
                    v-if="collapseToolbarActions"
                    :icon="['fas', 'times']"
                    style="font-size: 22px;"
                  />
                  <font-awesome-icon
                    v-else
                    :icon="['fas', 'chevron-down']"
                    style="font-size: 23px;"
                  />
                </v-btn>
              </v-fab-transition>
            </template>
            <v-btn
              fab
              dark
              small
              @click="doCollapseToolbar"
            >
              <font-awesome-icon
                :icon="['fas', 'angle-double-left']"
                style="font-size: 17px;"
              />
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="blue darken-1"
            >
              <font-awesome-icon
                :icon="['fas', 'user-alt']"
                style="font-size: 17px;"
              />
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="indigo"
            >
              <font-awesome-icon
                :icon="['fas', 'cog']"
                style="font-size: 17px;"
              />
            </v-btn>
            <v-btn
              dark
              fab
              small
              color="green darken-1"
              @click="confirmVideochatDialog = true"
            >
              <font-awesome-icon :icon="['fas', 'video']"/>
            </v-btn>
          </v-speed-dial>
        </template>
      </v-toolbar>
      <div class="center_messages_container">
        <v-sheet
          tag="div"
          class="mt-2 scrolling-messages_container"
          :height="messagesContainerHeight"
          @scroll="scrollMess"
        >
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
                :interlocutor="params.id"
              />
            </transition-group>
          </div>
        </v-sheet>
      </div>
      <v-footer
        id="messages_footer"
        color="white"
        elevation="5"
      >
        <div
          v-if="mdAndUp"
          class="pl-3"
        >
          <!--          pr-4-->
          <v-avatar size="54">
            <v-img
              src="https://source.unsplash.com/random"
              :lazy-src="require('~/static/icon.png')"
            ></v-img>
          </v-avatar>
        </div>
        <!--        :loading="messageInputLoading"  auto-grow-->
        <v-textarea
          v-model="messageInput"
          :label="(messageInput && !smallOnly) ? 'Ctrl + Enter to send' : 'Your message...'"
          :rows="countTextareaRows"
          no-resize
          rounded
          hide-details
          color="blue darken-2"
          loader-height="3"
          class="client_message_textarea"
          @keypress.ctrl.enter="sendNewMessage"
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
      </v-footer>
    </v-card>
    <v-progress-circular
      v-show="!messagesContainerHeight"
      :size="80"
      class="messages_loading"
      color="deep-orange"
      indeterminate
    ></v-progress-circular>
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
  </div>
</template>

<script>
import OneDiscussionsMessage from '~/components/OneDiscussionsMessage';
import uniqueId from '~/assets/UniqueId';

export default {
  name: "index",
  layout: 'account',
  components: {
    OneDiscussionsMessage,
  },
  asyncData: ({params}) => ({
    params,
  }),
  data() {
    return {
      fab: false,
      firstMessagesScrolled: true,
      messageInput: '',
      messageInputLoading: false,
      collapseToolbar: false,
      collapseToolbarActions: false,
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
    smallOnly() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    countTextareaRows() {
      return this.$vuetify.breakpoint.smAndDown ? 2 : 4;
    },
  },
  mounted() {
    // const jwt = require('jsonwebtoken');
    //
    // let reversedKey = '';
    // let splitCode = [];
    //
    // const coded = jwt.sign({name: "mark"}, 'secret_key', { expiresIn: '14 days' });
    // console.log(coded);
    //
    // splitCode = coded.split('.');
    // reversedKey = splitCode[2];//.split('').reverse().join();
    //
    //
    // const decoded = jwt.decode(splitCode[0] + '.' + splitCode[1] + '.' + reversedKey);
    // console.log(decoded);
    // const verified = jwt.verify(splitCode[0] + '.' + splitCode[1] + '.' + reversedKey, 'secret_key');
    // console.log(verified);

    this.onScreenResize();
    this.scrollMessages(0);
  },
  methods: {
    doCollapseToolbar() {
      if (this.collapseToolbar) {
        this.messagesContainerHeight = this.messagesContainerHeight - document.getElementById('messages_toolbar').offsetHeight;
        this.collapseToolbarActions = false;
      } else {
        this.messagesContainerHeight = this.messagesContainerHeight + document.getElementById('messages_toolbar').offsetHeight;
      }
      this.collapseToolbar = !this.collapseToolbar;
    },
    onScreenResize() {
      const toolbarHeight = this.collapseToolbar ? 0 : document.getElementById('messages_toolbar').offsetHeight;
      const footerHeight = document.getElementById('messages_footer').offsetHeight;
      const freeHeight = this.$vuetify.breakpoint.mdAndUp ? 73 : 65;
      this.messagesContainerHeight = ((window.innerHeight - toolbarHeight) - footerHeight) - freeHeight;
    },
    scrollMessages(duration = 400) {
      const messagesContainer = document.getElementById('messages-container');
      if (messagesContainer.scrollTop >= messagesContainer.scrollHeight - this.messagesContainerHeight) {
        this.$vuetify.goTo(messagesContainer.scrollHeight, {
          container: ".messages_block",
          duration: duration,
        });
      } else if (this.firstMessagesScrolled) {
        this.$vuetify.goTo(messagesContainer.scrollHeight + 100, {
          container: ".messages_block",
          duration: duration,
        });
      }
      this.firstMessagesScrolled = false;
    },
    sendNewMessage() {
      this.messageInputLoading = !this.messageInputLoading;
      this.messagesArr.push(this.messagesArr.length + 1);
      this.scrollMessages();
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
  .center_messages_container
    display: flex
    justify-content: center
  .scrolling-messages_container
    flex-basis 1200px
    display: flex
    flex-direction: column-reverse
  .messages_block
    display: flex
    flex-direction: column
    overflow-y auto
    overflow-x: hidden
    align-items: center
    padding-top 10px
  .client_message_textarea
    font-size: 15px
  .messages_loading
    position: absolute
    left 50%
    top: 50%;
    transform: translate(-50%)


  .messages_block {
    &::-webkit-scrollbar {
      display: block
      max-width: 9px
    }
    &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-button {
      background: #fff
    }
    &::-webkit-scrollbar-button {
      height: 1px
    }
    &:hover {
      &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-button {
        background-color: #c8c8c8
      }
      &::-webkit-scrollbar-track-piece {
        background-color: #ebebeb
      }
    }
  }


  .sm-low {
    margin-right: 10px!important;
  }
  @media (max-width: 1215px) {
    .center_messages_container {
      padding-left: 8px
    }
  }
  @media (max-width: 960px) {
    .sm-break {
      display: none
    }
    .sm-low {
      margin: 0!important;
    }
  }
</style>
