<template>
  <section class="msite">
    <!--    顶部插槽-->
    <HeaderTop :title="title[0].address.name">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="/search">
        <!--        <span class="header_login_text">-->
        <!--          登录|注册-->
        <!--        </span>-->
        <span class="header_login_text">
          <i class="iconfont icon-yonghuming"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--    首页导航轮播图-->
    <div class="msite_nav">
      <!-- swiper的容器div -->
      <div class="swiper-container">
        <!-- swiper的包裹层div -->
        <div class="swiper-wrapper">
          <!-- swiper的轮播div -->
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <img src="http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg" alt="">
          </div>
        </div>
        <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import ShopList from '../../components/ShopList/ShopList.vue'
  import HeaderTop from './HeadTop'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"


  export default {
    name: "MSite",
    components: {
      HeaderTop,
      ShopList,
    },
    data() {
      return {
        title: [
          {
            address: {
              name: '成都市武侯区',
            }
          }
        ],
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      //创建swiper实列对象
      new Swiper('.swiper-container', {
        loop: true,//循环轮播
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          stopOnLastSlide: true,
          delay: 3000,
        }
      })
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px

      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%

        .icon-sousuo
          font-size 25px
          color #fff

      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center

        .header_title_text
          font-size 20px
          color #fff
          display block

      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)

        .header_login_text
          color #fff

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774

    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff

      .shop_header
        padding 10px 10px 0

        .shop_icon
          margin-left 5px
          color #999

        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

  .swiper-slide > a > img {
    width: 375px !important;
    height: 200px !important;
  }

  .food_container {
    height: 100% !important;
    width: 100% !important;
  }
</style>

