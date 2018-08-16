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
      </template>
    </Header>
    <div class="top">
      <div class="container">
        <swiper :options="swipeOptions">
          <swiper-slide>
            <cardFront :account="activeAccAddress"></cardFront>
          </swiper-slide>
          <swiper-slide>
            <cardBack :account="activeAccAddress"></cardBack>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="container">
      <div class="rectangle">
        +
      </div>
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
            <Radio name="account" @change="activeAcc(index)"></Radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Radio from '@/components/Radio'
import CardFront from '@/components/cardFront'
import CardBack from '@/components/cardBack'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { AeIdentityAvatar } from '@aeternity/aepp-components'
export default {
  components: {
    Radio,
    Header,
    CardFront,
    CardBack,
    swiper,
    'swiper-slide': swiperSlide,
    AeIdentityAvatar
  },
  data () {
    return {
      balance: 0,
      activeId: {
        name: 'Main Account',
        address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
        words: 'alive fussy bluetonguelizard',
        balance: 24.65,
        unit: 'AE',
        prior: 'main'
      },
      swipeOptions: {
        effect: 'flip',
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    accounts () {
      return this.$store.getters.accounts
    },
    activeAccAddress () {
      return this.$store.getters.activeAcc
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
    },
    activeAcc: function (i = 0) {
      let acc = this.accounts[i]
      this.$store.dispatch('setActiveAccount', acc.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  height: 180px;
  background-color: #edf3f7;
  margin-bottom: 10vh;
}
.container {
  width: 85vw;
  margin: 0 auto;
}
.row {
  display: flex;
  align-items: center;
  border-top: 1px solid #edf3f7;
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
.rectangle {
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ff0d6a;
  padding: 10px;
  width: 30px;
  height: 30px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 50%;
  position: fixed;
  top: 42vh;
  right: 5vw;
}
</style>
<style lang="scss">
.swiper-container {
  .swiper-pagination-bullets {
    bottom: -5vh;
    .swiper-pagination-bullet-active {
      background: #ff0d6a;
    }
  }
}
</style>
