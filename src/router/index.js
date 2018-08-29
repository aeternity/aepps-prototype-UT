import Vue from 'vue'
import Router from 'vue-router'
import Favorites from '@/pages/Favorites'
import Accounts from '@/pages/Accounts'
import Account from '@/pages/Account'
import Settings from '@/pages/settings/Settings'
import SettingsNetwork from '@/pages/settings/SettingsNetwork'
import SettingsRemoteCon from '@/pages/settings/SettingsRemoteCon'
import SettingsLang from '@/pages/settings/SettingsLang'
import Transactions from '@/pages/transactions/Transactions'
import TransactionsFilter from '@/pages/transactions/TransactionsFilter'
import TransferAccount from '@/pages/transfer/Transfer-account'
import TransferAmount from '@/pages/transfer/Transfer-amount'
import TransferConfirm from '@/pages/transfer/Transfer-confirm'
import Card from '@/components/cardFront'
import CardB from '@/components/cardBack'
import WalletAcc from '@/pages/WalletAccount'
import WalletFav from '@/pages/WalletFavourites'
import WalletAccounts from '@/pages/WalletAccounts'
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
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletAcc
    },
    {
      path: '/walletFav',
      name: 'Browse Aepps',
      component: WalletFav
    },
    {
      path: '/walletAccounts',
      name: 'Accounts',
      component: WalletAccounts
    }
  ]
})
