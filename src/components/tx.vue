<template>
  <div class="tx">
    <div class="logo">
      <ae-identity-avatar :address="tx.address"></ae-identity-avatar>
    </div>
    <div class="content">
      <div class="row">
        {{tx.address.slice(0,3)}}
        {{tx.address.slice(3,6)}}
        {{tx.address.slice(6,9)}}
        ···
        {{tx.address.slice(-3)}}
        {{tx.address.slice(-6,-3)}}
      </div>
      <div class="row">
        <div class="item">
          <span class="type" :class="{outcoming: tx.type == 'out'}">
            <template v-if="tx.type === 'in'">
              +
            </template>
            <template v-else>
              -
            </template>
          </span>
          <span class="amount">
            {{tx.value}} {{tx.unit}}
          </span>
        </div>
        <div class="item">
          <span class="status" :class="{date: tx.status !== 'pending'}">
            {{tx.status}}
          </span>
        </div>
      </div>
    </div>
    <div class="options">
      <img src="@/assets/icn/dots3.svg" alt="">
    </div>
  </div>
</template>

<script>
import { AeIdentityAvatar } from '@aeternity/aepp-components'
export default {
  components: {
    AeIdentityAvatar    
  },
  props: {
    tx: Object
  }
}  
</script>

<style lang="scss" scoped>
.tx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo .avatar{
    width: 5vh;
    height: 5vh;
  }
  .content .row:nth-child(1) {
    font-family: 'aeternity mono';
    font-size: 15px;
    font-weight: 500;
    color: #203040;
  }
  .content .row:nth-child(2) {
    display: flex;
    justify-content: space-between;
    .item:nth-child(1) {
      font-size: 13px;
      font-weight: 500;
      .type {
        color: #14ccb7;
      }
      .outcoming {
        color: #ff0070;
      }
    }
  }
  .status {
    color: #ff0070;
    font-weight: 500;
    font-size: 11px;
    font-family: 'Inter UI';
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }
  .date {
    color: grey;
  }
}
</style>
