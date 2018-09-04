<template>
  <div class="settings-network">
    <Header>
      <template slot="back-arrow">
        <router-link to="settings">
          <img src="@/assets/icn/back.svg" alt="">
        </router-link>
      </template>
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
      <div class="row">
        <div class="content">
          <h3>
            MacBook Pro
          </h3>
          <p>
            Last activity: yesterday
          </p>
        </div>
        <div class="revoke">
          revoke
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            ThinkPad X
          </h3>
          <p>
            Last activity: one week ago
          </p>
        </div>
        <div class="revoke">
          revoke
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import radio from '@/components/Radio'
import Header from '@/components/Header'

export default {
  components: {
    radio,
    Header
  }
}
</script>

<style lang="scss" scoped>
.settings-network .container {
  width: 85vw;
  margin: 0 auto;
}
.settings-network {
  .row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #edf3f7;
    .content {
      padding: 28px 0;
      flex:3;
      text-align:left;
      h3,p {
        margin: 0;
      }
      p {
        font-size: 13px;
      }
    }
    .revoke {
        color: #ff0070;
        text-transform: uppercase;
      }
  }
  .row:last-child {
    border-bottom: 0;
  }
}
</style>
