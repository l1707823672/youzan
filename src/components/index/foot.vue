<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-about">
        <div class="footer_ contact">
          <h3>联系我们</h3>
          <p v-for="item in contact" :key="item.contact">{{item.contact}}</p>
        </div>
        <div class="footer_ about">
          <h3>关于我们</h3>
          <p v-for="(item,index) in about" :key="item.about">
            <a>
              {{item.about}}
              <span :class="[ (index==4) ? 'dow-zlb bg4ie':' ']"></span>
            </a>
          </p>
          <div class="qr-code">
            <div class="yz-code"></div>
          </div>
        </div>
        <div class="footer_ product">
          <h3>产品与服务</h3>
          <p v-for="item in title" :key="item.title">
            <a>{{item.title}}</a>
            <a>{{item.title1}}</a>
          </p>
        </div>
        <div id="news" class="footer_" style="float:right;">
          <h3>公司动态</h3>
          <p v-for="item in trend" :key="item.trend">
            <a>{{item.trend}}</a>
          </p>
        </div>
      </div>
      <div class="common_copy_">
        <p>
          <span style="padding: 0 8px;">
            <a>
              <img
                src="https://img.yzcdn.cn/public_files/2016/07/19/276d5f72dc85cc584d83c08fefa36c2b.png"
                style="vertical-align: middle;display:inline-block;"
              />
              <span>浙公网安备 33010602004354号</span>
            </a>
          </span>
          <span style="padding: 0 8px 0 0">|</span> 增值电信业务经营许可证：浙B2-20140331 -
          <a>浙ICP备13037466号</a>
          <span style="padding: 0 2px 0 8px">|</span>
          <span>（浙）网械平台备字【2018】第00003号</span>
        </p>
        <p>
          <a>支付业务许可证</a>
          <span style="padding: 0 8px">|</span>
          <a>工商营业执照和食品经营许可证</a>
          <span style="padding: 0 8px">|</span>
          <a>互联网药品信息服务资格证书编号：（浙）-经营性-2017-0033</a>
        </p>
        <p>
          <a>知识产权</a>
          <span style="padding: 0 8px">|</span>
          <a>规则中心</a>
          <span style="padding: 0 8px">|</span>
          <a>廉洁有赞</a>
          <span style="padding: 0 8px">|</span>
          <a>违法和不良信息举报邮箱：blxxjb@youzan.com</a>
        </p>
        <p class="copyright">© 2012-2019 Youzan.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        {
          title: "微商城",
          title1: "有赞零售",
        },
        {
          title: "微信小程序",
          title1: "App大师",
        },
        {
          title: "有赞餐饮",
          title1: "有赞美业",
        },
        {
          title: "有赞收银",
          title1: "有赞分销",
        },
        {
          title: "有赞公益",
          title1: "有赞精选",
        },
        {
          title: "消费保障",
          title1: "系统状态",
        }
      ],
      about: [
        { about: "中国有赞" },
        { about: "公司文化" },
        { about: "合作联系" },
        { about: "加入我们" },
        { about: "品牌物料" }
      ],
      contact:[
        {contact:"开店咨询：0571 - 8685 7988"},
        {contact:"周一到周日 9:00 ~ 18:00"}
      ],
      trend:[
        {trend:"公告｜有赞一贯遵循法律合法经营"},
        {trend:"i黑马 ｜有赞年交易额达330亿 要帮门店“多出2个货架”"},
        {trend:"极客公园 ｜有赞云开发者大赛启动：一个优质应用可奖励40万"},
        {trend:"极客公园 ｜有赞云PaaS成型 6个店铺定制案例给足想象空间"},
        {trend:"钱江晚报 ｜完成170项产品升级 有赞助力跨境商家合规化"},
        {trend:"钛媒体｜有赞完成新一轮近10亿融资，用于推进门店互联网化"},
        {trend:"亿邦｜有赞小程序接入“好物圈” 为商家增加曝光"}
      ]
    };
  }
};
</script>

<style lang="stylus" >
.footer {
  width: 100%;
  min-width: 1100px;
  background-color: #373d44;
  color: #ffffff;

  .footer-container {
    margin: 0 auto;
    width: 1100px;

    .footer-about {
      padding-top: 70px;
      zoom: 1;

      .footer_ {
        float: left;
        margin-right: 70px;

        h3 {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 31px;
        }

        p {
          font-size: 14px;
          color: #e5e5e5;
          line-height: 20px;
          padding-bottom: 20px;
        }

        .qr-code {
          text-align: center;

          .yz-code {
            width: 70px;
            height: 70px;
            background-size: cover;
            background-position: center;
            background-image: url('http://b.yzcdn.cn/public_files/2017/10/11/706a614ee188d1bd8924a7c617ca4133.png');
          }
        }
      }

      a {
        text-decoration: none;
        color: #e5e5e5;
        letter-spacing: 0.58px;
      }

      .about {
        .dow-zlb {
          width: 14px;
          height: 14px;
          margin-left: 4px;
          vertical-align: middle;
          display: inline-block;
          background-image: url('https://img.yzcdn.cn/public_files/2016/11/08/619f42ed1d7533bc1248c1b9c6aa8e44.png');
          background-size: cover;
        }
      }

      .product {
        a {
          display: inline-block;
          width: 95px;
        }
      }

      #news {
        margin-right: 0px;
      }

      &:after {
        content: '';
        display: table;
        clear: both;
      }
    }
  }

  .common_copy_ {
    font-size: 12px;
    margin: 50px auto 0;
    text-align: center;
    border-top: 1px solid rgba(229, 229, 229, 0.2);
    padding: 32px 0;
    color: #b6b6b6;

    a {
      text-decoration: none;
      color: #b6b6b6;
    }

    .copyright {
      margin-top: 40px;
    }

    p {
      line-height: 20px;
    }
  }
}
</style>
