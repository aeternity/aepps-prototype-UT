<template>
  <div class="transactions">
    <div class="fixed">
      <Header>
      <template slot="page-name">
        {{this.$route.name}}
      </template>
      <template slot="nav">
        <router-link to="transactions-filter">
          <img src="@/assets/icn/filter.svg" alt="">
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
        <div class="item" :class="{ active: selectedType === 'all'}">
          <p class="title" @click="selectedType = 'all'">
            All
          </p>
        </div>
        <div class="item" :class="{ active: selectedType === 'in'}">
          <p class="title" @click="selectedType = 'in'">
            Incoming
          </p>
        </div>
        <div class="item" :class="{ active: selectedType === 'out'}">
          <p class="title" @click="selectedType = 'out'">
            Outgoing
          </p>
        </div>
      </div>
    </div>
    </div>  
    <div class="container">
      <div class="trx-list">
        <tx :tx="tx" v-for="(tx, index) in txs" :key="index"></tx>
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
  data() {
    return {
      selectedType: 'all'
    }
  },
  computed: {
    txs () {
      console.log(this.selectedType)
      if(this.selectedType === 'all') {
        return this.$store.getters.txs
      } else {
        return this.$store.getters.txs
        .filter(tx => tx.type === this.selectedType)  
      }
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
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
}
.transactions {
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

