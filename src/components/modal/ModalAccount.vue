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
          <form action="">
            <div class="field">
              <input type="text" name="name" id="name" placeholder="My Play Account" v-on:keyup="enableButton = true">
              <label for="name">Name*</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <div class="btn" :disabled="enableButton">
            <a href="#" class="btn_link"> Create account </a>
          </div>
        </div>
        <button class="modalAccount__cancel" @click="closeModal">Cancel</button>
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
    ...mapMutations(['closeModal'])
  }
}
</script>
<style lang="scss" scoped>
form {
  height: 10%;
  background-color: #f7fafc;
}

.field {
  width: 65vw;
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
}

label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  font-size: 1.5em;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  border-radius: 0;
  padding: 0;
  cursor: text;
  caret-color: #ff0d6a;
}

input:focus {
  outline: 0;
}

input:placeholder-shown + label {
  cursor: text;
  transform-origin: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translate(0, 1.5rem) scale(1.5);
  color: #76818c;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(-80px, 5px);
  cursor: pointer;
  margin: 0;
  color: #b300ff;
}

::placeholder {
  opacity: 0;
  transition: inherit;
}

input:focus::placeholder {
  opacity: 1;
}

form:active,
form:focus,
form:hover {
  box-shadow: inset 4px 0px #b300ff;
}

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
}

.modal-wrapper {
  width: 85vw;
  margin: 0 auto;
  z-index: 9;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(27, 68, 121, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-evenly;
}

.modal-title {
  width: 90%;
  height: 56px;
  font-size: 23px;
  font-weight: 500;
  line-height: 1.22;
  letter-spacing: -0.5px;
  color: #203040;
  text-align: left;
}

.modal-title__secondary {
  color: #ff0070;
}

.modal-container {
  height: 311px;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(27, 68, 121, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.icn {
  padding-top: 20px;
  width: 17px;
  height: 24px;
  object-fit: contain;
  font-size: 17px;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: normal;
  color: #203040;
}

input {
  line-height: 1.41;
  background-color: #f7fafc;
  font-size: 17px;
  display: inline-block;
  border: 0;
  border-radius: 5px;
  color: #76818c;
  transform: translate(0, 10px);
  margin-left: 7%;
}

.btn {
  width: 269px;
  height: 56px;
  opacity: 0.2;
  border-radius: 32px;
  background-color: #ff0d6a;
  box-shadow: 0 0 16px 0 rgba(27, 68, 121, 0.15);
  display: flex;
  flex-direction: column;
}

.btn_link {
  text-decoration: none;
  padding-top: 20px;
  height: 16px;
  opacity: 0.2;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.23;
  letter-spacing: 1.3px;
  color: #ffffff;
}
.btn[disabled] {
  opacity: inherit;
}
</style>
