<template>
  <div class="wallet">
    <Header>
      <template slot="nav">
         <div v-if="!isBrowserMin && isBrowseEnable" @click="minimaze">
          <img src="@/assets/icn/list.svg" alt="">
        </div>
        <div class="contextMenu" v-if="isBrowseEnable" @click="dropNav = true">
          <img src="@/assets/icn/dots3.svg" alt="">
        </div>
        <div class="dropNav" v-if="dropNav" @click="dropNav = false">
          <div class="option" @click="reload(urlAddress)">
            <img src="@/assets/icn/reload-dark.svg" alt="">
            <p>Reload</p>
          </div>
          <div class="option" @click="doCopy(urlAddress)">
            <img src="@/assets/icn/copy.svg" alt="">
            <p>Copy URL</p>
          </div>
          <div class="option">
            <img src="@/assets/icn/bookmark-save.svg" alt="">
            <p>Save</p>
          </div>
          <div class="option">
            <img src="@/assets/icn/share.svg" alt="">
            <p>Share</p>
          </div>
        </div>
        <div v-if="!isBrowseEnable" class="icon">
          <img src="@/assets/icn/questionMark.png" alt="question mark">
        </div>
        <div v-if="isBrowserMin" @click="isBrowserMin = false">
          <img src="@/assets/icn/arrow-up.svg" alt="">
        </div>
      </template>
    </Header>
    <div class="container">
      <div class="row">
        <div class="icn">
          ↪
        </div>
        <h1 class="text">
          Browse aepps
        </h1>
      </div>
      <div class="row">
        <input type="url" v-model="urlAddress" placeholder="Search or Type URL …" @keyup.enter="isBrowseEnable = true" class="input">
      </div>
      <div class="row">
        <div class="item">
          <img src="@/assets/icn/angles.png" alt="">
          <div class="text">
            Beer Aepp
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icn/radial.png" alt="">
          <div class="text">
            Proof
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icn/shapes.png" alt="">
          <div class="text">
            Explorer
          </div>
        </div>
      </div>
      <div class="row">
        <div class="icn">
          ↪
        </div>
        <h1 class="text">
          Aeternity aepps
        </h1>
      </div>
      <div class="rectangle">
        <div class="item" v-for="bookmark in Bookmarks" :key="bookmark.name">
          <div class="row">
            <div class="logo">
              <div class="cirle" :class="bookmark.name">
              </div>
            </div>
            <div class="content">
              <div class="title">
                {{bookmark.name}}
              </div>
              <div class="url">
                {{bookmark.url}}
              </div>
            </div>
        <div class="options" @click="toggleOption(bookmark)">
          <div class="optionsIcn">
            <img src="@/assets/icn/expandList.svg" alt="">
          </div>
          <div class="optionsDrop" v-if="bookmark.drop === true">
            <div class="option" @clipboard:copy="bookmark.url" @click="doCopy(bookmark.url)">
              <img src="@/assets/icn/copy.svg" alt="">
              <p>Copy URL</p>
              <input type="hidden" v-model="bookmark.url">
            </div>
            <div class="option">
              <img src="@/assets/icn/delete.svg" alt="">
              <p>Delete</p>
            </div>
            <div class="option">
              <img src="@/assets/icn/share.svg" alt="">
              <p>Share</p>
            </div>
          </div>
        </div>
          </div>
          <div class="rowText">
            <p class="text">
              Governance allows the community to participate in important decisions concerning the æternity blockchain.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div :class="{minimaze: isBrowserMin}" class="iframe" id="iframe" v-if="isBrowseEnable">
      <iframe :src=urlChange frameborder="0" width="100%"></iframe>
    </div>
<Navigation>

