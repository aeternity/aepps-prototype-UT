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
      <div class="step step1">
        <h1>
          Choose the <strong>recipient</strong> you
          want to transfer funds to.
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
              <textarea name="" id="" placeholder="Type ak$ address or AENS name, or choose one of your accounts …"></textarea>
            </div>
            <div class="actions">
              <div class="item"></div>
              <div class="item">
                <img src="@/assets/icn/paste.svg" alt="">
                paste
              </div>
              <div class="item">
                <img src="@/assets/icn/camera.svg" alt="">
                scan
              </div>
            </div>
          </div>
        </div>
        <div class="action">
          <button>NEXT</button>
        </div>
      </div>
      <div class="step step2" v-if="isEnterAmountActive">

      </div>
      <div class="step step3">

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
    }
  },
  data() {
    return {
      isEnterAmountActive: false
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
    .head {
      display: flex;
      justify-content: space-between;
      .item {
        font-size: 13px;
        letter-spacing: .3px;
        color: #76818c;
      }
    }
    .address-input {
      textarea {
        font-size: 17px;
        color: #76818c;
        display: block;
        width:100%;
        box-sizing: border-box;
        min-height: 20px;
        padding: 25px 10px;
      }
    }
    .actions {
      background-color: #edf3f7;
      display: flex;
      justify-content: flex-end;
      .item {
        display: flex;
        align-items: center;
        align-self: flex-end;
        flex:1;
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
  }
}
</style>


