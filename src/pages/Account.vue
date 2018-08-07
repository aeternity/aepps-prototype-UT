<template>
  <div class="account">
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
          <ae-identity-avatar :address='this.$route.params.account.address'>
          </ae-identity-avatar>
        </router-link>
      </template>
    </Header>
    <div class="top">
      <div class="container">
        <swipe class="swipe" :auto="0" :continuous="false" :showIndicators="true"  ref="swipe">
          <swipe-item>
            <cardFront :account="this.$route.params.account"></cardFront>
          </swipe-item>
          <swipe-item>
            <cardBack :account="this.$route.params.account"></cardBack>
          </swipe-item>
        </swipe>
      </div>
    </div>
    <div class="container">
      <div class="bottom">
        <div class="row">
          <h3>
            account key
          </h3>
          <div class="words">
            <span v-for="chunk in chunkAddress" :key="chunk">
              {{chunk}}
            </span>
          </div>
        </div>
        <div class="row">
          <h3>
            Three Words Identifier
          </h3>
          <p>
            {{this.$route.params.account.words}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { AeIdentityAvatar } from '@aeternity/aepp-components'
import { Swipe, SwipeItem } from 'vue-swipe'
import cardFront from '@/components/cardFront'
import cardBack from '@/components/cardBack'
require('vue-swipe/dist/vue-swipe.css')

export default {
  components: {
    Header,
    AeIdentityAvatar,
    'swipe': Swipe,
    'swipe-item': SwipeItem,
    cardFront,
    cardBack
  },
  props: {
    account: {
      type: Object,
      default: function () {
        return {
          name: 'Daily',
          address: 'G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
          balance: 0,
          words: 'test test test',
          unit: 'AE'
        }
      }
    }
  },
  methods: {
    prev: function () {
      this.$refs.swipe.goto(0)
    },
    next: function () {
      this.$refs.swipe.goto(1)
    }
  },
  computed: {
    chunkAddress () {
      return this.$route.params.account.address.match(/.{1,3}/g)
    }
  }
}
</script>

<style lang="scss" scoped>
.account {
  font-size: 17px;
  .top {
    height: 30vh;
    background-color: #edf3f7;
    margin-bottom: 10vh;
    .swipe {
      height: 200px;
    }
  }
  .container {
    width: 85%;
    margin: 0 auto;
    .row {
      text-align: left;
      border-top: 1px solid #edf3f7;
      margin: 20px 0;
      padding: 10px 0;
      h3 {
        font-size: 13px;
        color: #76818c;
        text-transform: capitalize;
      }
      .words{
        display: grid;
        grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
        font-family: 'aeternity mono';
        color: #203040;
        letter-spacing: 1.8px;
      }
    }
    .row:nth-child(2) {
      p {
        font-family: 'aeternity mono';
        color: #203040;
        letter-spacing: 1.8px;
      }
    }
  }
  .avatar div {
    width: 24px;
    height: 24px;
  }
}
</style>
<style lang="scss">
.swipe {
  overflow: visible;
  .mint-swipe-indicators {
    bottom: -29px;
    .mint-swipe-indicator.is-active {
      background: #ff0d6a;
      opacity: 1;
    }
  }
}
</style>
