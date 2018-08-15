<template>
  <div class="settings-lang">
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
            English
          </h3>
        </div>
        <div class="radio">
          <radio name="lang" :checked="true"></radio>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            German
          </h3>
        </div>
        <div class="radio">
          <radio name="lang"></radio>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            Bulgarian
          </h3>
        </div>
        <div class="radio">
          <radio name="lang"></radio>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            Chinese
          </h3>
        </div>
        <div class="radio">
          <radio name="lang"></radio>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            Japanese
          </h3>
        </div>
        <div class="radio">
          <radio name="lang"></radio>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            Korean
          </h3>
        </div>
        <div class="radio">
          <radio name="lang"></radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import radio from '@/components/Radio'
import Header from '@/components/Header'
import { AeIdentityAvatar } from '@aeternity/aepp-components'

export default {
  components: {
    radio, Header, AeIdentityAvatar
  }
}
</script>

<style lang="scss" scoped>
.settings-lang .container {
  width: 85vw;
  margin: 0 auto;
}
.settings-lang {
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
    }
    .radio {
      flex:1;
      label {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
  .row:last-child {
    border-bottom: 0;
  }
}
</style>
