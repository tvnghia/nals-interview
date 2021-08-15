<template>
  <div class="sort-form u-mt-16">
    <p class="sort-form__title">Sort blogs:</p>

    <div v-for="option in sortOption" :key="option.index" class="u-flex u-items-center">
      <input type="radio" name="sort_blogs" :id="option.id" :value="option.value" v-model="picked" />

      <label :for="option.id">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
import { SORT_RADIOS } from './constant'

export default {
  name: 'SortForm',

  props: {
    value: {
      type: String,
      default: 'asc'
    }
  },

  data() {
    return {
      sortOption: SORT_RADIOS,
      picked: this.value
    }
  },

  watch: {
    picked: {
      handler(value) {
        this.$emit('input', value)
      }
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
