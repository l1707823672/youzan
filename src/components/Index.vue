<template>
    <div id="index_container">

    <!-- 导航栏 -->
    <v-header></v-header>
    <!-- 轮播图 -->
    <v-swiperContainer></v-swiperContainer>
    <!-- 有赞解决方案 -->
    <v-program></v-program>
    <v-solution></v-solution>
    <v-vnew></v-vnew>
    <!-- 帮助 -->
    <v-help></v-help>
    <!-- 使用者 -->
    <v-user></v-user>
    <!-- 服务 -->
    <v-service></v-service>
    <!-- 护航 -->
    <v-huhang></v-huhang>
    <!-- 合作伙伴 -->
    <v-partner></v-partner>
    <!-- 新人注册 -->
    <v-zhuce></v-zhuce>
      <!-- 底部 -->
    <v-foot></v-foot>
  </div>
</template>

<script>
import header from '@/components/index/header'
import swiperContainer from '@/components/index/swiperContainer.vue'
import program from '@/components/index/program.vue'
import help from '@/components/index/help'
import foot from '@/components/index/foot'
import zhuce from '@/components/index/zhuce'
import partner from '@/components/index/partner'
import huhang from '@/components/index/huhang.vue'
import service from '@/components/index/service.vue'
import user from '@/components/index/user.vue'
import solution from '@/components/index/solution.vue'
import vnew from '@/components/index/vnew.vue'
export default {
    name:'Index',
    components:{
    'v-header': header,
    'v-help':help,
    'v-foot':foot,
    'v-zhuce': zhuce,
    'v-partner':partner,
    'v-huhang':huhang,
    'v-service':service,
    'v-swiperContainer':swiperContainer,
    'v-user':user,
    'v-program':program,
    'v-solution':solution,
    'v-vnew':vnew
  }
}
</script>

<style>

</style>
