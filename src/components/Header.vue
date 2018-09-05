<template>
  <div class="header" :class={reverse}>
    <div class="page-name">
      <slot name="page-name" />
    </div>
    <div class="page-content">
      <slot name= "page-content" />
    </div>
    <div class="nav">
      <slot name="nav" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reverse: false
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 15px;
    color:black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      display: flex;
    }
    .page-name {
      flex:1;
      font-size: 17px;
      text-transform: capitalize;
      align-items: baseline;
      justify-content: flex-start;
      h3 {
        margin: 0;
      }
    }
    .nav {
      width: 15vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        display: flex;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .header.reverse .nav {
      flex-direction: row-reverse;
    }
</style>
