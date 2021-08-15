<template>
  <input class="form-control u-w-300 u-mr-16" type="text" v-model="valueSearch" />
</template>

<script>
import debounceSearch from '@/mixins/debounce-search'

const TIME_DEBOUNCE = 1000

export default {
  name: 'SearchForm',

  mixins: [debounceSearch],

  data() {
    return {
      valueSearch: this.$route.query.search || ''
    }
  },

  watch: {
    valueSearch: {
      handler(value) {
        // redirect to page 1 when searching
        this.handleDebounceSearch(
          () => this.$emit('on-search-blogs', { search: encodeURI(value), page: 1 }),
          value,
          TIME_DEBOUNCE
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.u-w-300 {
  width: 300px;
}
</style>
