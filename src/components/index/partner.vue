<template>
  <div class="partner">
    <h3>合作伙伴</h3>
    <div class="trademark-container" >
      <div  v-for="item in temps" :key="item.id">
      <img :src="item.imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      temps:[
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp1.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp2.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp3.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp4.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp5.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp6.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp7.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp8.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp9.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp10.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp11.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp12.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp13.png'},
        {imgUrl:'https:///img.yzcdn.cn/static/intro/index/partner/cp14.png'},
      ]
    }
  }
};
</script>

<style>
.partner h3 {
    font-size: 28px;
    color: #333;
    line-height: 40px;
    padding-top: 70px;
    margin-bottom: 20px;
    text-align: center;
}
.partner .trademark-container {
    margin: 40px auto 70px;
    width: 1001px;
}
.partner .trademark-container img{
    float: left;
    width: 143px;
    height: 45px;
    background-repeat: no-repeat;
}
.partner .trademark-container:after {
    content: "";
    display: table;
    clear: both;
}
img{
  
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;

}
</style>
