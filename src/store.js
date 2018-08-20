import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    accounts: [
      {
        name: 'Main Account',
        address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        words: 'alive fussy bluetonguelizard',
        balance: 24.65,
        unit: 'AE',
        prior: 'main',
        id: 0,
        active: true
      },
      {
        name: 'Daily Account',
        address: 'ak$fcKBrUPSKhSQ8RcgHP1eG2CCeMjQffK5K21lIun3GzAuN13vhA',
        words: 'sport bitbucket tiger',
        balance: 20.65,
        unit: 'AE',
        prior: 'daily',
        id: 1,
        active: false
      },
      {
        name: 'Trading Account',
        address: 'ak$G2CCeMjUPSKhSQ8RcgHP1eK21lIun3GzAQffK5hAfcKBruN13v',
        words: 'dead edge seal',
        balance: 40.65,
        unit: 'AE',
        prior: 'trading',
        id: 2,
        active: false
      }
    ],
    bookmarks: [
      {
        iconPath: 'expandList.svg',
        name: 'Transfer',
        url: 'transfer.aepps.com',
        drop: false
      },
      {
        iconPath: '',
        name: 'Transactions',
        url: 'transactions.aepps.com',
        drop: false
      },
      {
        iconPath: '',
        name: 'Contacts',
        url: 'contacts.aepps.com',
        drop: false
      },
      {
        iconPath: '',
        name: 'Messages',
        url: 'messages.aepps.com',
        drop: false
      },
      {
        iconPath: '',
        name: 'Registrar',
        url: 'registrar.aepps.com',
        drop: false
      }
    ],
    txs: [
      {
        address: 'G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        type: 'in',
        value: '90.00',
        unit: 'AE',
        status: 'pending'
      },
      {
        address: 'G2CCK21lIun3GzAuN13vhAfcKBrUPSeMjQffK5KhSQ8RcgHP1e',
        type: 'out',
        value: '60.00',
        unit: 'AE',
        status: 'pending'
      },
      {
        address: 'G2CCK21lAuN13vhAfcKBrUPSeMjQffK5KhSQ8RcgHP1eIun3Gz',
        type: 'in',
        value: '10.00',
        unit: 'AE',
        status: '2018-10-13'
      },
      {
        address: 'G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        type: 'in',
        value: '55.00',
        unit: 'AE',
        status: 'pending'
      },
      {
        address: 'G2Cun3GzACK21lIuN13vBrUPSeMhAfcKjQffK5KhSQ8RcgHP1e',
        type: 'out',
        value: '20.00',
        unit: 'AE',
        status: 'pending'
      },
      {
        address: 'G2CCK2hSQ8Rcg1lAuN13vhAfcKBrUPSeMjQffK5KHP1eIun3Gz',
        type: 'in',
        value: '10.00',
        unit: 'AE',
        status: '2018-10-13'
      },
      {
        address: 'G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        type: 'in',
        value: '55.00',
        unit: 'AE',
        status: 'pending'
      },
      {
        address: 'G2Cun3GzACK21lIuN13vBrUPSeMhAfcKjQffK5KhSQ8RcgHP1e',
        type: 'out',
        value: '20.00',
        unit: 'AE',
        status: 'pending'
      },
      {
        address: 'G2CCK2hSQ8Rcg1lAuN13vhAfcKBrUPSeMjQffK5KHP1eIun3Gz',
        type: 'in',
        value: '10.00',
        unit: 'AE',
        status: '2018-10-13'
      },
      {
        address: 'G2Cun3GzACK21lIuN13vBrUPSeMhAfcKjQffK5KhSQ8RcgHP1e',
        type: 'out',
        value: '20.00',
        unit: 'AE',
        status: 'pending'
      }, {
        address: 'G2CCK2hSQ8Rcg1lAuN13vhAfcKBrUPSeMjQffK5KHP1eIun3Gz',
        type: 'in',
        value: '10.00',
        unit: 'AE',
        status: '2018-10-13'
      },
      {
        address: 'G2Cun3GzACK21lIuN1PSeMhA3vBrUfcKjQffK5KhSQ8RcgHP1e',
        type: 'out',
        value: '20.00',
        unit: 'AE',
        status: 'pending'
      }, {
        address: 'G2SQ8RCCK2hcg1lAuN13vhAfcKBrUPSeeIun3MjQffK5KHP1Gz',
        type: 'in',
        value: '10.00',
        unit: 'AE',
        status: '2018-10-13'
      }
    ],
    recipientAddress: null,
    recipientAmount: 0.00
  },
  getters: {
    accounts (state) {
      return state.accounts
    },
    bookmarks (state) {
      return state.bookmarks
    },
    txs (state) {
      return state.txs
    },
    activeAcc (state) {
      return state.accounts.find(acc => { return acc.active === true })
    },
    recipientAddress (state) {
      return state.recipientAddress
    },
    recipientAmount (state) {
      return state.recipientAmount
    }
  },
  mutations: {
    Rename_Acc (state, {id, name}) {
      state.accounts.find(account => {
        return account.id === id
      }).name = name
    },
    getUrl (state, bookmarkUrl) {
      let bookmark = state.bookmarks.find(bookmark => {
        return bookmark.urlAddress === bookmarkUrl
      })
      console.log(bookmark)
      this.isBrowseEnable = true
    },
    disableActiveAccounts (state) {
      return state.accounts.map(acc => { acc.active = false })
    },
    activateAcc (state, id) {
      console.log(id)
      let active = state.accounts.find(acc => {
        return acc.id === id
      })
      active.active = true
    },
    setRecipientAddress (state, payroll) {
      state.recipientAddress = payroll
    },
    setRecipientAmount (state, payroll) {
      state.recipientAmount = payroll
    }
  },
  actions: {
    renameAcc: (context, {id, name}) => {
      context.commit('Rename_Acc', {id, name})
    },
    setActiveAccount: (context, id) => {
      context.commit('disableActiveAccounts')
      context.commit('activateAcc', id)
    }
  }
})
