<template>
  <div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
    <md-swiper
      @before-change="beforeChange"
      @after-change="afterChange"
      ref="swiper"
      :is-prevent="false"
      :useNative-driver="false"
    >
      <md-swiper-item :key="index" v-for="(item, index) in swiper_style">
        <div class="banner-item" :style="{'background-image': 'url('+`${item.url}`+')'}">
          <div class="banner-item-div">
            <h3>{{item.tittle}}</h3>
            <p>
              <span>{{item.message}}</span>
              <br>
              <span>{{item.message2}}</span>
              </p>
            <a class="aaa" 
            :class="[{'aaaa':(index==1 || index==0)},{'aaaaa':(index==2)},{'aaaaaa':(index==3)}]"
              >
              {{item.anNiu}}</a>
            <small class="font-lighter">{{item.number}}</small>
          </div>
        </div>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'mand-mobile'
// import simple from 'mand-mobile/components/swiper/demo/data/simple'

export default {
  name: 'swiper-demo',
  /* DELETE */
  title:
    '横向轮播 <a href="javascript:window.triggerSwiper0()">Goto 2</a><a href="javascript:window.triggerSwiper1()">Play</a><a href="javascript:window.triggerSwiper2()">Stop</a>',
  titleEnUS:
    'Horizontal rotation <a href="javascript:window.triggerSwiper0()">Goto 2</a><a href="javascript:window.triggerSwiper1()">Play</a><a href="javascript:window.triggerSwiper2()">Stop</a>',
  describe: '10秒后异步加载更多项，20秒后重置为初始数量',
  describEnUs: 'Async load more items in 10s, and reset to origin items in another 10s',
  message:
    '@before-change: from: <span id="valueSwiper0">0</span>, to: <span id="valueSwiper1">0</span><br/>@after-change: from: <span id="valueSwiper2">0</span>, to: <span id="valueSwiper3">0</span>',
  /* DELETE */
  components: {
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
  },
  data() {
    return {
      swiper_style:[
        {
          tittle:'有赞微商城',
          url:'http://img.yzcdn.cn/public_files/2018/05/29/topbanner1@2x.jpg',
          message:'一个软件解决网上开店所有问题',
          anNiu:'免费试用',
          number:'或致电 0571 - 8685 7988'

        },
         {
           tittle:'有赞零售',
          url:'http://img.yzcdn.cn/public_files/2018/05/29/topbanner2@2x.jpg',
          message:'全渠道一体化解决方案',
          message2:'让门店经营更高效',
          anNiu:'免费试用',
          number:'或致电 0571 - 8685 7988'
        },
         {
           tittle:'有赞教育',
          url:'http://img.yzcdn.cn/static/intro/index1/the_home_rotation_to_determine_the_program_V4.0@3x.png',
          message:'教育机构的互联网经营解决方案',
          anNiu:'免费试用',
          number:'或致电 0571 - 8685 7988'
        },
         {
           tittle:'有赞精选 30万商家的选择',
          url:'http://img.yzcdn.cn/intro/img/banner3/3x.png',
          message:'加入即可共享单日过百万流量',
          anNiu:'了解更多',
        }
      ]
    }
  },
  mounted() {
    // Simulation of asynchronous
    // setTimeout(() => {
    //   this.simple = simple.concat(simple)
    // }, 10000)
    // Simulation of asynchronous
    // setTimeout(() => {
    //   this.simple = simple
    // }, 24500)
    window.triggerSwiper0 = () => {
      this.goto()
    }
    window.triggerSwiper1 = () => {
      this.play()
    }
    window.triggerSwiper2 = () => {
      this.stop()
    }
  },
  methods: {
    setValue(id, value) {
      document.querySelector(id) && (document.querySelector(id).innerHTML = value)
    },
    beforeChange(from, to) {
      this.setValue('#valueSwiper0', from)
      this.setValue('#valueSwiper1', to)
    },
    afterChange(from, to) {
      this.setValue('#valueSwiper2', from)
      this.setValue('#valueSwiper3', to)
    },
    fn(index) {
      this.setValue('#valueSwiper4', index)
    },
    goto() {
      this.$refs.swiper.goto(2)
    },
    play() {
      this.$refs.swiper.play()
    },
    stop() {
      this.$refs.swiper.stop()
    },
  },
}

</script>

<style lang="stylus">
.md-example-child-swiper-0
  height 420px
  width 100%
  position relative
  .banner-item
    position absolute
    width 100%
    height 100%
    background-size cover
    background-position 50%
    .banner-item-div
      position absolute
      left 0
      right 0
      bottom 0
      top 0
      width 1100px
      height 100%
      margin auto
      h3
        margin 100px 0 16px
        font-size 44px
        font-weight 400
        line-height 56px
      p
        height 76px
        font-size 20px
        color #777  
      span 
        line-height 28px
        font-weight 300
      .aaa
        width 160px
        height 40px
        line-height 16px
        display inline-block
        text-align center
        box-sizing border-box
        padding 12px 42px
        font-size 14px
        text-decoration none
        border-radius 2px
      .aaaa
        background #38f
        color #fff
      .aaaaa
        background #00b389
        color #fff
      .aaaaaa
        background #fff
        color #eb737f
      .font-lighter
        font-size 14px
        color #777
        margin-top 16px
        display block

.md-swiper-indicator
  width 50px
  height 3px
  border-radius 0
  margin 0 5px



      
</style>
