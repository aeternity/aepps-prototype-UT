<template>
  <div class="pageHome">
    <button class="pageHome__create" @click="showModal('ModalAccount')">
      Create new acc
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PageHome',
  methods: {
    ...mapMutations(['showModal'])
  }
}
</script>
