<template>
    <div class="video">

        <video-player class="video-player-box" ref="videoPlayer" 
        :options="playerOptions"
         :playsinline="true"
          customEventName="customstatechangedeventname"
           @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
             @ended="onPlayerEnded($event)" 
             @waiting="onPlayerWaiting($event)"
              @playing="onPlayerPlaying($event)" 
              @loadeddata="onPlayerLoadeddata($event)" 
              @timeupdate="onPlayerTimeupdate($event)"
               @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                 @statechanged="playerStateChanged($event)"
                  @ready="playerReadied">
        </video-player>

    </div>
</template>
<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
export default {
    data() {
        return {
            playerOptions: {
                // videojs options
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: "http://video.zcool.cn/d8d4db701da2463494f2eec794bf2dc3/008d892c081647b9b22f73b5edccafb6-5287d2089db37e62345123a1be272f8b.mp4"
                }],
                poster: "https://img.zcool.cn/community/01686c5951fd7aa8012193a357fe6f.gif",
            },
            id: "",
        }
    },
    components: {
        videoPlayer
    },
    created() {
        this.id = this.$route.params.id
    },
    mounted() {
        console.log('this is current player instance object', this.player)
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        // listen event
        // onPlayerPlay(player) {
        //     // console.log('player play!', player)
        // },
        // onPlayerPause(player) {
        //     // console.log('player pause!', player)
        // },
        // // ...player event

        // // or listen state event
        // playerStateChanged(playerCurrentState) {
        //     // console.log('player current update state', playerCurrentState)
        // },

        // // player is ready
        // playerReadied(player) {
        //     console.log('the player is readied', player)
        //     // you can use it to do something...
        //     // player.[methods]
        // }
    }
}
</script>
<style>
</style>
