<template>
  <div class="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
        </div>
        <div class="modal-body">
          <slot name="body">
            <div>
              <input type="text">
            </div>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">
              ok
            </button>
          </slot>
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
  .modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #ff0d6a;
    transition: all 0.3s ease;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-container,
  .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  input {
    font-size: 17px;
    display: inline-block;
    background: transparent;
    color: white;
    box-shadow: 0;
    border: 0;
    width: 100%;
    border-bottom: 1px solid white;
  }
</style>