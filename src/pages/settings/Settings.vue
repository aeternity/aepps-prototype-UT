<template>
  <div class="settings">
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
      <div class="row">
        <router-link to="network">
          <div class="icn">
            <img src="@/assets/icn/globe.svg" alt="">
          </div>
          <div class="content">
            <h3>
              Network
            </h3>
            <p>
              Test Net
            </p>
          </div>
        </router-link>
      </div>
      <div class="row">
        <router-link to="remote-connections">
          <div class="icn">
            <img src="@/assets/icn/device.svg" alt="">
          </div>
          <div class="content">
            <h3>
              Remote Connections
            </h3>
            <p>
              2 devices connected
            </p>
          </div>
        </router-link>
      </div>
      <div class="row">
        <router-link to="language">
          <div class="icn">
            <img src="@/assets/icn/device.svg" alt="">
          </div>
          <div class="content">
            <h3>
              Language
            </h3>
            <p>
              English
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <P class="fixed-button" style="opacity:.5;">
      SIGN OUT ON THIS DEVICE
    </P>
  </div>
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
.settings {
  height: 100vh;
  .container {
    width: 85vw;
    margin: 0 auto;
  }
  .row {
    text-align: left;
    border-bottom: 1px solid #edf3f7;
    .content {
      padding: 28px 0;
    }
    .icn {
      border-radius: 50%;
      background-color: #6948a0;
      margin-right: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      img {
        padding: 8px;
        width: 24px;
        height: 24px;
      }
    }
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    h3 {
      font-size: 15px;
      color: #203040;
      margin: 0;
    }
    p {
      font-size: 13px;
      color: #76818c;
      margin: 0;
    }
  }
  .row:last-child {
    border-bottom: none;
    .icn {
      background-color: #ff0070;
    }
  }
  .fixed-button {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    color: #ff0070;
  }
}
</style>
