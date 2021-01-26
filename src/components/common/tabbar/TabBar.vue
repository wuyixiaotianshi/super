<template>
  <div>
<!-- <tabbar-item></tabbar-item> -->
</div>
</template>

<script type="text/javascript">
    // import TabbarItem from './tabbar/TabbarItem.vue'
    export default {
        name: 'TabBar',
        data() {
            return {

            }
        },
        components: {
            // TabbarItem
        }
    }
</script>

<style scoped>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -2px 10px rgba(100, 100, 100, .2);
    }
</style>