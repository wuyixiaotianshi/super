import VueRouter from 'vue-router'
import Vue from 'vue'


const shouye = () =>
    import ('views/shouye/shouye.vue')
const classification = () =>
    import ('views/classification/classification.vue')
const shopping = () =>
    import ('views/shopping/shopping.vue')
const me = () =>
    import ('views/me/me.vue')
console.log(shouye);

// 安装插件
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/shouye',
        meta: {
            title: '首页'
        }
    }, {
        path: '/shouye',
        component: shouye,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/classification',
        component: classification,
        meta: {
            title: '类目'
        }
    },
    {
        path: '/shopping',
        component: shopping,
        meta: {
            title: '购物车'
        },
    },
    {
        path: '/me',
        component: me,
        meta: {
            title: '我的'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router