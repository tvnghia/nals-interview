<template>
  <div class="u-mt-32">
    <h1 class="headline--lg">My blogs</h1>

    <div class="u-flex u-items-center u-mt-16">
      <search-form @on-search-blogs="onSearchBlogs" />
      <pagination @on-click-pagination="onClickPagination" />
    </div>

    <sort-form @on-sort-blogs="onSortBlogs" />

    <ul v-if="blogs.length > 0" class="u-pt-40">
      <router-link 
        v-for="item in blogs" 
        :key="item.id" 
        class="media"
        tag="li"
        :to="`/blogs/${item.id}`"
        exact
      >
        <img class="media__image" :src="item.image" alt="image" />
        <div class="media__body">
          <p class="headline--md">{{ item.title }}</p>
          <p class="u-mt-8">{{ item.content }}</p>
          <p class="headline--sm u-mt-8">Created at: {{ $filters.moment_yyyy_mm_dd(item.createdAt) }}</p>
        </div>
      </router-link>
    </ul>

    <p v-else class="u-mt-16 headline--md">Have no blogs</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import SearchForm from '@/components/SearchForm'
import SortForm from '@/components/SortForm'

import { deepCopy } from '@/helpers/json-parser'

export default {
  name: 'Blogs',

  components: {
    Pagination,
    SearchForm,
    SortForm
  },

  data() {
    return {
      paramsRequest: {
        page: this.$route.query.page || 1,
        search: this.$route.query.search || '',
        sortBy: this.$route.query.sortBy === 'none' ? '' : this.$route.query.sortBy,
        order: this.$route.query.order || ''
      }
    }
  },

  computed: {
    ...mapState('blogs', ['blogs'])
  },

  methods: {
    ...mapActions('blogs', ['getBlogs']),

    updateParamsRequest(queryKey) {
      this.$router.push({ query: { ...this.$route.query, ...queryKey } })
      this.paramsRequest = Object.assign(this.paramsRequest, queryKey)
    },

    onClickPagination(page) {
      this.updateParamsRequest({ page })
    },

    onSearchBlogs(searchKey) {
      this.updateParamsRequest({ search: searchKey, page: 1 })
    },

    onSortBlogs(sortKey) {
      const sortBy = sortKey === 'none' ? '' : 'createdAt'
      this.updateParamsRequest({ sortBy, order: sortKey  })
    }
  },

  watch: {
    paramsRequest: {
      handler(value) {
        this.getBlogs(deepCopy(value))
      },

      deep: true
    }
  },

  created() {
    if (!this.$route.query.page) this.$router.push({ query: { ...this.$route.query, page: 1 } })

    this.getBlogs(this.paramsRequest)
  }
}
</script>
