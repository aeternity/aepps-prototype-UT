import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    accounts: [
      {
        name: 'Main Account',
        address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        words: 'alive fussy bluetonguelizard',
        balance: 24.65,
        unit: 'AE',
        prior: 'main'
      },
      {
        name: 'Daily Account',
        address: 'ak$fcKBrUPSKhSQ8RcgHP1eG2CCeMjQffK5K21lIun3GzAuN13vhA',
        words: 'sport bitbucket tiger',
        balance: 20.65,
        unit: 'AE',
        prior: 'daily'
      },
      {
        name: 'Trading Account',
        address: 'ak$G2CCeMjUPSKhSQ8RcgHP1eK21lIun3GzAQffK5hAfcKBruN13v',
        words: 'dead edge seal',
        balance: 40.65,
        unit: 'AE',
        prior: 'trading'
      }
    ],
    account: {
          name: 'Daily',
          address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
          balance: 0,
          words: 'test test test',
          unit: 'AE'
    },
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
    ]
  },
  getters:{
    accounts(state){
      return state.accounts;
    },
    account(state){
      return state.account;
    },
    bookmarks(state){
      return state.bookmarks;
    }
  }
});