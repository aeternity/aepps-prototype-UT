<template>
  <div class="settings-network">
    <Settings>
      <template slot="box">
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
      </template>
    </Settings>
    <Navigation />
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
