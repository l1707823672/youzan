<template>
  <div class="container">
    <div class="head_cotainer">
      <a class="logo" href="#"></a>
      <div class="nav-link-container">
        <a href="https://www.chinayouzan.com/" class="nav-link" target="_blank">香港上市代码</a>
        <a href="https://www.chinayouzan.com/" class="nav-link" target="_blank">08083.HK</a>
      </div>
      <ul id="nav_list_common_" class="nav-list">
        <li class="index">
          <a class="product-center current-highligh" href="#">首页</a>
          
        </li>
        <li class="product-dropdown caret-margin"  @mouseenter="enter" @mouseleave="leave">
          <a href="" class="product-center">商家服务</a>
          <div class="dropdown-menu-wrapper" v-show="isShow">
            <div class="dropdown-menu">
              <div class="product product-main border-right">
                <p class="menu-title">产品</p>
               <div class="link-list-left" >                  <!-- ******** -->
                  <div class="product-block" v-for="item in data" :key="item.data">
                    <a href="">
                      <span :style="{'background-image': 'url('+`${item.url}`+')'}"></span>
                      <h4>{{item.title}}</h4>
                      <p>{{item.message}}</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product product-solutions">
                <div class="link-list-left">
                  <p class="menu-title">解决方案</p>
                  <div class="solution-container">
                    <div class="product-block" :class="[((index % 3)>0) ? 'margin':'css']" v-for="(it,index) in data1" :key="it.data1">
                      <a href="">
                        <h4>{{it.title}} </h4>
                        <p>{{it.message}}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="product-dropdown caret-margin">
          <a href="" class="product-center">消费者</a>
        </li>
        <li class="caret-margin">
          <a href="" class="product-center current-highlight">渠道合作</a>
        </li>
        <li class="product-dropdown caret-margin">
          <a href="" class="product-center">有赞云</a>
        </li>
        <li class="product-dropdown caret-margin">
          <a href="" class="product-center">更多服务</a>
        </li>
        <li class="last login_common_">
          <a target="_blank" class="btn-login" @click="GoLogin">
           登录
          </a>
        </li>
        <li class="last register_common_">
          <a target="_blank" id="yz_register_" class="btn-register_" @click="GoRegister">
            注册
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:false,
      data:[
        {
          url:'//b.yzcdn.cn/static/intro/header/product-icon/wsc.png',
          title:'有赞微商城',
          message:'网上开店工具，帮你提升销量'
        },
        {
          url:'//b.yzcdn.cn/static/intro/header/product-icon/lingshou.png',
          title:'有赞零售',
          message:'打通门店网店，业绩翻倍增长'
        },
        {
          url:'//b.yzcdn.cn/static/intro/header/product-icon/ls.png',
          title:'有赞连锁',
          message:'多门店统一经营解决方案'
        },
        {
          url:'//b.yzcdn.cn/static/intro/header/product-icon/meiye.png',
          title:'有赞美业',
          message:'轻松拉客，快乐管店务'
        },
        {
          url:'//b.yzcdn.cn/static/intro/header/product-icon/edu.png',
          title:'有赞教育',
          message:'教育机构的互联网解决方案'
        },
        {
          
          title:'更多产品...',
          message:'服务一切教育'
        }
      ],
      data1:[
        {
          title:'小程序',
          message:'一键接入，抢占市场红利'
        },
         {
          title:'餐饮',
          message:'外卖、堂食，统一高效管理'
        },
         {
          title:'定制服务',
          message:'个性化需求，独立定制'
        },
         {
          title:'分销',
          message:'搭建分销网络，万人帮你卖货'
        },
         {
          title:'票务',
          message:'在线售票，快速核销，提升营收能力'
        },
         {
          title:'更多解决方案…',
          message:'帮助更多垂直行业的商家成功'
        },
         {
          title:'广告投放',
          message:'连接优质流量，获取目标客户'
        },
         {
          title:'媒体',
          message:'快速拥有网店，微信粉丝变现'
        },
         {
          title:'',
          message:''
        },
         {
          title:'App开店',
          message:'让每个App都拥有强大的商城能力'
        },
         {
          title:'酒店',
          message:'满足订房、餐饮、娱乐等多场景'
        },
         {
          title:'',
          message:''
        },
         {
          title:'营销应用',
          message:'百种营销工具，玩转社交电商'
        },
         {
          title:'会议',
          message:'一站式全流程会务解决方案'
        }
    
      ]
    };
  },
  methods:{
    GoLogin(){
      this.$router.push({path:'/login'})
    },
    GoRegister(){
      this.$router.push({path:'/register'})
    },
    enter(){
      this.isShow=true;
    },
    leave(){
      this.isShow=false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100%;
  min-width: 1100px;
  height: auto;
  position: relative;
  background: #ffffff;
  border-bottom: 1px solid #ededed;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 200;
  transition: all 0.5s ease-in;
  .head_cotainer {
    box-sizing: border-box;
    margin: 0 auto;
    width: 1100px;
    height: 70px;
    zoom: 1;
    .nav-link-container {
      display: inline-block;
      width: 60px;
      margin-left: 10px;
      margin-bottom: -1px;
    }
    .nav-list {
      & > li {
        float: left;
        height: 70px;
        line-height: 70px;
        padding: 0px 20px;
      }
      
    }
    li {
      &.login_common_ {
        padding: 0px 0px 0px 20px;
      }
      &.register_common_ {
        padding: 0px 0px 0px 10px;
      }
    }
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  }
}
a {
  &.logo {
    display: inline-block;
    width: 72px;
    height: 25px;
    margin-top: 22.5px;
    background-size: 72px 25px;
    background-image: url("https://img.yzcdn.cn/public_files/2016/11/29/8fc4cd6f771897cbf9663166a63a5302.png");
  }
}
.nav-link-container {
  display: inline-block;
  width: 60px;
  margin-left: 10px;
  margin-bottom: -1px;
  .nav-link {
    float: left;
    width: 78px;
    color: #999;
    font-size: 10px;
    font-family: "PingFang SC";
    font-weight: 300;
    line-height: 13px;
  }
}
.head_cotainer {
  ul {
    list-style: none;
    font-size: 14px;
  }
}
.nav-list {
  float: right;
  zoom: 1;
  & > li {
    .product-center {
      text-decoration: none;
      color: #2c3a46;
    } 
  }
  .caret-margin:hover{
    .product-center{
      color:red
    }
  }
  .index{
    .current-highligh{
      color:#ff4444
    }
  }
}

.dropdown-menu-wrapper {
  position: absolute;
  left: 0;
  border-bottom: 1px solid #e5e5e5;
  z-index: 100;
  box-shadow: inset 0px 2px 5px rgba(0, 0,0, 0.07);
  transform-origin: 50% 0%;
  transition: 300ms ease-in-out;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  .dropdown-menu {
    margin: 30px auto;
    width: 100%;
    max-width: 1100px;
    zoom: 1;
    .product-solutions {
      margin-left: 82px;
      .menu-title {
        padding-left: 10px;
      }
      .solution-container {
        zoom: 1;
        max-width: 760px;
        .product-block {
          float: left;
        }
        .margin {
          margin-left: 61px;
        }
      }
    }
    .product {
      box-sizing: border-box;
      float: left;
      line-height: normal;
      .menu-title {
        font-size: 12px;
        color: #666;
        margin-bottom: 12px;
      }
      .link-list-left {
        float: left;
        div {
          position: relative;
          span {
            width: 28px;
            height: 28px;
            position: absolute;
            left: 10px;
            top: 16px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          h4 {
            font-size: 16px;
            color: #333;
          }
          p {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
          }
        }
      }
      .product-block {
        width: 212px;
        height: 70px;
        padding: 13px 10px;
        box-sizing: border-box;
      }
    }
    .border-right {
      border-right: 0.5px solid #e5e5e5;
      padding-right: 45px;
    }
    .product-main {
      .menu-title {
        padding-left: 1px;
        margin-left: 0;
      }
      h4 {
        margin-left: 36px;
      }
      p {
        margin-left: 36px;
      }
    }
  }
}
.btn-login {
  width: 80px;
  height: 30px;
  line-height: 28px;
  display: inline-block;
  border: 1px solid #3388ff;
  color: #3388ff;
  text-align: center;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #3388ff;
    color: #ffffff;
  }
}
.btn-register_ {
  width: 80px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  background-color: #3388ff;
  color: #ffffff;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}
div {
  display: block;
}
html,
body {
  min-width: 1100px;
  color: #2c3a46;
  background: #fff;
  font-size: 14px;
  line-height: 1.6em;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Helvetica, "Pingfang SC", "Microsoft YaHei", STHeiti, Verdana,
    Arial, Tahoma, sans-serif;
}
html {
  line-height: 1;
}

</style>
