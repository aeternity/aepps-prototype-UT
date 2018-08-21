<template>
  <div class="transfer">
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
    <div class="container">
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
              {{activeAccount.name}}
            </h1>
          </div>
        </div>
        <div class="bottom">
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
              <textarea name="" id="" placeholder="Type ak$ address or AENS name, or choose one of your accounts …" v-model="recipientAddress">
              </textarea>
            </div>
            <div class="actions">
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
        <div class="action">
          <router-link to="/transfer-amount">
            <button @click="setAddress(recipientAddress)" :disabled="!recipientAddress">NEXT</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import { AeIdentityAvatar } from '@aeternity/aepp-components'
export default {
  components: {
    Header,
    AeIdentityAvatar
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
    .actions {
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
  .action {
    position: absolute;
    left: 0;
    bottom: 5vh;
    width: 100%;
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
