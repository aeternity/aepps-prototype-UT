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
    <div class="row actions">
      <div class="item"></div>
      <div class="item" @click="doCopy(account.address)">
        <img src="@/assets/icn/copy-light.svg" alt="">
        copy
      </div>
      <div class="item">
        <img src="@/assets/icn/share-light.svg" alt="">
        share
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    account: {
      type: Object,
      default: function () {
        return {
          name: 'Daily',
          address: 'ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e',
          balance: 0,
          words: 'test test test',
          unit: 'AE'
        }
      }
    }
  },
  methods: {
    doCopy: function (text) {
      this.$copyText(text).then(function (e) {
        console.log(e)
      }, function (e) {
        console.log(e)
      })
    }
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
    padding: 8px 0px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    bottom: 10px;
    border-radius: 0 0 8px 8px;
    img {
      height: 14px;
      width: 14px;
    }
    .item:nth-child(1) {
      flex:2;
    }
  }
}
</style>
