<template>
  <div class="account-layout" :class="{color}">
    <div class="half">
      <div class="container">
        <div class="top-actions-bar">
          <slot name="header" />
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
      <div class="actions">
        <slot name="actions" />
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
    z-index: 2;
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
        img {
          height: 24px;
        }
        .avatar {
          height: 24px;
          width: 24px;
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
    .container {
      padding-top: 12vh;
      width: 80vw;
      margin: 0 auto;
    }
  }
}
.color {
  .half:nth-child(1) {
    background-color: #ff0d6a;
    h1 {
      color: #ffbfd7 !important;
      strong {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
  }
  .half:nth-child(2) {
    background-color: #fff;
    position: relative;
    z-index: 0;
    .container {
      padding-top: 5vh;
    }
  }
  .title {
    color: #fff;
  }
  .actions {
    position: absolute;
    bottom: 25vh;
    left: 0;
    width: 100%;
  }
}
@media (max-width: 340px) {
  .account-layout {
    .half:nth-child(1) {
      h1:nth-child(2) {
       flex-grow: 1 !important;
      }
    }
  }
}
</style>
