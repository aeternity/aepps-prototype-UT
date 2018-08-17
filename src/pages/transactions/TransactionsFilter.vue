<template>
  <div class="filter">
    <Header>
      <template slot="page-name">
        {{this.$route.name}}
      </template>
      <template slot="nav">
        <router-link to="transactions-filter" v-if="!isBrowseEnable">
          <img src="@/assets/icn/filter.svg" alt="">
        </router-link>
        <div v-if="!isBrowserMin && isBrowseEnable" @click="minimaze">
          <img src="@/assets/icn/filter.svg" alt="">
        </div>
        <router-link to="/">
          <img src="@/assets/icn/list.svg" alt="">
        </router-link>
      </template>
    </Header>
    <div :class="{minimaze: isBrowserMin}" class="iframe" id="iframe" v-if="isBrowseEnable">
      <iframe :src=urlChange frameborder="0" width="100%"></iframe>
    </div>
    <div class="panel">
      <div class="container">
        <div class="item">
          <label class="title">
            Sort by:
          </label>
          <select name="sort" id="sort" v-model="selectedSort" class="select">
            <option v-for="(option,key) in sortOptions" v-bind:value="option.value" :key="key"> {{ option.text }} </option>
          </select>
        </div>
        <div class="item">
          <label class="title">
            Direction:
          </label>
          <select name="direction" id="direction" v-model="selectedDirection" class="select">
            <option v-for="(option,key) in directionOptions" v-bind:value="option.value" :key="key"> {{ option.text }} </option>
          </select>
        </div>
        <div class="wrapper">
          <div class="itemRow">
            <select name="range" id="range" v-model="firstSelectedRange" class="select">
              <option v-for="(option,key) in firstRangeOptions" v-bind:value="option.value" :key="key"> {{ option.text }} </option>
            </select>
          </div>
          <div class="itemRow">
            <select name="range" id="range" v-model="secondSelectedRange" class="select">
              <option v-for="(option,key) in secondRangeOptions" v-bind:value="option.value" :key="key"> {{ option.text }} </option>
            </select>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <label class="title">
              Address:
            </label>
            <select name="address" id="address" v-model="selectedAddress" class="select bcg">
              <option v-for="(option,key) in addressOptions" v-bind:value="option.value" :key="key"> {{ option.text }} </option>
            </select>
          </div>
          <p class="text">
             Type ak$ address or AENS name, or choose one of your accounts …
          </p>
          <div class="row__btn">
      <div>
        <img src="@/assets/icn/share.svg" alt=""> Accounts
      </div>
      <div>
        <img src="@/assets/icn/share.svg" alt=""> Paste
      </div>
      <div>
        <img src="@/assets/icn/share.svg" alt=""> Scan
      </div>
          </div>
        </div>
        <div class="item">
          <div class="btn">
            <a href="#" class="btn__link">
              Apply
            </a>
          </div>
          <div class="btn__inactive">
            <a href="#" class="btn__inactive__link">
              Reset
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
  import Header from "@/components/Header";
  export default {
    data(){
      return {
        isBrowseEnable: false,
        isBrowserMin: false,
        selectedSort: 'Data(descending)',
        selectedDirection:'Outgoing Transactions',
        firstSelectedRange: 'From',
        secondSelectedRange: 'To',
        selectedAddress: 'Select',
        sortOptions:[
          {text: 'Data(descending)',value: 'Data(descending)'},
          {text: 'Data(ascending)', value: 'Data(ascending)'}
        ],
        directionOptions:[
          {text: 'Outgoing Transactions', value: 'Outgoing Transactions'},
          {text: 'Incoming Transactions', value: 'Incoming Transactions'
          }
        ],
        firstRangeOptions:[
          {text:'From', value: 'From'},
          {text: 'To', value: 'To'}
        ],
        secondRangeOptions: [
          { text: 'From', value: 'From' },
          { text: 'To', value: 'To' }
        ],
        addressOptions:[
          { text: 'Select', value: 'Select' },
          { text: 'A', value: 'A'}
        ]
      }
    },
    components: {
      Header
    }
  };
</script>
<style lang="scss" scoped>
  .container {
    display:flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 85vh;
  }
  .item {
    margin: 0 auto;
    min-height: 10vh;
    display:flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    width:80vw;
    background-color: #f7fafc;
  }
  .title {
    font-size:0.8em;
    line-height: 1em;
    letter-spacing: 0.3px;
    color: #76818c;
    margin: 0.5em 0 0 1em;
  }
  .select {
    border: 0;
    background: transparent;
    color: #203040;
    font-size: 1.125em;
    line-height: 1.33;
    margin: 0 1em 0 0.5em;
    &.bcg {
      letter-spacing: 0.3px;
      text-align: right;
      color: #76818c;
      background-color: #ffffff;
      border: solid 2px #f7fafc;
    }
  }
  .wrapper {
    display:flex;
    margin: 0 auto;
    height: 10vh;
    width:80vw;
    justify-content: space-between;
  }
  .itemRow{
    display:flex;
    width: 40%;
    justify-content: space-between;
    background-color: #f7fafc;
  }
  .row{
    display:flex;
    justify-content: space-between;
  }
  .row__btn{
    display:flex;
    justify-content: space-between;
    background-color: #edf3f7;
  }
  .text{
    line-height: 1.5em;
    color:#76818c;
    line-height: 1.41;
  }
  .btn {
    text-transform: uppercase;
    height: 8vh;
    border-radius: 32px;
    background-color: #ff0d6a;
    box-shadow: 0 0 16px 0 rgba(27, 68, 121, 0.15);
    display: flex;
    justify-content: center;
}

.btn__link {
  text-decoration: none;
  padding-top: 20px;
  height: 16px;
  font-size: 13px;
  font-weight: 900;
  line-height: 1.23;
  letter-spacing: 1.3px;
  color: #ffffff;
}

.btn__inactive{
  text-transform: uppercase;
  font-weight: bold;
  display:flex;
  justify-content: center;
}

.btn__inactive__link{
  margin-top:2vh;
  text-decoration: none;
  color: #203040;
}
</style>