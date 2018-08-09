import Vue from 'vue'
import Router from 'vue-router'
import Favorites from '@/pages/Favorites'
import Accounts from '@/pages/Accounts'
import Account from '@/pages/Account'
import Settings from '@/pages/settings/Settings'
import SettingsNetwork from '@/pages/settings/SettingsNetwork'
import SettingsRemoteCon from '@/pages/settings/SettingsRemoteCon'
import SettingsLang from '@/pages/settings/SettingsLang'

import Card from '@/components/cardFront'
import CardB from '@/components/cardBack'
import Modal from '@/components/Modal'

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
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/remote-connections',
      name: 'remote-connections',
      component: SettingsRemoteCon
    },
    {
      path: '/language',
      name: 'language',
      component: SettingsLang
    },
    {
      path: '/network',
      name: 'network',
      component: SettingsNetwork
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
    },
    {
      path: '/newAccount',
      name: 'modal',
      component: Modal
    }
  ]
})
