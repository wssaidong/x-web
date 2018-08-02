import App from '../app'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/pic', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/pic/'], resolve)
            },
            {
                path: '/flyfile', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/flyfile'], resolve)
            },
            {
                path: '/flyfile/upload', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/flyfile/uploadFile'], resolve)
            },

            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]