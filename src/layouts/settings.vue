<template>
  <div class="settings-layout">
    <div class="container">
      <div class="header">
        <h3>
          {{this.$route.name}}
        </h3>
      </div>
      <div class="box">
        <slot name="box" />
      </div>
      <div class="bottom">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.settings-layout {
  background-color: #d3dce6;
  height: 100vh;
  .container {
    width: 85vw;
    margin: 0 auto;
    .header {
      padding: 5vh 0;
    }
    h3 {
      font-size: 17px;
      text-align: left;
      margin: 0;
      text-transform: capitalize;
    }
    .box {
      background-color: #fff;
      padding: 0 4vw;
      border-radius: 8px;
    }
    .bottom {
      position: fixed;
      bottom: 14vh;
      left: 0;
      width: 100%;
    }
  }
}
</style>


