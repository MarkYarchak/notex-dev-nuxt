<template>
  <div>
    <h1>Realtime communication with WebRTC</h1>
    <div style="display: flex; flex-wrap: wrap">
      <div>
        <video
          id="videoPlayer"
          autoplay
          playsinline
          height="400"
        ></video>
      </div>
      <div style="display: flex;">
        <v-switch
          v-model="iframeAllow"
          label="Add iframe"
          color="orange darken-1"
        ></v-switch>
        <iframe
          v-if="iframeAllow"
          src="https://youtu.be/M1qDPtyrwrw"
          allowfullscreen
          allow="camera;microphone"
          height="500"
          width="350"
        ></iframe>
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${ytVideoId}`"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <v-text-field
          v-model="ytVideoId"
          label="Video ID"
        ></v-text-field>
      </div>
    </div>
    <hr class="mt-2 mb-2">
    <div style="display: flex; flex-wrap: wrap; align-items: center;">
      <v-btn
        dark
        color="red"
        class="ml-3"
        @click="enableVideoRecord"
      >
        Enable video
      </v-btn>
      <!--      <v-btn-->
      <!--        dark-->
      <!--        color="red"-->
      <!--        class="ml-3"-->
      <!--        @click="disableVideoRecord"-->
      <!--      >-->
      <!--        Disable video-->
      <!--      </v-btn>-->
      <v-switch
        v-model="allowVideo"
        label="Allow video"
        class="ml-3"
        color="red"
        hide-details
        @change="changePermissions"
      ></v-switch>
      <v-switch
        v-model="allowAudio"
        label="Allow audio"
        class="ml-3"
        color="red"
        hide-details
        @change="changePermissions"
      ></v-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'account',
  data() {
    return {
      iframeAllow: false,
      allowVideo: false,
      allowAudio: false,
      ytVideoId: 'M1qDPtyrwrw',
    };
  },
  methods: {
    changePermissions() {
      setTimeout(() => this.enableVideoRecord, 0)
    },
    enableVideoRecord() {
      const mediaStreamConstraints = {
        audio: this.allowAudio,
        video: this.allowVideo, // ? { width: 1280, height: 720 } : false,
      };

// Video element where stream will be placed.
      const localVideo = document.getElementById('videoPlayer');

// Local stream that will be reproduced on the video.
      let localStream;

// Handles success by adding the MediaStream to the video element.
      function gotLocalMediaStream(mediaStream) {
        localStream = mediaStream;
        localVideo.srcObject = mediaStream;
        localVideo.onloadedmetadata = function(e) {
          localVideo.play();
        };
      }

// Handles error by logging a message to the console with the error message.
      function handleLocalMediaStreamError(error) {
        console.log('navigator.getUserMedia error: ', error);
      }

// Initializes media stream.
      navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
          .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);

      // navigator.mediaDevices.getUserMedia({
      //   video: true,
      // })
      // .then((mediaStream) => {
      //   console.info('navigator.getUserMedia was completed');
      //   document.getElementById('videoPlayer').srcObject = mediaStream;
      // })
      // .catch((error) => {
      //   console.error('navigator.getUserMedia error: ', error);
      // });
    },


    disableVideoRecord() {
      navigator.mediaDevices.enumerateDevices()
          .then((data) => console.info(data))
          .catch((err) => console.error(err));
    },
  },
};
</script>

<style
  lang="stylus"
  scoped>

</style>
