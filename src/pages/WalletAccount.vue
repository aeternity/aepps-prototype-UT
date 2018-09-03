<template>
  <div class="wallet">
    <div class="container">
      <Header>
        <template slot="nav">
          <div>
            +
          </div>
          <div>
            ?
          </div>
        </template>
      </Header>
      <div class="item">
        <div class="row">
          <div class="icn">
            ↪
          </div>
          <h1 class="text">
            <span class="text__secondary">Activate the account</span> that you want to use by swiping
          </h1>
        </div>
      </div>
      <div class="item">
        <div class="swipe__container">
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
      <div class="item">
        <div class="bottom">
          <div class="row">
            <div class="content">
              <h3>
                Get your name.aet
              </h3>
              <ae-icon name="chevron" />
            </div>
          </div>
          <div class="row">
            <div class="content">
              <h5>Three Words Identifier</h5>
              <p>alive fussy bluetonguelizard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
<Navigation>

</Navigation>
  </div>
</template>
<script>
import Header from '@/components/HeaderS'
import Navigation from '@/components/Navigation'
import CardFront from '@/components/cardFrontS'
import CardBack from '@/components/cardBack'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { AeIcon } from '@aeternity/aepp-components'
export default {
  components: {
    Header,
    Navigation,
    CardFront,
    CardBack,
    swiper,
    'swiper-slide': swiperSlide,
    AeIcon
  },
  computed: {
    accounts () {
      return this.$store.getters.accounts
    },
    activeAccAddress () {
      return this.$store.getters.activeAcc
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
  }
}
</script>
<style lang="scss" scoped>
  .wallet {
    background-color: #edf3f7;
    height: 100vh;
    .container{
      .item {
        .row:first-child {
          width: 80%;
          margin-bottom: 1em;
        }
        .row {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          .content {
            flex: 3;
            text-align: left;
            }
          .icn {
            width: 17px;
            height: 24px;
            object-fit: contain;
            font-size: 17px;
            font-weight: bold;
            line-height: 1.41;
            letter-spacing: normal;
            color: #ff0070;
          }
          .text {
            width: 90%;
            font-size: 23px;
            font-weight: 500;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: #203040;
            text-align: left;
            margin:0;
            .text__secondary {
              color: #ff0070;
            }
          }
        }
        .bottom {
          .row {
            margin: 0 auto;
            width:100%;
            align-items: center;
            border-top: 1px solid black;
          }
        }
        .row:first-child {
          .content {
            display: flex;
            justify-content: space-between;
            }
          }
         .swipe__container {
            height: 180px;
            margin-bottom: 10vh;
          }
      }
    }
  }
.ae-icon {
height: unset;
}
.container {
  width: 85vw;
  margin: 0 auto;
}

.swiper-container {
  z-index:0;
  .swiper-pagination-bullets {
    bottom: -5vh;
    .swiper-pagination-bullet-active {
      background: #ff0d6a;
    }
  }
}
</style>
