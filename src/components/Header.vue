<template>
  <div class="header">
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
      display: flex;
      align-items: center;
      flex-grow: .7;
    }
    .page-content {
      flex-grow: .2;
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
