<template>
  <div class="walletAccounts">
    <div class="container">
      <div class="row">
        <div class="logo">
          <ae-identity-avatar class="avatar" :address="account.address">
          </ae-identity-avatar>
        </div>
        <div class="content">
          <span>{{account.name}}</span>
        </div>
        <div class="arrow">
          ?
        </div>
      </div>
      <div class="row heading">
        <div class="item">
          {{`${account.balance} ${account.unit}`}}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="logo">
          <ae-identity-avatar :address="account.address"></ae-identity-avatar>
        </div>
        <div class="content">
          <h3>
            Send
          </h3>
          <p>
            Transfer founds
          </p>
        </div>
        <div class="arrow">
          <ae-icon name="chevron" />
        </div>
      </div>
      <div class="row">
        <div class="logo">
          <ae-identity-avatar :address="account.address"></ae-identity-avatar>
        </div>
        <div class="content">
          <h3>
            Recive
          </h3>
          <p>
            Share your address
          </p>
        </div>
        <div class="arrow">
          <ae-icon name="chevron" />
        </div>
      </div>
      <div class="row">
        <div class="logo">
          <ae-identity-avatar :address="account.address"></ae-identity-avatar>
        </div>
        <div class="content">
          <h3>
            Scan
          </h3>
          <p>
            Pay by scanning a QR code
          </p>
        </div>
        <div class="arrow">
          <ae-icon name="chevron" />
        </div>
      </div>
    </div>
    <Navigation>
    </Navigation>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import {AeIdentityAvatar, AeIcon} from '@aeternity/aepp-components'

export default {
  components: {
    Navigation,
    AeIdentityAvatar,
    AeIcon
  },
  props: {
    account: {
      type: Object,
      default: function () {
        return {
          name: 'Main Account',
          balance: 20.65,
          unit: 'AE'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.walletAccounts {
  background-color: #edf3f7;
  height: 100vh;
  .container:first-child {
    margin: 0 auto;
    width: 100%;
    background: #ff0d6a;
    color: #ffffff;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .row:first-child {
      width: 90vw;
      margin: 0 auto;
      margin-top: 5vh;
    }
  }
  .container {
    width: 85vw;
    margin: 0 auto;
    .row.heading {
        display: flex;
        align-items: center;
        font-size: 17px;
        justify-content: flex-end;
        border: none;
      .item:first-child {
        flex: .7;
        font-size: 3em;
        margin-bottom: 0.5em;
      }
      .item:nth-child(2) {
        text-align: left;
        font-weight: 500;
      }
      .item {
        flex: 2;
        padding: 5px 0 0;
        .avatar {
          width: 32px;
          height: 32px;
        }
      }
    }
    .row:first-child {
      border:none;
    }
      .row {
        display: flex;
        align-items: center;
        font-size: 17px;
        border-top: 1px solid #315872;
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
              flex: 3;
              text-align: left;
              h3,
              p {
                margin: 0;
              }
              p {
                font-size: 13px;
              }
            }
            .arrow {
              flex: 1;
              text-align: right;
            }
      }
  }
}
</style>
