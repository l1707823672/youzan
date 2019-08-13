<template>
    <div class="vnew">
        <h3>{{title}}</h3>
        <div class="vnew-container">
            <div class="vnew-contain" v-for="item in vnew" :key="item.vnew">
                <div class="icon-div" :style="{'background-image': 'url('+`${item.url}`+')'}"></div>
                <div class="ump-intro">
                    <p class="ump-title">{{item.title}}</p>
                    <p class="ump-desc">
                        {{item.aaa}}
                        <br>
                        {{item.bbb}}
                    </p>
                    <a >{{info}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            vnew:[
              {
                url:'https://img.yzcdn.cn/intro/index/ump1-2@2x.png',
                title:'获客拉新',
                aaa:'多人拼团、分销员、瓜分券、',
                bbb:'团购返现…'
              },
              {
                url:'https://img.yzcdn.cn/intro/index/ump2-2@2x.png',
                title:'下单转化',
                aaa:'限时折扣、优惠券、降价拍、',
                bbb:'秒杀…'
              },
              {
                url:'https://img.yzcdn.cn/intro/index/ump3-2@2x.png',
                title:'提高客单',
                aaa:'打包一口价、优惠套餐、满减',
                bbb:'送…'
              },
              {
                url:'https://img.yzcdn.cn/intro/index/ump4-2@2x.png',
                title:'留存复购',
                aaa:'积分商城、会员储值、会员',
                bbb:'卡、签到…'
              }
            ],
            title:'丰富多样的营销玩法覆盖所有经营场景',
            info:'查看更多'
        }
    }
}
</script>

<style lang="stylus">
.vnew
  max-width 1100px
  margin 0 auto
  position relative
  zoom 1
  h3
    text-align center
    font-size 28px
    color #333
    line-height 40px
    padding-top 90px
  .vnew-container
    display flex
    flex-wrap wrap
    margin-top 48px
    margin-bottom 48px
    .vnew-contain:hover
      background #FF9050
    .vnew-contain
      cursor pointer
      width 213px
      height 190px
      padding 20px
      border 1px solid #e5e5e5
      border-radius 2px
      margin-right 20px
      margin-bottom 20px
      .icon-div
        // background: url(https://img.yzcdn.cn/intro/index/ump2-2@2x.png) no-repeat;
        background-size: 52px;
        width 52px
        height 52px
      .ump-intro
        padding-top 20px
        width 100%
        height 92px
        line-height 36px
        .ump-title
          font-size 20px
          font-weight 600
          color #333
        .ump-desc
          font-size 14px
          line-height 24px
          color #999
        a
          font-size 14px
          color #38f
          text-decoration none
</style>
