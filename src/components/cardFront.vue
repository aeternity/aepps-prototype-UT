<template>
  <div class="card-front" :class="account.prior">
    <div class="row heading">
      <div class="item">
        <ae-identity-avatar class="avatar" :address="account.address"></ae-identity-avatar>
      </div>
      <div class="item">
        <span v-if="!editMode">{{account.name}}</span>
        <input type="text" v-if="editMode" v-model="account.name">
      </div>
      <div class="item">
      <router-link to="/settings">
        <img src="@/assets/icn/settings-white.svg" alt="" class="icon">
      </router-link>
      </div>
    </div>
    <div class="row address">
      <div class="item card-secure-label">
        secure <br> label
      </div>
      <div class="item">
        {{account.address.slice(0,3)}}
        {{account.address.slice(3,6)}}
        {{account.address.slice(6,9)}}
        <p>
          ··· ··· ···
        </p>
        {{account.address.slice(-3)}}
        {{account.address.slice(-6,-3)}}
        {{account.address.slice(-9,-6)}}
      </div>
    </div>
    <div class="row actions">
      <div class="item">
        Balance
      </div>
      <div class="item">
       {{account.balance}}
       <span>
         {{account.unit}}
       </span>
      </div>
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
    account: Object
  },
  data () {
    return {
      editMode: false
    }
  },
  methods: {
    edit: function () {
      this.editMode = true
    },
    save: function (id, name) {
      this.$store.dispatch('renameAcc', {id, name})
      this.editMode = false
    },
    doCopy: function (text) {
      this.$copyText(text).then(function (e) {
        console.log(e)
      }, function (e) {
        console.log(e)
      })
    }
  }
}
</script>
<style>
.swiper-pagination-bullet-active{
  background:#ff0d6a;
}
@media only screen and (max-width: 340px)  {
.card-front .row.address .item {
   letter-spacing: unset!important;
}
.rectangle{
  top: 46vh!important;
  }
}
</style>

<style lang="scss" scoped>
.card-front {
  max-width: 312px;
  margin: 0 auto;
  background: #ff0d6a;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 16px 0px rgba(26,68,121,.2);
  .row {
    display: flex;
    align-items: center;
    &.heading {
      .item {
        flex: 0.3;
        font-size: 17px;
        input {
          font-size: 17px;
          display: inline-block;
          background: transparent;
          color: white;
          box-shadow: 0;
          border: 0;
          width: 100%;
          border-bottom: 1px solid white;
        }
        .avatar {
          width: 32px;
          height: 32px;
        }
      }
      .item:first-child {
        flex:.3;
      }
      .item:nth-child(2) {
        text-align: left;
        font-weight: 500;
        flex: 1;
      }
    }
    &.actions {
      .item {
        display: flex;
        font-size: 13px;
        align-items: flex-start;
      }
      .item:first-child {
        flex:3;
      }
      .item:nth-child(2) {
        font-family: 'aeternity mono';
        font-size: 17px;
        display: flex;
        align-items: flex-end;
        span {
          font-size: 13px;
        }
      }
    }
    &.address {
      padding: 40px 10px 8px;
      font-weight: 700;
      .item {
        color: #c02967;
        letter-spacing: 1.9px;
        p {
          margin: 0;
          letter-spacing: 4.5px;
        }
      }
      .item:nth-child(2) {
        font-family: 'aeternity mono';
        p {
          letter-spacing: 1.1px;
        }
      }
    }
    .item {
      flex:1;
      padding: 5px 0 0;
    }
    &.actions {
      background: rgba(0,0,0,.2);
      padding: 2px 9px 6px;
      letter-spacing: 1.1px;
      font-weight: 500;
      font-size: 13px;
      img {
        height: 14px;
        width: 14px;
        margin-right: 5px;
      }
    }
    .actions {
      .item:nth-child(1) {
        font-size: 13px;
      }
      .item:nth-child(2) {
        font-family: 'aeternity mono';
        font-size: 17px !important;
        span {
          font-size: 13px;
        }
      }
    }
    .card-secure-label {
      align-self: flex-end;
      text-align: left;
      text-transform: uppercase;
      font-size: 11px !important;
      letter-spacing: 1.1px;
    }
  }
}
.card-front.daily {
  background-color: #6948a1;
  .address .item {
    color: #442873;
  }
}
@media (max-width: 340px) {
  .row.address {
    padding-top: 20px !important;
  }
}
</style>