</Navigation>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
export default {
  components: {
    Header,
    Navigation
  },
  data () {
    return {
      urlAddress: '',
      isBrowseEnable: false,
      dropNav: false,
      isBrowserMin: false,
      Bookmarks: [
        {
          iconPath: '',
          name: 'Governance',
          url: 'governance.aepps.com',
          drop: false
        },
        {
          iconPath: '',
          name: 'Contacts',
          url: 'contacts.aepps.com',
          drop: false
        },
        {
          iconPath: '',
          name: 'Messages',
          url: 'messages.aepps.com',
          drop: false
        },
        {
          iconPath: '',
          name: 'Registrar',
          url: 'registrar.aepps.com',
          drop: false
        }
      ]
    }
  },
  methods: {
    toggleOption: function (el) {
      el.drop = !el.drop
      this.bookmark = el
      return this.bookmark
    },
    doCopy: function (text) {
      this.$copyText(text).then(function (e) {
        console.log(e)
      }, function (e) {
        console.log(e)
      })
    },
    loadUrl: function (url) {
      this.isBrowseEnable = true
      this.isBrowserMin = false
      this.urlAddress = url
    },
    reload: function (url) {
      this.dropNav = false
      this.loadUrl(url)
    },
    minimaze: function () {
      this.isBrowserMin = true
    }
  },
  computed: {
    urlChange: function () {
      return `http://${this.urlAddress}`
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  height: 11%;
}
.wallet {
  background-color: #edf3f7;
  .header {
    margin: 0 auto;
    justify-content: space-between;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height:100vh;
    .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        align-items: center;
        .icn {
            width: 17px;
            height: 24px;
            object-fit: contain;
            font-size: 17px;
            font-weight: bold;
            line-height: 1.5em;
            letter-spacing: normal;
          }
          .text {
            width: 90%;
            font-size: 23px;
            font-weight: 500;
            line-height: 1.22;
            letter-spacing: -0.5px;
            text-align: left;
            color: #203040;
          }
      .input {
          width:85vw;
          background-color: #f7fafc;
          height: 10vh;
          margin-left: 10px;
          display: flex;
          align-items: center;
          line-height: 1.41;
          color: #929ca6;
          font-size: 17px;
          box-shadow: none;
          border:0;
      }
      input[type=url] {
        padding-left: 1.2em;
      }
      .item {
        .text {
          font-size: 15px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.07;
          letter-spacing: normal;
          text-align: center;
          color: #203040;
          width: auto;
        }
      }
    }
    .row:first-child {
        .icn {
          color: #ff0d6a;
        }
        .text {
          color: #ff0070;
        }
    }
    .rectangle {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 8px 0 rgba(27, 68, 121, 0.1);
      width:95%;
      margin: 0 auto;
      .item {
        margin: 2vh;
        border-bottom: 2px solid #edf3f7;
        .row {
          display: flex;
          align-items: center;
          .logo,
          .options {
            flex: .35;
          }
          .logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-right: 10px;
          }
          .logo > div {
            width: 32px;
            height: 32px;
          }
          .logo .cirle {
            border-radius: 50%;
            width: 32px;
            height: 32px;
          }
          .cirle {
            &.Governance {
              background: url('../assets/icn/diamond.png') no-repeat 50% 50%;
            }
            &.Contacts {
              background: #6948a0 url('../assets/icn/contacts.svg') no-repeat 50% 50%;
              padding: 2px;
              background-size: 50%;
            }
            &.Messages {
              background: #b300ff url('../assets/icn/chat.svg') no-repeat 50% 50%;
              padding: 2px;
              background-size: 50%;
            }
            &.Registrar {
              background: #929ca6 url('../assets/icn/globe.svg') no-repeat 50% 50%;
              padding: 2px;
              background-size: 50%;
            }
          }
          .options {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            position: relative;
            cursor: pointer;
          }
          .optionsIcn:hover .optionsDrop {
            display: block;
          }
          .optionsDrop {
            position: absolute;
            right: 0;
            top: 0;
            background: white;
            z-index: 2;
            text-align: center;
            width: 40vw;
            box-shadow: 0 0 5px 1px grey;
          }
          .options .optionsIcn {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            cursor: pointer;
          }
          .options .option {
            cursor: pointer;
            display: flex;
            justify-content: flex-start;
            padding: 5px;
            p {
              margin: 0;
            }
          }
          .option img {
            margin-right: 10px;
          }
          .content {
            text-align: left;
            text-indent: 10px;
            line-height: .33;
            // padding: 16px 0;
            flex: 3;
            .title {
              font-size: 15px;
              font-weight: 500;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.33;
              letter-spacing: normal;
              color: #203040;
            }
            .url {
              font-size: 13px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.23;
              letter-spacing: normal;
              color: #76818c;
            }

        }
      }
        .rowText {
          .text {
            text-align: left;
            font-size: 15px;
            line-height: 1.33;
            color: #203040;
          }
        }
      }
    }
  }
.container {
    width: 85vw;
    margin: 0 auto;
}
.iframe {
  cursor: pointer;
  position: fixed;
  top:58px;
  height: 100vh;
  left: 0;
  width: 100vw;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 3;
  transition: all 3s ease;
  .contextMenu {
    display: flex;
  }
  iframe {
    height: 100%;
    background: white;
    cursor: pointer;
    -webkit-overflow-scrolling: touch;
  }
}
.minimaze {
  top: 100vh;
  transition: all 3s ease;
  .header {
    display: none;
  }
}
.dropNav {
  position: absolute;
  top: 4vh;
  padding-left: 5vw;
  z-index: 22;
  left: 50vw;
  width: 40%;
  background-color: white;
  box-shadow: 0px 0px 4px 0px #c3c3c3;
  cursor: pointer;
  .option {
    display: flex;
    align-items: center;
    font-size: 15px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  }
}
</style>
