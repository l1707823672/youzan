<template>
  <div class="service">
    <h2 class="section-title">360°全方位一站式服务</h2>
    <ul class="icon-container">
      <li v-for="item in data" :key="item.data">
        <div :style="{'background-image': 'url('+`${item.url}`+')'}"></div>
        <p>{{item.title}}</p>
        <p class="desc">{{item.content}}</p>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[
        {
          url:"https://img.yzcdn.cn/public_files/2017/12/01/04f6274d5a2c7c9509d59ed36109c275.png",
          title:"专业客服答疑",
          content:"7*12小时专业指导 答疑解惑"
        },
         {
          url:"https://img.yzcdn.cn/static/intro/img/newIndex/service_2.png",
          title:"线上视频教学",
          content:"随时随地学习，提升能力"
        },
         {
          url:"https://img.yzcdn.cn/public_files/2018/02/06/5ad8aef3148c66f17056edac0733d735.png",
          title:"同行交流活动",
          content:"直播、社区、商盟，实战分享"
        },
         {
          url:"https://img.yzcdn.cn/static/intro/img/newIndex/service_4.png",
          title:"运营者特训营",
          content:"培训优良运营人群，轻松招人"
        }
      ]
    }
  }
};
</script>

<style>
.service {
    width: 100%;
    height: 450px;
}
.section-title {
    font-size: 28px;
    color: #333;
    line-height: 40px;
    text-align: center;
    margin: 0 auto 50px;
    padding-top: 70px;
}
.service .icon-container {
    width: 1000px;
        margin: 0 auto;
}
.service .icon-container li {
    display: inline-block;
    text-align: center;
    width: 24%;
    margin: 0;
    padding: 0;
}
.service .icon-container li div {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    margin-bottom: 15px;
    background-size: contain;
}
.service .icon-container li p {
    font-size: 18px;
    color: #333;
    line-height: 24px;
}
.service .icon-container li .desc {
    color: #999;
    font-size: 12px;
}

</style>
