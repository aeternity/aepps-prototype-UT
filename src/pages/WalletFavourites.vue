<template>
  <div class="walletFav">
    <Header>
      <template slot="page-name">
        <div v-bind:class="{'is-scrolled' : scroll }"> {{this.$route.name}}</div>
       </template>
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
        <div v-if="!isBrowseEnable" class="icon"> ?
        </div>
        <div v-if="isBrowserMin" @click="isBrowserMin = false">
          <img src="@/assets/icn/arrow-up.svg" alt="">
        </div>
      </template>
    </Header>
    <div class="container">
      <div class="item">
        <div class="row favourites">
          <input type="url" v-model="urlAddress" placeholder="Search or Type URL …" @keyup.enter="isBrowseEnable = true">
        </div>
      </div>
      <div class="item">
        <div class="row">
          <div class="icn">
            ↪
          </div>
          <h1 class="text">
            Aeternity aepps
          </h1>
        </div>
      </div>
      <div class="bottom">
        <div class="item"  v-for="bookmark in Bookmarks" :key="bookmark.name">
          <div class="row">
            <div class="logo">
              <div class="cirle" :class="bookmark.name">
              </div>
            </div>
            <div class="content">
              <p class="title">
                {{bookmark.name}}
              </p>
              <p class="url">
                {{bookmark.url}}
              </p>
            </div>
            <div class="options">
              <div class="optionsIcn">
                <img src="@/assets/icn/expandList.svg" alt="">
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quod dolorum. Minima quas hic aut modi! Omnis, impedit eius? Eum!
          </p>
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
import Header from '@/components/HeaderS'
import Navigation from '@/components/Navigation'
export default {
  components: {
    Header,
    Navigation
  },
  data () {
    return {
      scroll: false,
      urlAddress: '',
      isBrowseEnable: false,
      dropNav: false,
      isBrowserMin: false,
      Bookmarks: [
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
    handleScroll (event) {
      this.scroll = true
    },
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
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
.nav {
  height: 11%;
}
.is-scrolled {
  display: none;
}
.icon {
  width:40%;
}
.walletFav {
  background-color: #edf3f7;
  .header {
    width: 85vw;
    margin: 0 auto;
    justify-content: space-between;
  }
  .container {
   height: 85vh;
  //  height: auto;
  display: inline-block;
  overflow: auto;
    .item {
        margin: 5vh 0;
      .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        .icn {
            width: 17px;
            height: 24px;
            object-fit: contain;
            font-size: 17px;
            font-weight: bold;
            line-height: 1.41;
            letter-spacing: normal;
            color: #ff0070;
          }
          .text {
            width: 90%;
            font-size: 23px;
            font-weight: 500;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: #ff0070;
            text-align: left;
            margin: 0;
          }
        input {
          background: transparent;
          box-shadow: none;
          border:0;
          color: #203040;
          font-size: 17px;
          margin-left: 10px;
        }
      }
      .favourites {
          background-color: #f7fafc;
          height: 10vh;
          display: flex;
          align-items: center;
          border-radius: 5px;
      }
    }
    .bottom {
      background-color: #fff;
      border-radius: 10px;
      .item {
        margin: 5vw;
        .row {
          display: flex;
          align-items: center;
          border-top: 1px solid #edf3f7;
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
            &.Transactions {
              background: #e72b6e url('../assets/icn/reload.svg') no-repeat 50% 50%;
              padding: 2px;
              background-size: 50%;
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
            padding: 16px 0;
            flex: 3;
              p {
              margin: 0;
              font-size: 13px;
            }
          }
          .content .title {
            font-size: 15px;
          }
          .url {
            font-size: 13px;
          }
        }
        p {
          text-align: left;
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
</style>
