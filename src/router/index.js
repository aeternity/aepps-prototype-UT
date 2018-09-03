import Vue from 'vue'
import Router from 'vue-router'
import Favorites from '@/pages/Favorites'
import Accounts from '@/pages/Accounts'
import Account from '@/pages/Account'
import Card from '@/components/cardFront'
import CardB from '@/components/cardBack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/cardB',
      name: 'cardB',
      component: CardB
    },
    {
      path: '/',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: Accounts
    },
    {
      path: '/account/:account',
      name: 'account',
      component: Account,
      props: true
    }
  ]
})
