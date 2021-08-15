<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      :key="page.index"
      @click="clickPagination(page.page)"
      :class="['pagination__item', { active: page.active }]"
    >
      <a class="pagination__link">{{ page.page }}</a>
    </li>
  </ul>
</template>

<script>
const PAGE_TOTAL_DUMMY = 5

export default {
  name: 'Pagination',

  props: {
    value: {
      type: Number,
      require: true
    }
  },

  computed: {
    pages() {
      const pages = []
      for (let i = 0; i < PAGE_TOTAL_DUMMY; i++) {
        pages.push({
          active: this.currentPage === i + 1,
          page: i + 1
        })
      }
      return pages
    },

    currentPage() {
      return parseInt(this.$route.query.page)
    }
  },

  methods: {
    clickPagination(page) {
      if (page === this.currentPage) return

      this.$emit('input', page)
    }
  }
}
</script>
