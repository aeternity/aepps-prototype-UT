<template>
  <div class="transfer-amount">
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
        <div>
          <h1>
            Specify the
            <strong>amount</strong> you want to transfer.
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
            <div class="address-input amount">
              <input type="number" placeholder="0.00" v-model.number="amount">
            </div>
            <div class="input-actions">
              <div class="item"></div>
              <div class="item">
                <img src="@/assets/icn/paste.svg" alt=""> paste
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="actions">
        <router-link to="/transfer-confirm">
          <button @click="setAmount(amount)" :disabled="!amount">NEXT</button>
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
    }
  },
  data () {
    return {
      amount: null
    }
  },
  methods: {
    setAmount: function (amount) {
      this.$store.commit('setRecipientAmount', amount)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 80vw;
  margin: 0 auto;
}
.transfer-amount {
  .header {
    text-indent: 6vw;
  }
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
    .address-input.amount {
      input {
        width: 100%;
        font-size: 53px;
        text-align: center;
        font-weight: 300;
        font-family: 'aeternity mono';
        color: #76818c;
        letter-spacing: -2.27px;
        background-color: #f7fafc;
        border: 0;
        box-shadow: 0;
        box-sizing: border-box;
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
