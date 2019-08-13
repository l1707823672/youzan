<template>
  <div class="zhuce">
    <p>现在注册，立享新人专属优惠礼包！</p>
    <a href="#" @click="GoRegister">立即注册</a>
    </div>
</template>

<script>
export default {
    methods:{
        GoRegister(){
      this.$router.push({path:'/register'})
    }
    }
}
</script>

<style>
.zhuce {
    width: 100%;
    height: 235px;
    text-align: center;
    background-position: 50%;
    background-size: cover;
    background-image: url('https://img.yzcdn.cn/static/intro/img/newIndex/footerbg.png');
}
.zhuce p {
    font-size: 28px;
    color: #fff;
    line-height: 40px;
    padding-top: 60px;
    padding-bottom: 35px;
}
.zhuce a {
    text-decoration: none;
    font-size: 14px;
    color: #38f;
    background-color: #fff;
    padding: 15px 57px;
    border-radius: 2px;
}
</style>
