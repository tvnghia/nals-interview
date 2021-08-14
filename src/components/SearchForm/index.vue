<template>
  <input 
    @input="onSearch" 
    class="form-control u-w-300 u-mr-16" 
    type="text" 
    :value="currentSearchKey" />
</template>

<script>
import debounceSearch from '@/mixins/debounce-search'

export default {
  name: 'SearchForm',

  mixins: [debounceSearch],

  computed: {
    currentSearchKey() {
      return this.$route.query.search
    }
  },

  methods: {
    onSearch(e) {
      const TIME_DEBOUNCE = 1000
      this.handleDebounceSearch(this.emitValueSearch, e.target.value, TIME_DEBOUNCE)
    },

    emitValueSearch(searchKey) {
      this.$emit('on-search-blogs', searchKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.u-w-300 {
  width: 300px;
}
</style>
