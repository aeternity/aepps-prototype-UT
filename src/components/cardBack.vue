<template>
  <div class="card-back">
    <div class="row main">
      <div class="item">
        <img src="@/assets/icn/barcode.svg" alt="">
      </div>
      <div class="item chunked">
        <span v-for="chunk in chunkAddress" :key="chunk">
          {{chunk}}
        </span>
      </div>
    </div>
    <div class="row actions" />
  </div>
</template>

<script>
export default {
  props: {
    account: Object
  },
  computed: {
    chunkAddress () {
      return this.account.address.match(/.{1,3}/g)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-back {
  background: hsl(210, 33%, 19%);
  max-height: 192px;
  max-width: 312px;
  color: #f8f8f8;
  margin: 0 auto;
  font-size: 17px;
  border-radius: 8px;
  .row {
    display: flex;
    .item {
      flex:1;
    }
    .chunked {
      padding-top: 4%;
      line-height: 1em;
      display: grid;
      grid-template-columns: 33.3% 33.3% 33.3%;
      font-family: 'aeternity mono';
      span {
        text-align: left;
      }
    }
    &.main .item:nth-child(2) {
      font-weight: 500;
      letter-spacing: 2.1px;
    }
    &.main img {
      transform: scale(1.1);
    }
  }
  .actions {
    background-color: #001833;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 3vh;
  }
}
</style>
