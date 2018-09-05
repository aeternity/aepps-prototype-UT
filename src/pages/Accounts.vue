<template>
  <div class="wallet">
    <Wallet :color="false">
      <template slot="header">
        <Header>
          <template slot="nav">
            <router-link to="">
              <img src="@/assets/icn/list.svg" alt="">
            </router-link>
            <router-link to="">
              <img src="@/assets/icn/help.svg" alt="">
            </router-link>
          </template>
        </Header>
      </template>
      <template slot="title">
        <h1>
          <span>
            ↪
          </span>
        </h1>
        <h1>
          <span>
            Activate the account
          </span>
          that you want to use
          by swiping
        </h1>
      </template>
      <template slot="swipers">
        <swiper :options="swipeOptions" ref="swiper" @slideChange="onSwipe">
            <swiper-slide v-for="account in accounts" :key=account.id>
              <cardFront :account="account"></cardFront>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </template>
      <template slot="content">
        <div class="item">
          <h3>
            .aet Domains
          </h3>
          <ae-button type="dramatic" size="small">
            <ae-icon slot="icon" name="plus" type="dramatic" invert/>
          </ae-button>
        </div>
        <div class="item">
          <h3>
            Three Words Identifier
          </h3>
          <p>
            {{activeAccAddress.words}}
          </p>
        </div>
      </template>
    </Wallet>
    <Navigation />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import CardFront from '@/components/cardFront'
import CardBack from '@/components/cardBack'
import { AeIcon, AeButton } from '@aeternity/aepp-components'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Wallet from '@/layouts/wallet.vue'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    Header,
    Navigation,
    CardFront,
    CardBack,
    AeIcon,
    swiper,
    'swiper-slide': swiperSlide,
    Wallet,
    AeButton
  },
  data () {
    return {
      swipeOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
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
    },
    swiperChange () {
      return this.$refs.swiper.swiper.activeIndex
    }
  },
  methods: {
    onSwipe: function () {
      this.$store.dispatch('setActiveAccount', this.$refs.swiper.swiper.activeIndex)
    }
  },
  mounted () {
    this.$refs.swiper.swiper.slideTo(this.activeAccAddress.id)
  }
}
</script>
<style lang="scss" scoped>
  .wallet {
    h1 {
      margin: 0;
    }
    background-color: #edf3f7;
    height: 100vh;
    .half:nth-child(2) {
      h3 {
        text-align: left;
        font-size: 13px;
        font-weight: 500;
        color: #76818c;
      }
      .ae-button {
        display: flex;
      }
      p {
        font-family: 'aeternity mono';
        text-align: left;
        font-size: 15px;
      }
    }
  }
.container {
  width: 85vw;
  margin: 0 auto;
}

</style>
<style lang="scss">
.swiper-container {
  z-index:0;
  overflow: visible;
  .swiper-slide {
    width: 80%;
    margin: 0 auto;
  }
  .swiper-pagination-bullets {
    bottom: -5vh;
    .swiper-pagination-bullet-active {
      background: #ff0d6a;
    }
  }
}
</style>
<style>
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;
  }
</style>
