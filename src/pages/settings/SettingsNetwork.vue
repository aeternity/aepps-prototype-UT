<template>
  <div class="settings-network">
    <Settings>
      <template slot="box">
        <div class="row">
        <div class="content">
          <h3>
            Main Net
          </h3>
          <p>
            13 active nodes
          </p>
        </div>
        <div class="radio">
          <radio name="network" :checked="true"></radio>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <h3>
            Test Net
          </h3>
          <p>
            3 active nodes
          </p>
        </div>
        <div class="radio">
          <radio name="network"></radio>
        </div>
      </div>  
      </template>
    </Settings>
    <Navigation />
  </div>
</template>

<script>
import radio from '@/components/Radio'
import Settings from '@/layouts/settings'
import Navigation from '@/components/Navigation'
export default {
  components: {
    radio,
    Settings,
    Navigation
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
    }
    .radio {
      flex:1;
    }
  }
  .row:last-child {
    border-bottom: 0;
  }
}
</style>
