<template>
  <div class="header">
    <div class="back-arrow">
      <slot name="back-arrow" />
    </div>
    <div class="page-name">
      <slot name="page-name" />
    </div>
    <div class="nav">
      <slot name="nav" />
      <router-link class="avatar activeId" to="/accounts">
          <ae-identity-avatar :address=activeAccAddress.address>
          </ae-identity-avatar>
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
  .header {
    background-color: #edf3f7;
    padding: 15px;
    color:black;
    display: flex;
    align-items: center;
    a {
      display: flex;
    }
    .arrow-back {
      margin-left: -2vw;
    }
    .page-name {
      flex:1;
      text-align: left;
      font-size: 17px;
      text-transform: capitalize;
      font-weight: 500;
    }
    .nav {
      display: flex;
      flex:.5;
      align-items: center;
      justify-content: space-between;
      a {
        display: flex;
      }
      .activeId div{
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
