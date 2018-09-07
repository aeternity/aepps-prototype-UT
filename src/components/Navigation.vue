<template>
  <div class="footer">
    <div class="item">
      <router-link to="/">
        <div>
          <img src="@/assets/icn/browser-apps.svg" alt="" class="icon">
        </div>
        <div>Browser</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/account">
        <div>
          <img src="@/assets/icn/card-light.svg" alt="" class="icon">
        </div>
        <div>Wallet</div>
      </router-link>
    </div>
    <div class="item">
      <router-link class="avatar activeId" to="/accounts">
          <ae-identity-avatar :address=activeAccAddress.address>
          </ae-identity-avatar>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/transactions">
        <div>
          <img src="@/assets/icn/list-light.svg" alt="" class="icon">
        </div>
        <div>Activity</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/settings">
        <div>
          <img src="@/assets/icn/settings-white.svg" alt="" class="icon">
        </div>
       <div>Settings</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { AeIdentityAvatar } from '@aeternity/aepp-components'
export default {
  components: {
    AeIdentityAvatar
  },
  computed: {
    activeAccAddress () {
      return this.$store.getters.activeAcc
    }
  }
}
</script>
<style lang="scss" scoped>
    .footer {
      z-index: 5;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position:fixed;
      left:0px;
      bottom:0px;
      width:100%;
      background:#001734;
      padding: 8px 0;
    .item {
      display: flex;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 11px;
        opacity: .5;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .router-link-exact-active {
        opacity: 1;
        .avatar {
          border-color: #ff0d6a;
        }
      }
    }
  }
</style>
