<template>
  <div class="header">
    <div class="page-name">
      <slot name="page-name" />
    </div>
    <div class="nav">
      <slot name="nav" />
      ?
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    padding: 15px;
    color:black;
    display: flex;
    justify-content: flex-end;
    a {
      display: flex;
    }
    .page-name {
      display: flex;
      align-items: baseline;
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        display: flex;
      }
    }
  }
</style>
