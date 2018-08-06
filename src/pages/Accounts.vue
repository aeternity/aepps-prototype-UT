<template>
  <div class="accounts">
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
    <div class="top">
      <div class="container">
        <swipe class="swipe" :auto="0" :continuous="false" :showIndicators="true"  ref="swipe">
          <swipe-item>
            <cardFront></cardFront>
          </swipe-item>
          <swipe-item>
            <cardBack></cardBack>
          </swipe-item>
        </swipe>
        <!-- <div class="nav">
          <span @click="prev">
            prev
          </span>
          <span @click="next">
            next
          </span>
        </div> -->
      </div>
    </div>
    <div class="container">
      <div class="bottom">
        <div class="row">
          <div class="icn">
            ↪
          </div>
          <div class="content">
            <h3>
              Total Balance
            </h3>
            <p>
              120 AE
            </p>
          </div>
        </div>
        <div class="row" v-for="(account, index) in accounts" :key="index">
          <div class="logo" @click="accountIn(account)">
            <ae-identity-avatar :address="account.address"></ae-identity-avatar>
          </div>
          <div class="content">
            <h3>
              {{account.name}}
            </h3>
            <p>
              {{account.balance}}
            </p>
          </div>
          <div class="radio">
            <Radio name="account"></Radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AeIdentityAvatar } from '@aeternity/aepp-components'
import Header from '@/components/Header'

import Radio from '@/components/Radio'
import CardFront from '@/components/cardFront'
import CardBack from '@/components/cardBack'
import { Swipe, SwipeItem } from 'vue-swipe'
require('vue-swipe/dist/vue-swipe.css')

export default {
  components: {
    Radio,
    AeIdentityAvatar,
    Header,
    CardFront,
    CardBack,
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  data () {
    return {
      balance: 0,
      accounts: [
        {
          name: 'Main Account',
          address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
          words: 'alive fussy bluetonguelizard',
          balance: 24.65,
          unit: 'AE'
        },
        {
          name: 'Daily Account',
          address: 'ak$fcKBrUPSKhSQ8RcgHP1eG2CCeMjQffK5K21lIun3GzAuN13vhA',
          words: 'sport bitbucket tiger',
          balance: 20.65,
          unit: 'AE'
        },
        {
          name: 'Trading Account',
          address: 'ak$G2CCeMjUPSKhSQ8RcgHP1eK21lIun3GzAQffK5hAfcKBruN13v',
          words: 'dead edge seal',
          balance: 40.65,
          unit: 'AE'
        }
      ],
      swipeOptions: {
        auto: 0
      }
    }
  },
  methods: {
    prev: function () {
      this.$refs.swipe.goto(0)
    },
    next: function () {
      this.$refs.swipe.goto(1)
    },
    accountIn: function (arg) {
      this.$router.push({ name: 'account', params: {account: arg} })
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
    height: 180px;
    background-color: #edf3f7;
    margin-bottom: 10vh;
    .mint-swipe,
    .mint-swipe-items-wrap {
      overflow: visible !important;
    }
  }
.container {
  width: 85vw;
  margin: 0 auto;
  .swipe {
    height: 200px;
  }
  .mint-swipe .mint-swipe-indicators {
    bottom: -10px !important;
  }
}
.row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #edf3f7;
    .icn {
      width: 32px;
      height: 32px;
    }
    .logo > div {
      width: 32px;
      height: 32px;
    }
    .content {
      text-indent: 10px;
      padding: 16px 0;
      flex:3;
      text-align:left;
      h3,p {
        margin: 0;
      }
      p {
        font-size: 13px;
      }
    }
    .radio {
      flex:1;
      text-align: right;
    }
  }
  .avatar {
        border-radius: 50%;
        display: flex;
        align-items: center;
        div {
          width: 24px;
          height: 24px;
        }
  }
  .mint-swipe-indicators {
       transform: transalteY(4vh) !important;
      }
</style>
<style lang="scss">
.swipe {
  .mint-swipe-indicators {
    bottom: -29px;
    .mint-swipe-indicator.is-active {
      background: red;
    }
  }
}
</style>

