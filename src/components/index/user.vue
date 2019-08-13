<template>
  <div class="use_yz">
    <h2 class="section-title">他们都在用有赞</h2>
    <div class="use_yz-container">
      <div class="case-container">
        <div class="img-container" v-for="item in data" :key="item.data">
          <div class="bg-img" :style="{'background-image': 'url('+`${item.url}`+')'}"></div>
          <div class="card">
            <div>
              <div class="bg-logo" :style="{'background-image': 'url('+`${item.url1}`+')'}"></div>
              <p class="desc">{{item.title}}</p>
              <p class="detail">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="clear"></div>
    <a class="button white more-case">更多案例</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[
        {
          url:"https://img.yzcdn.cn/static/intro/img/newIndex/case1.jpg",
          url1:"https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_1.png",
          title:"经营类目：亲子自媒体",
          content:"“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”"
        },
        {
          url:"https://img.yzcdn.cn/static/intro/img/newIndex/case2.jpg",
          url1:"https://img.yzcdn.cn/static/intro/img/index-b/case_logo_2@2x.png",
          title:"经营类目：休闲零食",
          content:"“优惠券、满减送、签到有礼...有赞的营销工具给良品铺子微信1000多万粉丝提供了多元化的活动玩法，增强了品牌及粉丝的用户粘性。有你，有赞！”"
        },
        {
          url:"https://img.yzcdn.cn/static/intro/img/newIndex/case3.jpg",
          url1:"https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_3.png",
          title:"经营类目：水果生鲜",
          content:"“我们新店开业，公众号做‘蓝莓十人团1元购’活动，要求门店自提。顾客蜂拥而至，提货时再买点其他水果，不但把蓝莓亏的钱赚回来，开业3天销售额就超60万。”"
        },
         {
          url:"https://img.yzcdn.cn/static/intro/img/newIndex/case4.jpg",
          url1:"https://img.yzcdn.cn//static/intro/daily_0514/an_unnamed_-1.png",
          title:"经营类目：蛋糕烘焙",
          content:"“坚持新鲜现做，覆盖200多个城市。今年的‘狂欢节活动’，借助有赞的‘满就送多张优惠券’功能，单日销售破千万。”"
        },
         {
          url:"https://img.yzcdn.cn/public_files/2018/12/03/6d54cee51921c6ad363903e16fc5ed07.jpg",
          url1:"https://img.yzcdn.cn/public_files/2018/12/03/3634261509da23c171b7f68d4c9d9dbd.png",
          title:"经营类目：美妆",
          content:"“植观的第一家店铺就是有赞店铺，它将内容图文输出+精细化客户运营+数据分析有效结合，帮助店铺快速成长、沉淀用户。利用拼团、瓜分券等工具，给我们带来更多新客和转化。”"
        },
         {
          url:"https://img.yzcdn.cn/static/intro/img/index/case6@2x.jpg",
          url1:"https://img.yzcdn.cn/static/intro/img/index/Bitmap@2x.png",
          title:"经营类目：服饰",
          content:"“作为款式多、更新快、性价比高的韩风快时尚知名品牌，借助有赞‘瓜分券’功能，实现快速裂变、流量聚合。活动预热2天，参与客户达10万+，转化率高达10%。”"
        }
      ]
    }
  }
};
</script>

<style lang="stylus" scoped>
.use_yz {
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 40px;
  .section-title {
    font-size: 28px;
    color: #333;
    line-height: 40px;
    text-align: center;
    margin: 0 auto 60px;
    padding-top: 90px;
  }
  .more-case {
    display: block;
    text-align: center;
    width: 100px;
    margin: 40px auto;
  }
}
.use_yz-container {
  width: 1120px;
  margin: 0 auto 10px;
  .case-container {
    zoom: 1;
    margin-left: -10px;
    margin-right: 10px;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  .img-container {
    width: 33.3%;
    height: 300px;
    box-sizing: border-box;
    margin: 10px auto;
    padding-left: 20px;
    position: relative;
    float: left;
    overflow: hidden;
    .bg-img {
      width: 100%;
      height: 150px;
      background-size: cover;
    }
    .card {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      top: 150px;
      padding-right: 20px;
      background-color: #ffffff;
      transition: all 0.2s linear;
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      top: 150px;
      padding-right: 20px;
      background-color: #ffffff;
      transition: all 0.2s linear;
      &:hover {
        top: 0;
      }
      & > div {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .bg-logo {
        position: absolute;
        left: 30px;
        top: 35px;
        background-repeat: no-repeat;
        background-size: contain;
        width: 118px;
        height: 22px;
      }
      .desc {
        position: absolute;
        font-size: 14px;
        color: #666;
        top: 95px;
        left: 30px;
      }
      .detail {
        position: absolute;
        font-size: 14px;
        color: #666;
        line-height: 28px;
        top: 150px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: justify;
        text-justify: distribute-all-lines;
      }
    }
  }
}
a {
  &.white {
    border: 1px solid #38f;
    padding: 11px 21px;
  }
  &.button {
    &:hover {
      color: #fff;
      background: #3388ff;
    }
  }
}

</style>
