<template>
  <div class="account-layout" :class="{color}">
    <div class="half">
      <div class="container">
        <div class="top-actions-bar">
          <Header></Header>
        </div>
        <div class="title">
          <slot name="title" />
        </div>
        <div class="swipers">
          <slot name="swipers" />
        </div>
      </div>
    </div>
    <div class="half">
      <div class="container">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  props: {
    color: false
  },
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
.account-layout {
  .half {
    height: 50vh;
  }
  .half:nth-child(1) {
    background-color: #d3dce6;
    position: relative;
    .container {
      width: 90vw;
      margin: 0 auto;
    }
    .title {
      display: flex;
      h1 {
        color: #203040;
        font-size: 23px;
        text-align: left;
        font-weight: 400;
        span {
          color: #ff0d6a;
        }
      }
      h1:nth-child(1) {
        flex:1;
        flex-grow: 0;
      }
      h1:nth-child(2) {
        flex: 2;
        flex-grow: 0.8;
      }
    }
    .swipers {
      position: absolute;
      left: 0;
      bottom: -37px;
      width: 100%;
    }
  }
  .half:nth-child(2) {
    background-color: #fff;
    padding-top: 12vh;
  }
}
.color {
  .half:nth-child(1) {
    background-color: #ff0d6a;
  }
  .half:nth-child(2) {
    background-color: #fff;
  }
  .title {
    color: #fff;
  }
}
</style>
