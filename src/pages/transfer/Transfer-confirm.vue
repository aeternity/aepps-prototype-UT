<template>
  <div class="transfer-confirm">
    <Header>
      <template slot="nav">
        <div>
          <router-link to="/account">
            <ae-icon name="close" type="normal" invert />
          </router-link>
        </div>
      </template>
    </Header>
    <div class="container">
      <h1>
        Review and
        <strong>confirm</strong> your transfer details below.
      </h1>
      <div class="table-sum">
        <div class="row">
          <div class="item">
            Transfer Amount
          </div>
          <div class="item">
            {{recipientAmount}} AE
          </div>
        </div>
        <div class="row">
          <div class="item">
            Transaction Fee
          </div>
          <div class="item">
            0.2000 AE
          </div>
        </div>
        <div class="hr"></div>
        <div class="row total">
          <div class="item">
            Total Amount
          </div>
          <div class="item">
            {{recipientAmount + 0.200}} AE
          </div>
        </div>
      </div>
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

      <h1>
        To the recipient account:
      </h1>
      <div class="row">
        <div class="logo">
          <ae-identity-avatar :address="recipientAddress"></ae-identity-avatar>
        </div>
        <div class="content">
          <span>
            {{recipientAddress.slice(0,3)}} {{recipientAddress.slice(3,6)}} {{recipientAddress.slice(6,9)}} ...
            {{recipientAddress.slice(-6,-3)}}
            {{recipientAddress.slice(-9,-6)}}
          </span>
        </div>
      </div>
      <div class="row chunked">
        <h3>
          account key
        </h3>
        <div class="words">
          <span v-for="chunk in chunkAddress" :key="`${chunk}`">
            {{chunk}}
          </span>
        </div>
      </div>
      <div class="row actions final">
        <div class="item">
          <router-link to="/transfer">
            Cancel
          </router-link>
        </div>
        <div class="item" @click="createTx">confirm</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { AeIdentityAvatar, AeIcon } from '@aeternity/aepp-components'
export default {
  components: {
    Header,
    AeIdentityAvatar,
    AeIcon
  },
  computed: {
    activeAccount: function () {
      return this.$store.getters.activeAcc
    },
    chunkAddress: function () {
      return this.recipientAddress.match(/.{1,3}/g)
    },
    recipientAddress: function () {
      return this.$store.getters.recipientAddress
    },
    recipientAmount: function () {
      return this.$store.getters.recipientAmount
    }
  },
  methods: {
    createTx: function () {
      this.$store.commit('createTransaction')
      this.$router.push({name: 'account'})
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 80vw;
  margin: 0 auto;
}
.transfer-confirm {
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
  .table-sum {
    display: flex;
    flex-direction: column;
    .row {
      margin: 1.5vh 0;
      .item {
        flex:1;
        font-size: 13px;
        font-weight: 500;
      }
      .item:nth-child(1) {
        text-align: left;
        color: #76818c;
      }
      .item:nth-child(2) {
        text-align: right;
        color: #203040;
      }
    }
    .total {
      .item:nth-child(1) {
        color: #203040;
      }
      .item:nth-child(2) {
        color: #ff0070;
      }
    }
    .hr {
      height: 2px;
      background-color: #edf3f7;
    }
  }
  .row.chunked {
    display: flex;
    flex-direction: column;
    text-align: left;
    h3 {
      width: 100%;
      text-align: left;
      color: #76818c;
      font-weight: 500;
      font-size: 13px;
      letter-spacing: .3px;
    }
  }
  .words{
    display: grid;
    grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
    font-family: 'aeternity mono';
    color: #203040;
    letter-spacing: 1.8px;
    font-size: 17px;
    width: 100%;
    }
    .actions.final {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100vw;
      left: 0;
      box-shadow: 1px 0 8px 0 rgba(27, 68, 121, 0.1);
      .item {
        font-size: 15px;
        font-weight: 500;
        flex:1;
        align-items: center;
        padding: 19px 0 18px;
        text-transform: uppercase;
      }
      .item:nth-child(1) {
        background-color: #fff;
        a {
          text-decoration: none;
          color: #203040;
        }
      }
      .item:nth-child(2) {
        color: #fff;
        background-color: #ff0d6a;
      }
    }
}
</style>
