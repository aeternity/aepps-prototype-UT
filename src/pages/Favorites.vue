<template>
  <div class="favorites">
    <Header>
      <template slot="page-name">
        <div>
          <input type="url" v-model="urlAddress" placeholder="Type URL …" @keyup.enter="isBrowseEnable = true">
        </div>
      </template>
      <template slot="nav">
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
        <router-link to="settings" v-if="!isBrowseEnable">
          <img src="@/assets/icn/settings.svg" alt="">
        </router-link>
        <router-link to="/" v-if="!isBrowseEnable">
          <img src="@/assets/icn/list.svg" alt="">
        </router-link>
        <div v-if="!isBrowserMin && isBrowseEnable" @click="minimaze">
          <img src="@/assets/icn/list.svg" alt="">
        </div>
        <div v-if="isBrowserMin" @click="isBrowserMin = false">
          <img src="@/assets/icn/arrow-up.svg" alt="">
        </div>
        <router-link class="avatar" to="accounts">
          <ae-identity-avatar address='ak$G2CCeMjQffK5K21lIun3GzAuN13vhAfcKBrUPSKhSQ8RcgHP1e'>
          </ae-identity-avatar>
        </router-link>
      </template>
    </Header>
    <div class="container">
      <div class="top">
        <div class="row call-to-action">
          <div class="img">
            <div class="cirle Transfer"></div>
          </div>
          <div class="content">
            <p class="title">
              Transfer
            </p>
            <p>
              send and request funds
            </p>
          </div>
        </div>
        <router-link to="/transactions">
          <div class="row call-to-action">
          <div class="img">
            <div class="cirle Transactions"></div>
          </div>
          <div class="content">
            <p class="title">
              Transactions
            </p>
            <p>
              view past transactions
            </p>
          </div>
        </div>
        </router-link>
      </div>
      <h1 class="title">
        <img src="@/assets/icn/bookmark.svg" alt="">
        Favorites
      </h1>
      <div class="bookmarkList" v-for="bookmark in Bookmarks" :key="bookmark.name">
        <div class="bookmarListItem">
          <div class="logo" @click=loadUrl(bookmark.url)>
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
      </div>
    </div>
    <div :class="{minimaze: isBrowserMin}" class="iframe" id="iframe" v-if="isBrowseEnable">
      <iframe :src=urlChange frameborder="0" width="100%"></iframe>
    </div>
  </div>
</template>

<script>
import { AeIdentityAvatar } from '@aeternity/aepp-components'
import Header from '@/components/Header'

export default {
  components: {
    Header, AeIdentityAvatar
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
.favorites {
  .top {
    margin: 5vh 0;
    a {
      text-decoration: none;
    }
  }
  .container {
  width: 80vw;
  margin: 0 auto;
  text-align: left;
  h1 {
    font-size: 23px;
    color: #ff0070;
    display: flex;
    font-weight: normal;
    position: relative;
    left: -5vw;
    align-items: center;
    img {
      height: 16px;
      width: 16px;
    }
  }
  .bookmarkList {
    list-style: none;
    padding: 0;
    &> div {
      display: flex;
      flex-direction: row;
      padding: 20px 0;
      border-top: 2px solid #edf3f7;
      }
    }
    .content {
      flex: 2;
      p {
        margin: 0;
      }
      p.title {
        color: #203040;
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
  input {
    background: transparent;
    box-shadow: none;
    border:0;
    color: #203040;
    font-size: 17px;
  }
}
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
.logo .cirle{
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
  &.Transfer {
    background: #09bfad url('../assets/icn/contacts.svg') no-repeat 50% 50%;
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
  display: flex;
  cursor: pointer;
  flex-direction: row-reverse;
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
}
.content .title {
  font-size: 15px;
}
.url {
  font-size: 13px;
}
.avatar {
  border-radius: 50%;
  display: flex;
  align-items: center;
  div {
    width: 24px;
    height: 24px;
  }
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
.call-to-action {
  display: flex;
  background-color: #edf3f7;
  margin: 2vh 0;
  padding: 11px 0 11px 9px;
  border-radius: 4px;
  .img {
    flex: .38;
    .cirle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .content {
    flex: 3;
    h3 {
    color: #203040;
    margin: 0;
    font-size: 15px;
    font-weight: 50;
    }
    p {
    color: #76818c;
    font-size: 13px;
    }
  }
}
</style>
