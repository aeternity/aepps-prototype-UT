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
      </template>
    </Header>
    <div class="top">
      <div class="container">
        <swiper :options="swipeOptions">
          <swiper-slide>
            <cardFront :account="this.$route.params.account"></cardFront>
          </swiper-slide>
          <swiper-slide>
            <cardBack :account="this.$route.params.account"></cardBack>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
import cardFront from '@/components/cardFront'
import cardBack from '@/components/cardBack'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    Header,
    AeIdentityAvatar,
    swiper,
    'swiper-slide': swiperSlide,
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
  data () {
    return {
      swipeOptions: {
        effect: 'flip',
        pagination: {
          el: '.swiper-pagination'
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
