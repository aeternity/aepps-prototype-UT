<template>
  <div class="settings">
    <Settings>
      <template slot="box">
        <div class="options">
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
      </template>
      <template slot="bottom">
        <P class="fixed-button" style="opacity:.5;">
          SIGN OUT ON THIS DEVICE
        </P>
      </template>
    </Settings>
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Settings from '@/layouts/settings'
export default {
  components: {
    Header,
    Navigation,
    Settings
  }
}
</script>

<style lang="scss" scoped>
.settings {
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
  .row:nth-child(1) .icn {
    background-color: #6948a0;
  }
  .row:nth-child(2) .icn {
    background-color: #ff0070;
  }
  .row:nth-child(3) .icn {
    background-color: #14ccb7;
  }
  .fixed-button {
    color: #ff0070;
    font-weight: 700;
  }
}
</style>
