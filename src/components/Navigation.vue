<template>
  <div class="footer">
    <div class="item">
      <router-link to="/">
        <img src="@/assets/icn/settings.svg" alt="" class="icon">
        <div>Browser</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/account/:account">
        <img src="@/assets/icn/settings.svg" alt="" class="icon">
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
      <router-link to="/">
        <img src="@/assets/icn/list-light.svg" alt="" class="icon">
         <div>Activity</div>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/settings">
        <img src="@/assets/icn/settings-light.svg" alt="" class="icon">
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
      display: flex;
      justify-content: space-around;
      align-items: center;
      position:fixed;
      left:0px;
      bottom:0px;
      width:100%;
      background:#001734;
    .item {
      display: flex;
      a {
        text-decoration: none;
        color: #76818d;
      }
    }
  }
</style>
