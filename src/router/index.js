import Vue from 'vue'
import Router from 'vue-router'
import messagelist from '@/components/messagelist'
import addresslist from '@/components/addresslist'
import find from '@/components/find'
import my from '@/components/my'
import moments from '@/components/moments'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'messagelist',
      component: messagelist,
      meta: {
        navShow: true, //是否显示底部导航栏
        topShow: true, //是否显示顶部标题栏
        title: '微信',
      }
    }, {
      path: '/addresslist',
      name: 'addresslist',
      component: addresslist,
      meta: {
        navShow: true, //是否显示底部导航栏
        topShow: true, //是否显示顶部标题栏
        title: '通讯录',
      }
    }, {
      path: '/find',
      name: 'find',
      component: find,
      children: [
        {
          path: 'moments',
          name: 'moments',
          component: moments
        }
      ],
      meta: {
        navShow: true, //是否显示底部导航栏
        topShow: true, //是否显示顶部标题栏
        title: '发现',
      }
    }, {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        navShow: true, //是否显示底部导航栏
        topShow: false, //是否显示顶部标题栏
        title: '我',
      }
    }, {
      path: '/chat',
      name: 'chat',
      component: chat,
      meta: {
        navShow: false, //是否显示底部导航栏
        topShow: false, //是否显示顶部标题栏
        title: '我',
      }
    }
  ]
})
