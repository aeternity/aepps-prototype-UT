<template>
  <div class="walletAccounts">
    <Wallet color=true>
      <template slot="header">
        <Header reverse=true>
          <template slot="nav">
            <router-link to="" v-if="!scan">
              <img src="@/assets/icn/help-light.svg" alt="">
            </router-link>
            <div v-else  @click="scan = false">
              <ae-icon name="close" type="dramatic" invert />
            </div>
          </template>
        </Header>
      </template>
      <template slot="title">
        <h1>
          <span>
            ↪
          </span>
        </h1>
        <h1 v-if="!scan">
          Send and recive
          <strong>
            æternity tokens
          </strong>
          with
          your active account
        </h1>
        <h1 v-else>
          Let others
          <img :src="require('emoji-datasource-apple/img/apple/64/1f933.png')" alt="">
          scan
          the address of your <br>
          <ae-identity-avatar :address="account.address" />
          <strong>
            {{account.name}}
          </strong>
        </h1>
      </template>
      <template slot="swipers">
        <cardFront v-if="!scan" :account="account" />
        <cardBack v-else :account="account" />
      </template>
      <template slot="content" v-if="!scan">
        <div class="item">
          <div class="logo">
            <img :src="require('emoji-datasource-apple/img/apple/64/1f4b8.png')" alt="">
          </div>
          <div class="content">
            <h3>
              Send
            </h3>
            <p>
              Transfer founds
            </p>
          </div>
          <div class="action">
            <router-link to="/transfer">
              <ae-icon name="chevron" />
            </router-link>
          </div>
        </div>
        <div class="item">
          <div class="logo">
            <img :src="require('emoji-datasource-apple/img/apple/64/1f468-200d-1f527.png')" alt="">
          </div>
          <div class="content">
            <h3>
              Recive
            </h3>
            <p>
              Share your address
            </p>
          </div>
          <div class="action">
            <ae-icon name="chevron" />
          </div>
        </div>
        <div class="item">
          <div class="logo">
            <img :src="require('emoji-datasource-apple/img/apple/64/1f933.png')" alt="">
          </div>
          <div class="content">
            <h3>
              Scan
            </h3>
            <p>
              Prefill by scanning a QR code
            </p>
          </div>
          <div class="action" @click="scan = true">
            <ae-icon name="chevron" />
          </div>
        </div>
      </template>
      <template slot="content" v-else>
        <div class="item">
          <div class="logo">
            <img :src="require('emoji-datasource-apple/img/apple/64/270d-fe0f.png')" alt="">
          </div>
          <div class="content">
            <h3>
              Copy address
            </h3>
            <p>
              Save to clipboard
            </p>
          </div>
          <div class="action" @click="doCopy(account.address)">
            <ae-icon name="chevron" />
          </div>
        </div>
        <div class="item">
          <div class="logo">
            <img :src="require('emoji-datasource-apple/img/apple/64/2709-fe0f.png')" alt="">
          </div>
          <div class="content">
            <h3>
              Share address
            </h3>
            <p>
              Send to your contacts
            </p>
          </div>
          <div class="action">
            <ae-icon name="chevron" />
          </div>
        </div>
        <div class="item">
          <div class="logo">
            <img :src="require('emoji-datasource-apple/img/apple/64/1f4ab.png')" alt="">
          </div>
          <div class="content">
            <h3>
              Transfer request
            </h3>
            <p>
              Request with a specific amount
            </p>
          </div>
          <div class="action" @click="request = true">
            <ae-icon name="chevron" />
          </div>
        </div>
      </template>
    </Wallet>
    <Request class="request" v-if="request" />
    <Navigation />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import cardFront from '@/components/cardFront'
import cardBack from '@/components/cardBack'
import Wallet from '@/layouts/wallet'
import Header from '@/components/Header'
import Request from '@/components/Request'
import {AeIdentityAvatar, AeIcon} from '@aeternity/aepp-components'
export default {
  components: {
    Navigation,
    AeIdentityAvatar,
    AeIcon,
    Wallet,
    Header,
    cardFront,
    cardBack,
    Request
  },
  data () {
    return {
      scan: false,
      request: false
    }
  },
  computed: {
    account: function () {
      return this.$store.getters.activeAcc
    }
  },
  methods: {
    doCopy: function (text) {
      this.$copyText(text).then(function (e) {
        console.log(e.text)
      }, function (e) {
        console.log(e)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.walletAccounts {
  .container .item {
    padding: 17px 0;
    border-bottom: 2px solid #d3dce6;
    display: flex;
    align-items: center;
    text-align: left;
     div {
       flex:1;
       line-height: 1.33em;
       h3,p {
         margin: 0;
       }
       h3 {
         font-size: 15px;
       }
       p{
         font-size: 13px;
       }
    }
    div:nth-child(1) {
      flex-grow: .5;
    }
    div:nth-child(2) {
      flex:2;
    }
    div:nth-child(3) {
      flex-grow: 0;
    }
    .logo {
      img {
        height: 34px;
      }
    }
  }
  .item:last-child {
    border-bottom: 0;
  }
}
.request {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
