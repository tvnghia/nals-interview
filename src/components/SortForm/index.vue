<template>
  <div class="sort-form u-mt-16">
    <p class="sort-form__title">Sort blogs:</p>

    <div 
      v-for="item in sortOption" 
      :key="item.index" 
      class="u-flex u-items-center"
    >
      <input 
        type="radio" 
        name="sort_blogs"
        :id="item.value"
        :value="item.value"
        v-model="picked" />

      <label :for="item.value">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
import { SORT_RADIOS } from './constant'

export default {
  name: 'SortForm',

  data() {
    return {
      sortOption: SORT_RADIOS,
      picked: 'none'
    }
  },

  watch: {
    picked: {
      handler(value) {
        this.$emit('on-sort-blogs', value)
      },

      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-form {
  font-size: 14px;

  &__title {
    font-size: 18px;
    font-weight: 500;
  }

  input {
    margin-right: 4px;
  }

  &,
  input,
  label {
    cursor: pointer;
  }
}
</style>
