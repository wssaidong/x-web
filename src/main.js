import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import Meta from 'vue-meta'

import 'element-ui/lib/theme-chalk/index.css';

import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件

import './css/common.css'
import './less/common.less'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueClipboard)
Vue.use(Meta)

const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }

    // 统计代码
    if (path) {
        console.log("_hmt",path)
        _hmt.push(['_trackPageview', '/#' + path]);
    }

    next()
})

new Vue({ store, router }).$mount('#app')