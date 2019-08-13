<template>
  <div class="program_container">
    <div class="main_container" v-for="(item,index) in progr" :key="item.progr">
      <div class="wrapper wcard-container">
        <h3>{{item.qqqq}}</h3>
        <div class="wcard-content">
          <div class="wcard-left " :class="[((index % 2)>0) ? 'comment':'comment1']">
            <div class="wcard-section" v-for="xxxx in item.section" :key="xxxx.section">
              <p class="wcard-sectitle">{{xxxx.section1}}</p>
              <p class="wcard-secsummary">{{xxxx.section2}}</p>
            </div>
          </div>
          <div class="wcard-right " :class="[((index % 2)>0) ? 'comment':'comment1']">
            <img   v-bind:src="item.imgSrc" >
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progr: [
        {
          qqqq: "有赞微商城 全行业全场景的电商解决方案",
          section: [
            {
              section1: "3分钟搭建移动商城",
              section2: "深挖行业特点 匹配产品功能，提供全行业解决方案"
            },
            {
              section1: "近百种营销工具",
              section2: "社群营销&节日营销，拉新、转化、复购面面俱到"
            },
            {
              section1: "系统化管理客户",
              section2: "客户画像帮您了解客户，会员卡/储值卡实现精准营销"
            },
            {
              section1: "分销拓展销售渠道",
              section2: "客户帮你卖，员工帮你卖，300万商家帮你卖"
            }
          ],
          imgSrc:"http://img.yzcdn.cn/public_files/2018/02/11/6d246a7ac6abbcee3c39ceb6396f3ec3.png"
        },
        {
          qqqq: "有赞零售 店铺经营场景的一体化解决方案",
           section: [
            {
              section1: "门店网店互通",
              section2: "基于门店地理位置的微商城，做消费者的身边店"
            },
            {
              section1: "总部运营中心",
              section2: "总部网店和多门店联合经营，督导区域化运营帮助门店成功"
            },
            {
              section1: "深度营销和服务",
              section2: "智能分析客户喜好，让门店导购轻松服务新老客户"
            },
            {
              section1: "重新定义收银",
              section2: "稳定高效的收银设备；自由组合，快速上手"
            }
          ],
          imgSrc:"http://img.yzcdn.cn/public_files/2018/02/12/9de50602de27fc75b392fee1a43f9de6.png"
        },
         {
          qqqq: "有赞美业 美业经营一体化解决方案",
          section: [
            {
              section1: "科学灵活的预约解决方案",
              section2: "微信小程序在线预约，合理安排服务时间"
            },
            {
              section1: "丰富的营销工具",
              section2: "独特的营销创新方法，拓新客、老带新、会员激活"
            },
            {
              section1: "完善的会员管理体系",
              section2: "全方位积累会员资产，人人都是回头客"
            },
            {
              section1: "高效的连锁门店管理方案",
              section2: "提成轻松算、业绩随时看，老板经营全掌握"
            }
          ],
          imgSrc:"http://img.yzcdn.cn/public_files/2018/05/28/pc_meiye.png"
        },
        {
          qqqq: "有赞教育 教育机构的互联网经营解决方案",
           section: [
            {
              section1: "丰富的招生拓客工具",
              section2: "多渠道搜集客户线索，裂变式招生，降低推广成本"
            },
            {
              section1: "高效的线索管理转化",
              section2: "线索跟进、记录，回访提醒，发掘线索价值"
            },
            {
              section1: "清晰的教务管理体系",
              section2: "排课消课、学员生命周期管理，提升运营效率"
            },
            {
              section1: "多样的互动督学手段",
              section2: "打卡、证书、奖励，提升教学效果，促进口碑传播"
            }
          ],
          imgSrc:"http://img.yzcdn.cn/public_files/2019/07/05/3b37d88aea57b8faf58ef38de6b036ab.png"
        },
        {
          qqqq: "有赞连锁 多门店统一运营解决方案",
          section: [
            {
              section1: "适配多类连锁",
              section2: "直营和加盟连锁门店均可使用，总部用一个后台统一管理"
            },
            {
              section1: "数据全面互通",
              section2: "打通商品、库存、订单、会员、储值、营销、资产、数据八大模块"
            },
            {
              section1: "简化运营难度",
              section2: "复杂操作均由总部进行，门店仅需简单执行总部规则，服务好消费者"
            },
            {
              section1: "高效利用资金",
              section2: "灵活配置资金归集方式，门店营业额自动转账至总部账户"
            }
          ],
          imgSrc:"http://img.yzcdn.cn/public_files/2018/05/28/pc_liansuo.png"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.program_container {
  width: 100%;

  .main_container {
    width: 100%;
    height: 620px;

    .wrapper {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      zoom: 1;

      h3 {
        line-height: 40px;
        text-align: center;
        color: #333;
        font-size: 28px;
        padding-top: 90px;
      }

      .wcard-content {
        // display: flex;
        width: 1100px;
        margin-top: 70px;
        height: 445px;
        .comment{
          float right
          .wcard-section{
            padding-left 72px
          }
        }
        .comment1{
          float left
        }
        .wcard-left {
          // float left
          width: 485px;
          height: 445px;
          // display flex
          flex 1
          .wcard-section {
            margin-bottom: 28px;
            .wcard-sectitle {
              // width: 485px;
              color: #333;
              font-size: 18px;
              line-height: 24px;
            }
            .wcard-secsummary {
              width: 485px;
              margin-top: 5px;
              font-size: 14px;
              color: #999;
              line-height: 24px;
            }
          }
        }
        
        .wcard-right {
          width: 615px;
          height: 440px;

          img{
            width: 100%;
            height: 100%;
          }
        .clear{
          clear:both;
          content:'.';
          display:block;
          width: 0;
          height: 0;
          visibility:hidden;
        }
        }
      }
    }
  }
}
</style>
