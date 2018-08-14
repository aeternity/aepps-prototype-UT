<template>
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
        <router-link class="avatar" to="accounts">
          <ae-identity-avatar address="">
          </ae-identity-avatar>
        </router-link>
      </template>
    </Header>
</template>
<script>
import Header from '@/components/Header'
import { AeIdentityAvatar } from '@aeternity/aepp-components'
export default {
  components: {
    Header,
    AeIdentityAvatar
  }
}
</script>
<style lang="scss" scoped>
.avatar div {
  width: 24px;
  height: 24px;
  display: flex;
}
</style>


