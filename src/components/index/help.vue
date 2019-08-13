<template>
  <div class="container">
    <div id="fixed-sideBox" class="fixed-sideBox sideBox-show" :style="{ right: v_right }">
    <div class="sideBox-content">
      <div class="consult-type">
        <div id="closeBox-btn" class="closeBox-btn" @click="closeBox">
          <span></span>
        </div>
        <p class="consult-text">
          联系我们
          <br />请拨打开店咨询热线：
        </p>
        <p class="consult-tel">0571 - 8685 7988</p>
      </div>
      <div class="contact-box">
        <form id="submit-input" class="contact-form">
          <p class="contact-titl">或者填写你的联系方式，我们会主动与你联系：</p>
          <input type="text"  name="name" placeholder="姓名" />
          <input type="text" name="tel" placeholder="手机号码" />
          <input type="text"  name="company" placeholder="公司名称(选填)" />
          <input type="text"  name="email" placeholder="邮箱(方便接收促销信息)" />
          <!-- <p id="sms-error" class="hide"></p> -->
          <button type="button" id="submit-btn">提交</button>
        </form>
      </div>
    </div>
  </div>

  <div class="fixed-btn" id="fixed-btns">
    <div class="fixed-btn-item" id="fixed-btn" @click="help">
      <img
        src="http://img.yzcdn.cn/static/intro/advisory/telephone_consultation.png"
        srcset="http://img.yzcdn.cn/static/intro/advisory/telephone_consultation_@2x.png"
      />
      <p>开店咨询</p>
    </div>
    <a  target="_blank" class="fixed-btn-item" @click="zhuce">
      <img
        src="https://img.yzcdn.cn/static/intro/advisory/free_shop.png"
        srcset="https://img.yzcdn.cn/static/intro/advisory/free_shop_@2x.png"
      />
      <p>免费开店</p>
    </a>
    <div
      class="fixed-btn-item qrcode-hover"
      @mouseenter="mouse_enter(index)"
      @mouseleave="mouse_leave()"
    >
      <img
        src="https://img.yzcdn.cn/static/intro/advisory/scan_code_attention.png"
        srcset="https://img.yzcdn.cn/static/intro/advisory/scan_code_attention_@2x.png"
      />
      <p>扫码关注</p>
      <div class="qrcode-popover" v-show="seen&&index==current">
        <img
          src="https://img.yzcdn.cn/static/intro/advisory/qr_code.png"
          srcset="//img.yzcdn.cn/static/intro/advisory/qr_code_@2x.png"
        />
        <p>关注“有赞说”学习运营秘籍</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "",
      seen: false,
      current: 0,
      v_right:"-290px",
    };
  },
  methods: {
    mouse_enter(index) {
      this.seen = true;
      this.current = index;
    },
    mouse_leave() {
      this.seen = false;
      this.current = null;
    },
    help(){
      this.v_right="0";
    },
    closeBox(){
      this.v_right="-290px";
    },
    zhuce(){
      this.$router.push({path:'/register'})
    }
  }
};
</script>

<style scoped>
.fixed-btn {
  position: fixed;
  width: 60px;
  height: 182px;
  right: 0;
  bottom: 50px;
  z-index: 20;
  opacity: 1;
  -webkit-transition: all, 0.5s, ease;
  -moz-transition: all, 0.5s, ease;
  transition: all, 0.5s, ease;
}
.fixed-btn .fixed-btn-item {
  cursor: pointer;
  display: block;
  background-color: rgba(0, 0, 0, 0.7);
  width: 60px;
  height: 60px;
  padding: 10px 0 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.fixed-btn .fixed-btn-item img {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
}
.fixed-btn .fixed-btn-item p {
  font-size: 12px;
  color: #fff;
  line-height: 17px;
  text-align: center;
  margin-top: 4px;
  font-weight: 300;
}
.fixed-btn .qrcode-hover .qrcode-popover {
  /* display: none; */
  position: absolute;
  bottom: 0;
  border-radius: 2px;
  left: -185px;
  padding: 10px 10px 8px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
}
.fixed-btn .qrcode-hover .qrcode-popover img {
  width: 144px;
  height: 144px;
}
.fixed-btn .qrcode-hover .qrcode-popover p {
  font-size: 12px;
  line-height: 17px;
  color: #666;
  margin-top: 8px;
}


.sideBox-show {
    right: 0;
}
.fixed-sideBox {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -290px;
    width: 290px;
    opacity: .95;
    background: #fff;
    border: 0 solid #e5e5e5;
    -webkit-box-shadow: 0 1px 10px 0 rgba(0,0,0,.07);
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.07);
    z-index: 33;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
}
.sideBox-content {
    padding-top: 18px;
}
.consult-type {
    padding: 70px 30px 30px;
}
.consult-type .closeBox-btn {
    height: 30px;
    text-align: right;
}
.consult-type .closeBox-btn span {
    height: 30px;
    width: 30px;
    display: inline-block;
    background-size: 100% auto;
    background-image: url("https://img.yzcdn.cn/public_files/2017/11/02/7b0a747e46e9a6d372b847e6c6001fc3.png");
}
.consult-type .consult-text {
    padding-top: 10px;
    line-height: 27px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666;
    letter-spacing: 0;
}
.consult-type .consult-tel {
    padding-top: 14px;
    line-height: 37px;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #333;
    letter-spacing: 0;
}
.contact-box {
    border-top: .5px solid #e5e5e5;
}
.contact-box form {
    padding: 10px 30px;
}
.contact-box form .contact-titl {
    padding-bottom: 20px;
    line-height: 27px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666;
    letter-spacing: 0;
}
.contact-box form input {
    margin-top: 10px;
    padding: 10px;
    height: 18px;
    width: 208px;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 2px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999;
}
.contact-box .sms-container {
    position: relative;
}
.contact-box form button {
    margin-top: 20px;
    height: 40px;
    width: 100%;
    background: #38f;
    border: none;
    outline: none;
    border-radius: 2px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}


















a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}
</style>
