<template>
  <div class="transfer">
    <Wallet color=true>
      <template slot="header">
        <Header reverse=true>
          <template slot="nav">
            <div>
              <router-link to="/account">
                <ae-icon name="close" type="dramatic" invert />
              </router-link>
            </div>
          </template>
        </Header>
      </template>
      <template slot="title">
        <div class="step step1" v-if="!isEnterAmountActive">
          <h1>
            Choose the
            <strong>recipient</strong> you want to transfer funds to.
          </h1>
          <h1>
            Your active account is:
          </h1>
          <div class="row">
            <div class="logo">
              <ae-identity-avatar :address="activeAccount.address"></ae-identity-avatar>
            </div>
            <div class="content">
              <h1>
                <strong>
                  {{activeAccount.name}}
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </template>
      <div class="container">
      </div>
      <template slot="swipers">
        <div class="container">
          <div class="input">
            <div class="head">
              <div class="item">
                <label>
                  Recipient
                </label>
              </div>
              <div class="item">
                <select name="" id="">
                  <option value="">
                    Select ▾
                  </option>
                </select>
              </div>
            </div>
            <div class="address-input">
              <textarea name="" id="" placeholder="Type ak$ address or AENS name, or choose one of your accounts …"
                v-model="recipientAddress" />
            </div>
            <div class="input-actions">
              <div class="item"></div>
              <div class="item">
                <img src="@/assets/icn/paste.svg" alt=""> paste
              </div>
              <div class="item">
                <img src="@/assets/icn/camera.svg" alt=""> scan
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="actions">
        <router-link to="/transfer-amount">
          <button type="dramatic" @click="setAddress(recipientAddress)" :disabled="!recipientAddress">NEXT</button>
        </router-link>
      </template>
    </Wallet>
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Wallet from '@/layouts/wallet'
import { AeIdentityAvatar, AeIcon } from '@aeternity/aepp-components'
export default {
  components: {
    Header,
    AeIdentityAvatar,
    Navigation,
    Wallet,
    AeIcon
  },
  computed: {
    activeAccount: function () {
      return this.$store.getters.activeAcc
    },
    chunkAddress: function () {
      return this.activeAccount.address.match(/.{1,3}/g)
    }
  },
  data () {
    return {
      isEnterAmountActive: false,
      recipientAddress: null
    }
  },
  methods: {
    setAddress: function (address) {
      this.$store.commit('setRecipientAddress', address)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 80vw;
  margin: 0 auto;
}
.transfer {
  h1 {
    color: #203040;
    font-size: 23px;
    letter-spacing: -.5px;
    font-weight: 500;
    text-align: left;
    strong {
      color: #ff0070;
      font-weight: 500;
    }
  }
  h1:nth-child(2) {
    margin-bottom: 0;
  }
  .row {
    display: flex;
    align-items: center;
    .logo {
      margin-right: 2vw;
      .avatar {
        width: 24px;
        height: 24px;
      }
    }
    h1 {
      margin: 0;
    }
  }
  .input {
    margin-top: 10vh;
    background-color: #f7fafc;
    padding: 8px 0 0;
    .head {
      display: flex;
      padding: 0 16px;
      justify-content: space-between;
      .item {
        font-size: 13px;
        letter-spacing: .3px;
        color: #76818c;
        label {
          font-size: 13px;
        }
      }
    }
    .address-input {
      textarea {
        background-color: #f7fafc;
        border: 0;
        font-size: 17px;
        color: #76818c;
        display: block;
        width:100%;
        box-sizing: border-box;
        min-height: 20px;
        padding: 25px 16px;
      }
    }
    .input-actions {
      background-color: #edf3f7;
      display: flex;
      justify-content: flex-end;
      .item {
        display: flex;
        align-items: center;
        flex:1;
        color: #76818c;
        img {
          height: 11px;
          margin: 0 2px;
        }
      }
      .item:first-child {
        flex: 2;
      }
    }
  }
  .actions {
    button {
      text-transform: uppercase;
      padding: 21px 0 19px 0;
      font-size: 13px;
      font-weight: 900;
      background-color: #ff0d6a;
      color: #fff;
      width: 90vw;
      border-radius: 32px;
    }
    button:disabled {
      opacity: .2;
    }
  }
}
</style>
