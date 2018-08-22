<template>
  <div class="modalAccount">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <div class="icn">
              ↪
            </div>
            <h1 class="modal-title">Name your
              <span class="modal-title__secondary">new account</span>
            </h1>
          </div>
          <div class="modal-body">
            <form action="" class="form">
              <div class="field">
                <input type="text" name="fullname" id="fullname" placeholder="My Play Account" v-on:keyup="enableButton = true" v-model="account.name" class="input">
                <label for="fullname" class="label">Name*</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="btn" :disabled="enableButton">
              <a href="#" class="btn_link" @click="registerAcc(account.name)"> Create account </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ModalAccount',
  data () {
    return {
      enableButton: false
    }
  },
  methods: {
    ...mapMutations(['closeModal']),
    registerAcc: function (name) {
      this.$store.dispatch('addNewAcc', name)
      this.account.name = ''
      this.$store.commit('closeModal')
    }
  },
  computed: {
    account () {
      return this.$store.state.account
    }
  }
}
</script>
<style lang="scss" scoped>
.modalAccount {
  .modal {
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22;
    justify-content: space-around;
    background-image: linear-gradient(
      rgba(237, 243, 247, 0.9),
      rgba(237, 243, 247, 0.9)
    );
    .modal-wrapper {
      width: 85vw;
      margin: 0 auto;
      border-radius: 4px;
      box-shadow: 0 0 8px 0 rgba(27, 68, 121, 0.15);
      .modal-container {
        min-height: 50vh;
        background-color: #ffffff;
        box-shadow: 0 0 8px 0 rgba(27, 68, 121, 0.15);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .modal-header {
          display: flex;
          justify-content: space-evenly;
          align-items:flex-start;
          .icn {
            width: 17px;
            height: 24px;
            object-fit: contain;
            font-size: 17px;
            font-weight: bold;
            line-height: 1.41;
            letter-spacing: normal;
            color: #203040;
          }
          .modal-title {
            width: 90%;
            font-size: 23px;
            font-weight: 500;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: #203040;
            text-align: left;
            margin:0;
            .modal-title__secondary {
              color: #ff0070;
            }
          }
        }
        .modal-body {
          .form {
            width:65vw;
            height: 10%;
            background-color: #f7fafc;
            padding: 2vh 0;
            .field {
              display: flex;
              flex-flow: column-reverse;
              margin-bottom: 1em;
              .label, .input {
                transition: all 0.2s;
                touch-action: manipulation;
              }
              .input {
                font-size: 1.5em;
                border: 0;
                font-family: inherit;
                border-radius: 5px;
                padding: 0;
                cursor: text;
                caret-color: #ff0d6a;
                background-color: #f7fafc;
                display: inline-block;
                color: #76818c;
                transform: translate(0, 0.6em);
              }
              .input:focus {
                outline: 0;
                margin-left: 4%;
              }
              .input:placeholder-shown + .label {
                cursor: text;
                max-width: 30%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                transform-origin: left bottom;
                transform: translate(0, 1.5rem) scale(1.5);
                color: #76818c;
              }
              ::placeholder {
                opacity: 0;
                transition: inherit;
              }
              .input:focus::placeholder {
                opacity: 1;
              }
              .input:not(:placeholder-shown) + .label,
              .input:focus + .label {
                transform: translate(0, 0) scale(1);
                cursor: pointer;
                margin: 0;
                margin-right: 11em;
                color: #b300ff;
              }
            }
          }
          .form:active,
          .form:focus,
          .form:hover {
            box-shadow: inset 4px 0px #b300ff;
          }
        }
        .modal-footer {
          .btn {
            width: 65vw;
            height: 8vh;
            opacity: 0.2;
            border-radius: 32px;
            background-color: #ff0d6a;
            box-shadow: 0 0 16px 0 rgba(27, 68, 121, 0.15);
            display: flex;
            flex-direction: column;
            .btn_link {
                        text-decoration: none;
                        padding-top: 20px;
                        height: 16px;
                        font-size: 13px;
                        font-weight: bold;
                        line-height: 1.23;
                        letter-spacing: 1.3px;
                        color: #ffffff;
                      }
            .btn[disabled] {
              opacity: inherit;
            }
          }
        }
      }
    }
  }
}
</style>
