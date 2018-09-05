<template>
  <div class="settings">
    <div class="container">
      <Header>
        <template slot="page-name">
          <h3>
          {{this.$route.name}}
          </h3>  
        </template>
      </Header>
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
    </div>
    <P class="fixed-button" style="opacity:.5;">
      SIGN OUT ON THIS DEVICE
    </P>
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
export default {
  components: {
    Header,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.settings {
  height: 100vh;
  text-align: left;
  background-color: #d3dce6;
  .container {
    width: 85vw;
    margin: 0 auto;
    height: 100%;
    h3 {
      text-transform: capitalize;
      text-align: left;
    }
    .options {
      margin-top: 10vh;
      background-color: #fff;
      padding: 0 6vw;
      border-radius: 8px;
    }
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
    position: fixed;
    bottom: 13vh;
    left: 0;
    width: 100%;
    text-align: center;
    color: #ff0070;
    font-weight: 700;
  }
}
</style>
