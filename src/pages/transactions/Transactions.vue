<template>
  <div class="transactions">
    <div class="fixed">
      <Header>
        <template slot="page-name">
          <ae-identity-avatar :address="account.address"></ae-identity-avatar>
          <div class="item">{{account.name}}</div>
        </template>
        <template slot="page-content">
          <div class="item">{{account.balance}} {{account.unit}}</div>
        </template>
        <template slot="nav">
          <div class="icon">
            <img src="@/assets/icn/questionMark-light.png" alt="question mark">
          </div>
        </template>
      </Header>
      <div class="row">
        <div class="item">
          Recent Transactions
        </div>
        <div class="link">
          <router-link to="transactions-filter">
            <img src="@/assets/icn/filter.svg" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="trx-list">
        <tx :tx="tx" v-for="(tx, index) in txs" :key="index"></tx>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/Header'
import { AeIdentityAvatar } from '@aeternity/aepp-components'
import tx from '@/components/tx'
import Navigation from '@/components/Navigation'
export default {
  components: {
    Header,
    AeIdentityAvatar,
    tx,
    Navigation
  },
  data () {
    return {
      selectedType: 'all',
      account: {
        name: 'Main Account',
        address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        words: 'alive fussy bluetonguelizard',
        balance: '20.65',
        unit: 'AE',
        prior: 'main',
        id: 0,
        active: true
      }
    }
  },
  computed: {
    txs () {
      if (this.selectedType === 'all') {
        return this.$store.getters.txs
      } else {
        return this.$store.getters.txs.filter(tx => tx.type === this.selectedType)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
  margin: 0 auto;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
}
.transactions {
  .header {
    display: flex;
    justify-content: flex-end;
    background-color: #ff0d6a;
    .avatar {
      width: 32px;
      height: 32px;
      box-shadow: 0 0 8px 0 rgba(0, 33, 87, 0.15);
      margin-right: 5px;
    }
    .item {
      font-size: 17px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.41;
      letter-spacing: normal;
      color: #ffffff;
    }
  }
  .filter-nav {
    width: 100vw;
    left: 0;
    box-shadow: 0 1px 3px 0 #c3c3c3;
    background: #fff;
    font-weight: 500;
    .container{
      width: 80vw;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      .item {
        flex: 1;
        text-align: center;
      }
    }
  }
  .row {
    display: flex;
    align-items: center;
    height: 3em;
    justify-content: space-around;
    background-color: #fff;
    .item {
      font-size: 15px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: normal;
      color: #203040;
    }
  }
  .filter-nav .item.active {
    box-shadow: inset 0px -2px 0 0 #ff0d6a;
  }
  .trx-list {
    margin-top: 17vh;
    .tx {
      padding: 17px 0;
      border-bottom: 2px solid #edf3f7;
    }
    .tx:last-child {
      border-bottom: 0;
    }
  }
}
</style>
