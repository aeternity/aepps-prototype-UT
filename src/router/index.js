import Vue from 'vue'
import Router from 'vue-router'
import Favorites from '@/pages/Favorites'
import Accounts from '@/pages/Accounts'
import Account from '@/pages/Account'
import Card from '@/components/cardFront'
import CardB from '@/components/cardBack'
import Settings from '@/pages/settings/Settings'
import SettingsNetwork from '@/pages/settings/SettingsNetwork'
import SettingsRemoteCon from '@/pages/settings/SettingsRemoteCon'
import SettingsLang from '@/pages/settings/SettingsLang'
import Transactions from '@/pages/transactions/Transactions'
import TransactionsFilter from '@/pages/transactions/TransactionsFilter'
import TransferAccount from '@/pages/transfer/Transfer-account'
import TransferAmount from '@/pages/transfer/Transfer-amount'
import TransferConfirm from '@/pages/transfer/Transfer-confirm'

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
      name: 'Browse Aepps',
      component: Favorites
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: Accounts
    },
    {
      path: '/account',
      name: 'account',
      component: Account
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
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/transactions-filter',
      name: 'Filter and Sort',
      component: TransactionsFilter
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: TransferAccount
    },
    {
      path: '/transfer-amount',
      name: 'transfer-amount',
      component: TransferAmount
    },
    {
      path: '/transfer-confirm',
      name: 'transfer-confirm',
      component: TransferConfirm
    }
  ]
})
