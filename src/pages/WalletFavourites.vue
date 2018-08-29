<template>
  <div class="walletFav">
    <Header>
      <template slot="page-name">
        {{this.$route.name}}
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
      urlAddress: '',
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
  }
}
</script>
<style lang="scss" scoped>
.walletFav {
  background-color: #edf3f7;
  .header {
    width: 85vw;
    margin: 0 auto;
    justify-content: space-between;
  }
  .container {
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
</style>
