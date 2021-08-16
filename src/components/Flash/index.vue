<template>
  <div v-if="!!message.message" :class="`notification notification--${message.variant}`">
    <p class="notification__title">{{ message.message }}</p>

    <button class="btn" @click="CLEAR_FLASH_MESSAGE">X</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Flash',

  computed: {
    ...mapState('flash', ['message'])
  },

  methods: {
    ...mapMutations('flash', ['CLEAR_FLASH_MESSAGE'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/shared/_mixins';

.notification {
  @include flexbox(space-between, center);
  position: fixed;
  background-color: #ffb1bc;
  padding: 10px;
  border-radius: 4px;
  bottom: 32px;
  left: 64px;

  &__title {
    font-size: 14px;
    white-space: nowrap;
    margin-right: 8px;
  }

  &--danger {
    background-color: #ffb1bc;
  }

  // &--sucess {
    // for success action
  // }
}
</style>
