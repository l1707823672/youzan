<template>
    <div class="login_container">
        <div class="login_contain">
            <div class="header">
                <a  class="header-logo" @click="GotoIndex"></a>
                <div class="header-title">免费注册</div>
            </div>
            <div class="content">
                <div class="content-inner pull-left">
                  <div class="register">
                    <form  class="zent-form"></form>
                  </div>
                </div>
                <div class="content-inner pull-right">
                    <div class="banner">
                        <img src="//img.yzcdn.cn/v2/image/account/retailer-logos.png" alt="">
                    </div>
                </div>
            </div>
            <div class="footer">
                <p class="copyright">
                    © 2012 - 2019 
                    <a @click="GotoIndex">Youzan.com</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'register',
    methods:{
        GotoIndex(){
          this.$router.push({path:'/'})
        }
    }
}
</script>

<style lang="stylus">
.login_contain
  width 900px
  position relative
  margin 0 auto 
  .header
    border-bottom 1px solid #e5e5e5
    padding 50px  0 21px
    height 24px
    .header-logo
      float left
      width 70px
      height 24px
      position relative
      background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAYCAMAAABwdHsxAAAA/FBMVEUAAAAsO0csOkYsO0csO0csO0csO0csOkctO0YtO0ctO0YtO0ctO0csOkctO0csOkYsO0YsOkctO0ctPEkwPUkwP0o2TFXvAAAsOkYtO0ctOkctO0YtO0gtPEcuPEcuPUk1Q0ozRVD/AABDUWzuAADvAAAsOkYtOkcsOkYtOkYuPEguO0gtPEYxQUvuAAAsO0fvAAAtO0csOkbuAADuAAAtO0ctO0fwAAD1AADuAADvAADvAAAtO0ctO0ctO0fvAADvAADvAADuAADwAAAtPEjvAADxAAAsPUjvAAD/AADvAADuAADwAADwAADxAADuAADwAAD1AADuAAAsOkYBcdHoAAAAUnRSTlMA6/vV4+7Q3MmC3rpm4EXxta9xNCkfCfn1j4x5X1tMPRIOCwTUzsKqpJ9AOjMY8Ofi0b22p3ZuMg/0u5+ZlJORgHBqYVQ+Ny4eB+nDlWZYTSMZSxWD6QAAAhBJREFUOMul09V2q1AUheHJDhFaJN64N153dzt+mO//LiVAyCa0ucl3AWOsi3+wF4DA6/7+E9Z3bNtb/7G2bdu2XxB1otYRVjMb1OBon+brPIXsY8vJnCEqxbfwIC/SVY4mkxayPNF402zuIHBmO94RUWAsPOj26WkULHqqCDzMMh0sqIrLolAWnPmpeM5lOcrl2ulkbqqxPJ1KT3PkVLYgScRm9mjFJO6hAG83xQJQZxaSzmw1Fx8Azv91pXmG+vKuDMNQaBlGOqaqapyWcw1ST/bM9lFv17YvETCZ7CJMK2fYzzBRPtEqCW5mmKxUTPh69sIu5toGJfOpTt1kpT0GBmyYHKAF36Mt6WFuQIpNnzXPFBPMNxgXceRLe0WTGWxuwPXnQs5sB8/PONVgJ37mrU8NaXVYK+jKXg4mxaFIofPycAypIb2wLMU4mqkaWXjHyOlFoHg7HI6a7j+wlNn3PrMyWQNF0ieIOYa4czuaucJMmqU6QLHhC2WseODbzD1mxqk8AOlQcgYL4rvMHXyrM2OqKzOPckYkfKWlTOuA2srMuZyh4hPhzDTGRBEOXV+diR5qYTIQTO3oymG5VsDXmSuszhSeb1SypHVRuz4QZPK2Gc7s/vz1+7WDLzLV0VAIb9KnY0PbgatVz5TIw3mmd3z/9x1RNNxbheS1N2kq6eoEkrZ+YOLox+UdzjpYzyd1ep66B/0wGAAAAABJRU5ErkJggg==") no-repeat
    .header-title
      position relative
      top 7px
      font-size 16px
      color #333
      padding-left 10px
      margin 0 100px 0 80px 
      border-left 1px solid #e8e8e8
  .content
    overflow hidden
    padding-top 40px
    .content-inner
      width 450px
      height 405px
      float left
      .register
        padding-left 50px
        width 350px
        font-size 14px
        color #333
        .zent-form 
          margin-bottom 0
          width auto
      .banner
        padding-left 3px
        margin-top 45px
        img
          width 380px
  .footer
    text-align center
    position fixed
    font-size 12px
    color #999
    width 100%
    bottom 30px
    left 0
    margin-top 50px
    background-color #fff
    .copyright
      line-height 12px
      a
        color #999
</style>
