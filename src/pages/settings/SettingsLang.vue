<template>
  <div class="settings-lang">
    <Settings>
      <template slot="box">
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
      </template>
    </Settings>
    <Navigation />
    <div class="container">
    </div>
  </div>
</template>

<script>
import radio from '@/components/Radio'
import Navigation from '@/components/Navigation'
import Settings from '@/layouts/settings'

export default {
  components: {
    radio,
    Navigation,
    Settings
  }
}
</script>

<style lang="scss" scoped>
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
