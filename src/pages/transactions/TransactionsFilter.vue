<template>
  <div class="filter">
    <Header>
      <template slot="page-name">
        <router-link to="/transactions">
          <div class="back-arrow">
            <ae-icon name="arrow" rotate="180">
            </ae-icon>
          </div>
        </router-link>
        <div class="name">
          {{this.$route.name}}
        </div>
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
            <div class="icn">
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
        <div class="item box">
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
import Header from '@/components/Header'
import {AeIcon} from '@aeternity/aepp-components'
export default {
  data () {
    return {
      isBrowseEnable: false,
      isBrowserMin: false,
      selectedSort: 'Date (descending)',
      selectedDirection: 'Outgoing Transactions',
      firstSelectedRange: 'From',
      secondSelectedRange: 'To',
      selectedAddress: 'Select',
      sortOptions: [
        { text: 'Date (descending)', value: 'Date (descending)' },
        { text: 'Date (ascending)', value: 'Date(ascending)' }
      ],
      directionOptions: [
        { text: 'Outgoing Transactions', value: 'Outgoing Transactions' },
        {text: 'Incoming Transactions', value: 'Incoming Transactions'}
      ],
      firstRangeOptions: [
        { text: 'From', value: 'From' },
        { text: 'To', value: 'To' }
      ],
      secondRangeOptions: [
        { text: 'From', value: 'From' },
        { text: 'To', value: 'To' }
      ],
      addressOptions: [
        { text: 'Select', value: 'Select' },
        { text: 'A', value: 'A' }
      ]
    }
  },
  components: {
    Header,
    AeIcon
  }
}
</script>
<style lang="scss" scoped>
  .back-arrow {
    margin-right:20px;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 85vh;
  }

  .item {
    margin: 0 auto;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    width: 80vw;
    background-color: #f7fafc;
    &.box{
      background-color: unset;
    }
  }

  .item:nth-child(2),
  .item:first-child {
    position: relative;
  }

  .title {
    font-size: 0.8em;
    line-height: 1em;
    letter-spacing: 0.3px;
    color: #76818c;
    margin: 0.5em 0 0 1em;
  }

  .item:nth-child(2):after,
  .item:first-child:after {
    content: '>';
    right: 2px;
    padding: 0 0 0 2em;
    position: absolute;
    pointer-events: none;
    transform: rotateZ(90deg);
    font-size:1em;
  }
  .select {
    border: 0;
    background: transparent;
    color: #203040;
    font-size: 1.125em;
    line-height: 1.33;
    margin: 0 1em 0 0.5em;
    appearance: none;
    display: block;
    background-image: none;
    word-break: normal;
    width:100%;
    &.bcg {
      width:30%;
      margin:0;
      appearance: menulist-button;
      letter-spacing: 0.3px;
      text-align: right;
      color: #76818c;
      background-color: #ffffff;
      border: solid 2px #f7fafc;
    }
  }

  .wrapper {
    display: flex;
    margin: 0 auto;
    height: 10vh;
    width: 80vw;
    justify-content: space-between;
  }

  .itemRow {
    position: relative;
    display: flex;
    width: 45%;
    justify-content: space-between;
    background-color: #f7fafc;
  }

  .itemRow:after {
    content: '>';
    right: -6px;
    padding: 0 0 0 3em;
    position: absolute;
    pointer-events: none;
    transform: rotateZ(90deg);
    font-size: 1em;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .row__btn {
    display: flex;
    justify-content: space-between;
    background-color: #edf3f7;
  }

  .icn {
    flex:2;
  }
  .text {
    line-height: 1.5em;
    color: #76818c;
    line-height: 1.41;
    margin: 3vh 0 5vh 2vh;
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

  .btn__inactive {
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  .btn__inactive__link {
    margin-top: 2vh;
    text-decoration: none;
    color: #203040;
  }
</style>
