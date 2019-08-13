<template>
    <div class="wrapper yz-resolutions">
        <h3>{{title}}</h3>
        <div class="rescontent">
            <div class="resolution-card" v-for="item in resolution" :key="item.resolution">
                <div class="ccover">
                    <img class="icon" :src="item.imgSrc1">
                    <img class="back" :src="item.imgSrc2">
                </div>
                <div class="csummary">
                    <p>{{item.title}}</p>
                    <a >{{item.message}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
       resolution:[
      {
        title:'小程序',
        message:'了解更多',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_mapp.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_mapp.png'
      },
      {
        title:'知识付费',
        message:'了解更多',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_pfrding.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_payforreading.png'
      },
      {
        title:'餐饮外卖',
        message:'了解更多',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_food.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_food.png'
      },
      {
        title:'自媒体',
        message:'了解更多',
        imgSrc1:'//img.yzcdn.cn/intro/index/pc/pc_bg_naive.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_naive.png'
      },
      {
        title:'票务卡券',
        message:'了解更多',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_tickets.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_tickets.png'
      },
      {
        title:'酒店客栈',
        message:'了解更多',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_motel.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/motel.png'
      },
      {
        title:'生鲜果蔬',
        message:'查看案例',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_fruits.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_fruits.png'
      },
      {
        title:'蛋糕烘焙',
        message:'查看案例',
        imgSrc1:'//img.yzcdn.cn/intro/index/icon/icon_cakes.png',
        imgSrc2:'//img.yzcdn.cn/intro/index/pc/pc_bg_cakes.png'
      }
    ],
    title:'为超过36个行业和场景提供经营解决方案'
    }
  }
}
</script>

<style lang="stylus">
.wrapper
  max-width 1100px
  margin 0 auto 
  position relative
  zoom 1
  h3
    font-size 28px
    color #333
    text-align center
    line-height 40px
    padding-top 90px
  .rescontent::after
    content ""
    display table
    clear both
  .rescontent
    display flex
    flex-wrap wrap
    margin-top 48px
    margin-bottom 48px
    .resolution-card:hover
      border-color #38f
    .resolution-card
      cursor pointer
      width 253px
      height 256px
      border 1px solid #e5e5e5
      border-radius 2px
      margin-right 20px
      margin-bottom 20px
      transition .5s
      .ccover
        height 169px
        width 100%
        position relative
        .icon
          position absolute
          width 60px
          margin 0 auto
          left 98px
          top 54px
        img
          width 100%
      .csummary
        padding 10px 0
        width 100%
        height 92px
        text-align center
        line-height 36px
        p
          font-size 18px
        a
          font-size 12px
          color #38f
          text-decoration none


</style>
