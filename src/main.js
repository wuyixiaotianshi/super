// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import router from './router'

// createApp(App).mount('#app')
new Vue({
    //el: '#app',
    router,
    render: h => h(App)
        // render: x => x(App)
        // 这里的render: x => x(App)是es6的写法
        // 转换过来就是：  暂且可理解为是渲染App组件
        // render:(function(x){
        //  return x(App);
        // });
}).$mount("#app");