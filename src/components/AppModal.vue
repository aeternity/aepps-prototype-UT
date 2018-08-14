<template>
  <div class="appModal">
    <transition name="custom-classes-transition">
      <div v-if="visible" class="appModal__content" @click.self="closeModal">
        <div class="appModal__innerContent">
          <modal-account></modal-account>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import ModalAccount from '@/components/modal/ModalAccount'

export default {
  name: 'AppModal',
  components:{
    ModalAccount
  },
  computed: {
    ...mapState({
      visible: 'modalVisible',
      modalComponent: 'modalComponent'
    })
  },
  methods: {
    ...mapMutations([
      'closeModal'
    ])
  }
}
</script>
