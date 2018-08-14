<template>
  <div class="appModal">
    <transition name="custom-classes-transition">
      <div v-if="visible" class="appModal__content" @click.self="closeModal">
        <div class="appModal__innerContent">
          <component :is="component" />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppModal',
  data () {
    return {
      component: null
    }
  },
  computed: {
    ...mapState({
      visible: 'modalVisible',
      modalComponent: 'modalComponent'
    })
  },
  watch: {
    modalComponent (componentName) {
      if (!componentName) return
      Vue.component(componentName, () => import('./modal/ModalAccount'))
      this.component = componentName
    }
  },
  methods: {
    ...mapMutations([
      'closeModal'
    ])
  }
}
</script>
