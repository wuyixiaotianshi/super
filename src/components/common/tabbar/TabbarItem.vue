<template>
    <div>
    <!-- <router-view></router-view> -->
  <div id="tab-bar">
    <!-- 循环数组 -->
  <div class="tab-bar-item" v-for="(item,index) in info" :key="index" @click="imgClick(index)">
  <router-link :to="item.path">
   <img v-if="isActive===index" :src="item.url2" alt="" >
   <img v-else :src="item.url1" alt="" >
   <div :class="{'red':isActive===index}">{{item.text}}</div>
  </router-link>
  </div>
</div>
</div>
</template>

<script type="text/javascript">
    export default {
        name: 'TabbarItem',
        // props: ['message'],
        data() {
            return {
                // 数据可修改start
                info: [{
                    // url1: require("../../assets/img/tabbar/shouye.svg"),
                    url1: require("assets/img/tabbar/shouye.svg"),
                    url2: require("assets/img/tabbar/shouyeRed.svg"),
                    path: "/shouye",
                    text: '首页'
                }, {
                    url1: require("assets/img/tabbar/classification.svg"),
                    url2: require("assets/img/tabbar/classificationRed.svg"),
                    path: "/classification",
                    text: '分类'
                }, {
                    url1: require("assets/img/tabbar/shopping.svg"),
                    url2: require("assets/img/tabbar/shoppingRed.svg"),
                    path: "/shopping",
                    text: '购物车'
                }, {
                    url1: require("assets/img/tabbar/me.svg"),
                    url2: require("assets/img/tabbar/meRed.svg"),
                    path: "/me",
                    text: '我的'
                }],
                // 数据可修改end

                isActive: null
            }
        },
        methods: {
            imgClick(index) {
                this.isActive = index;
                // this.$emit("listenToChildEvent", "this message is from child")
            }
        },
        components: {}
    }
</script>

<style scoped>
    /* 利用flex布局，图片可放多个 */
    
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -2px 10px rgba(100, 100, 100, .2);
    }
    
    .tab-bar-item {
        flex: 1;
        text-align: center;
        /* 一般tabbar的高度都49px */
        height: 49px;
        font-size: 14px;
    }
    
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        margin-bottom: 2px;
        vertical-align: middle;
    }
    /* 点击文字颜色的变化 */
    
    .red {
        color: red;
    }
</style>