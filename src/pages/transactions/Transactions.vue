<template>
  <div class="transactions">
    <Header>
      <template slot="page-name">
        {{this.$route.name}}
      </template>
      <template slot="nav">
        <router-link to="settings">
          <img src="@/assets/icn/settings.svg" alt="">
        </router-link>
        <router-link to="/">
          <img src="@/assets/icn/list.svg" alt="">
        </router-link>
        <router-link class="avatar" to="accounts">
          <ae-identity-avatar address='ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e'>
          </ae-identity-avatar>
        </router-link>
      </template>
    </Header>
    <div class="filter-nav">
      <div class="container">
        <div class="item">
          <p class="title">
            All
          </p>
        </div>
        <div class="item">
          <p class="title">
            Incoming
          </p>
        </div>
        <div class="item">
          <p class="title">
            Outgoing
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="trx-list">
        <tx :tx="tx" v-for="tx in txs" :key="tx"></tx>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { AeIdentityAvatar } from '@aeternity/aepp-components'
import tx from '@/components/tx'
export default {
  components: {
    Header,
    AeIdentityAvatar,
    tx
  },
  computed: {
    txs () {
      return this.$store.getters.txs
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  display: flex;
  align-items: center;
  div {
    width: 24px;
    height: 24px;
  }
}
.container {
  width: 80vw;
  margin: 0 auto;
}
.transactions {
  .filter-nav {
    box-shadow: 0 1px 3px 0 #c3c3c3;
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
  .trx-list {
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

