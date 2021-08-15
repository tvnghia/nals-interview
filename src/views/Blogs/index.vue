<template>
  <div class="u-mt-32">
    <h1 class="headline--lg">My blogs</h1>

    <div class="u-flex u-items-center u-mt-16">
      <search-form @on-search-blogs="updateParamsRequest($event)" />
      <pagination v-model="paramsRequest.page" />
    </div>

    <sort-form v-model="paramsRequest.order" />

    <ul v-if="blogs.length > 0" class="u-pt-40">
      <router-link v-for="item in blogs" :key="item.id" class="media" tag="li" :to="{ path: `blogs/${item.id}` }" exact>
        <blog-item :blog="item" />
      </router-link>
    </ul>

    <p v-else class="u-mt-16 headline--md">Have no blog</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
const Pagination = () => import('@/components/Pagination')
const SearchForm = () => import('@/components/SearchForm')
const SortForm = () => import('@/components/SortForm')
const BlogItem = () => import('./-components/BlogItem')

export default {
  name: 'Blogs',

  components: {
    Pagination,
    SearchForm,
    SortForm,
    BlogItem
  },

  data() {
    return {
      paramsRequest: {
        page: parseInt(this.$route.query.page) || 1,
        search: this.$route.query.search || '',
        order: this.$route.query.order || 'asc'
      }
    }
  },

  computed: {
    ...mapState('blogs', ['blogs'])
  },

  methods: {
    ...mapActions('blogs', ['getBlogs']),

    updateParamsRequest(queryKey) {
      this.paramsRequest = Object.assign(this.paramsRequest, queryKey)
    }
  },

  watch: {
    paramsRequest: {
      handler(val) {
        this.$router.push({ query: { ...this.$route.query, ...val } }).catch(() => {})
        this.getBlogs(val)
      },
      deep: true,
      immediate: true
    }
  },

  created() {
    if (!this.$route.query.page) this.$router.push({ query: { ...this.$route.query, page: 1 } })
  }
}
</script>
