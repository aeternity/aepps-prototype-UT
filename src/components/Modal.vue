<template>
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
          <div>
            <input type="text" value="Name*">
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn"> Create account </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, default: '' },
    value: { type: [String, Number, Boolean], default: '' }
  }
}
</script>
<style lang="scss" scoped>
  .modal-wrapper {
    width: 85vw;
    margin: 0 auto;
    position: fixed;
    z-index: 9;
    top: 15%;
    border-radius: 4px;
    box-shadow: 0 0 100vh 100vw rgba(255,255,255,.7);
    
  }

  .modal-wrapper {
    margin: 0 auto;
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
    width: 271px;
    height: 64px;
    background-color: #f7fafc;
    font-size: 17px;
    display: inline-block;
    border: 0;
    border-radius: 5px;
    color: #76818c;
    line-height: 1.41;
  }

  .modal-footer {
    width: 269px;
    height: 56px;
    opacity: 0.2;
    border-radius: 32px;
    background-color: #ff0d6a;
    box-shadow: 0 0 16px 0 rgba(27, 68, 121, 0.15);
  }

  .btn {
    padding-top: 20px;
    height: 16px;
    opacity: 0.2;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.23;
    letter-spacing: 1.3px;
    color: #ffffff;
  }
</style>
