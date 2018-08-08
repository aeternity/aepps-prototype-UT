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
        <div v-if="!isBrowserMin" @click="minimaze">
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
      <h1 class="title">
        <img src="@/assets/icn/bookmark.svg" alt="">
        Favorites
      </h1>
      <ul class="bookmarkList" v-for="Bookmark in Bookmarks" :key="Bookmark.name">
        <li class="bookmarListItem">
          <div class="logo" @click=loadUrl(Bookmark.url)>
            <div class="cirle" :class="Bookmark.name">
            </div>
          </div>
          <div class="content">
            <p class="title">
              {{Bookmark.name}}
            </p>
            <p class="url">
              {{Bookmark.url}}
            </p>
          </div>
          <div class="options" @click="toggleOption(Bookmark)">
            <div class="optionsIcn">
              <img src="@/assets/icn/expandList.svg" alt="">
            </div>
            <div class="optionsDrop" v-if="Bookmark.drop === true">
              <!-- <div class="option"  @click="copy2Clip(Bookmark.url)"> -->
              <div class="option" @clipboard:copy="Bookmark.url" @click="doCopy(Bookmark.url)">
                <img src="@/assets/icn/copy.svg" alt="">
                <p>Copy URL</p>
                <input type="hidden" v-model="Bookmark.url">
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
        </li>
      </ul>
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
          iconPath: 'expandList.svg',
          name: 'Transfer',
          url: 'transfer.aepps.com',
          drop: false
        },
        {
          iconPath: '',
          name: 'Transactions',
          url: 'transactions.aepps.com',
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
      this.Bookmark = el
      return this.Bookmark
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
  .container {
  width: 85vw;
  margin: 0 auto;
  text-align: left;
  h1 {
  font-size: 23px;
  color: #ff0070;
  display: flex;
  }
  .bookmarkList {
    list-style: none;
    padding: 0;
    li {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
   }
  }
  .content {
    flex: 3;
    p {
      margin: 0;
    }
    p.title {
      color: #203040;
      font-weight: 500;
    }
  }
 }
}

.logo,
.options {
  flex: 1;
}
.logo {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
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
  }
  &.Transfer {
    background: #09bfad url('../assets/icn/contacts.svg') no-repeat 50% 50%;
    padding: 2px;
  }
  &.Contacts {
    background: #6948a0 url('../assets/icn/contacts.svg') no-repeat 50% 50%;
    padding: 2px;
  }
  &.Messages {
    background: #b300ff url('../assets/icn/chat.svg') no-repeat 50% 50%;
    padding: 2px;
  }
  &.Registrar {
    background: #929ca6 url('../assets/icn/globe.svg') no-repeat 50% 50%;
    padding: 2px;
  }
}
// .content {
//   flex: 3;
// }
// .content p {
//   margin: 0;
// }
// .content p.title {
//   color: #203040;
//   font-weight: 500;
// }
.options {
  display: flex;
  flex-direction: row;
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
  /* height: 100%; */
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
  margin: 0 auto;
  display: flex;
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
  input {
      background: transparent;
      box-shadow: none;
      border:0;
      color: #203040;
      font-size: 17px;
    }
    .minimaze {
      .header {
        display: none;
      }
      top: 100vh;
      transition: all 3s ease;
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
