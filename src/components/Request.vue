<template>
  <Wallet color=true >
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
      <h3>
        <span>
          ↪
        </span>
      </h3>
      <h3 class="custom">
        Generate a <strong>transfer request</strong> with the address of your
        <ae-identity-avatar :address="account.address" />
        <strong>
          {{account.name}}
        </strong>
        and the amount that you want to revice
      </h3>
    </template>
    <template slot="swipers">
      <div class="input">
        <div class="top">
          <div class="item">
            <p>
              Amount
            </p>
          </div>
          <div class="item">
            <p>
              AE
            </p>
          </div>
        </div>
        <div class="mid">
          <input type="number" placeholder="0.00">
        </div>
      </div>
    </template>
    <template slot="actions">
      <div class="container">
        <ae-button type="exciting" size="medium">
          NEXT
        </ae-button>
      </div>
    </template>
  </Wallet>
</template>
<script>
import Wallet from '@/layouts/wallet'
import Header from '@/components/Header'
import {AeIdentityAvatar, AeIcon, AeButton} from '@aeternity/aepp-components'
export default {
  components: {
    Wallet,
    AeIdentityAvatar,
    AeIcon,
    AeButton,
    Header
  },
  computed: {
    account: function () {
      return this.$store.getters.activeAcc
    }
  }
}
</script>
<style lang="scss" scoped>
h3 {
  text-align: left;
  font-weight: 500;
  font-size: 23px;
  color: #ffbfd7;
  letter-spacing: .5px;
  strong {
    color: #fff;
  }
}
.custom {
  .avatar {
    height: 32px;
    width: 32px;
  }
}
.input {
  padding: 5px 10px;
  width: 85vw;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #f7fafc;
  box-shadow: 0 0 10px 1px #c3c3c3;
  box-sizing: border-box;
}
.top {
  display: flex;
  align-items: center;
  .item {
    flex: 1;
    p {
      font-size: 13px;
      letter-spacing: .3px;
      color: #272d33;
    }
  }
  .item:nth-child(1) {
    text-align: left;
  }
  .item:nth-child(2) {
    text-align: right;
  }
}
.mid {
  input {
    border: 0;
    background-color: #f7fafc;
    font-size: 53px;
    width: 100%;
    color: #272d33;
    font-family: 'aeternity mono';
    text-align: center;
    box-sizing: border-box;
    caret-color: #ff0d6a;
  }
  input:hover {
    box-shadow: none;
    outline: 0;
  }
}
.actions {
  z-index: 5;
  .ae-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
