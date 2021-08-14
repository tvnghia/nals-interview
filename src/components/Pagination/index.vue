<template>
  <ul class="pagination">
    <li 
      v-for="item in PAGINATION" 
      :key="item.index" 
      @click="onClickPagination(item.page)" 
      :class="['pagination__item', { disabled: item.disabled, active: item.active }]"
    >
      <a class="pagination__link">{{ item.page }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',

  data() {
    return {
      // PAGINATION
    }
  },

  computed: {
    PAGINATION() {
      let PAGINATION = []
      for (let i = 0; i < 5; i++) {
        PAGINATION.push({
          disabled: false,
          active: parseInt(this.$route.query.page) === i + 1,
          page: i + 1
        })
      }
      return PAGINATION
    }
  },

  methods: {
    onClickPagination(page) {
      if (page === parseInt(this.$route.query.page)) return
      
      this.PAGINATION.forEach((item) => {
        item.active = false
      })
      this.PAGINATION[page - 1].active = true
      this.$emit('on-click-pagination', page)
    }
  }
}
</script>
