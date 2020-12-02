import Vue from 'vue'
import VueRouter from 'vue-router'
import TableAbonents from '../views/TableAbonents.vue'
import Articles from '@/views/Articles'
import Abonents from '@/views/Abonents'
import EditAbonent from '@/views/EditAbonent'

Vue.use(VueRouter)

const routes = [{
    path: '/edit',
    name: 'EditAbonent',
    component: EditAbonent
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  // {
  //   path: '/abonent',
  //   name: 'Abonents',
  //   component: Abonents
  // },

  {
    path: '/abonents',
    name: 'Home',
    component: TableAbonents
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import ('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLogged) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router