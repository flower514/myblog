import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Article from '@/components/article'
import Note from '@/components/note'
import About from '@/components/about'
import Detailed from '@/components/detailed'

Vue.use(Router)

export default new Router({
  routes: [
    //根路径
    {
      path: '/',
      redirect: '/index'
    },
    //首页
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    //文章
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    //笔记
    {
      path: '/note',
      name: 'note',
      component: Note
    },
    //关于
    {
      path: '/about',
      name: 'about',
      component: About
    },
    //文章内容
    {
      path: '/article/detailed/:data',
      name: 'detailed',
      component: Detailed
    }
  ]
})
