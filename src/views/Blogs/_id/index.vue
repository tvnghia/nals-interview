<template>
  <div class="u-mt-32">
    <h2 class="headline--lg">Blog detail</h2>

    <blog-item v-show="loaded" :blog="blog" />

    <img v-show="!loaded" width="50" class="u-mt-16" src="@/assets/images/loading-buffering.gif" alt="loading gif" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
const BlogItem = () => import('../-components/BlogItem')

export default {
  name: 'Blog',

  components: {
    BlogItem
  },

  data() {
    return {
      loaded: false
    }
  },

  computed: {
    ...mapState('blogs', ['blog'])
  },

  methods: {
    ...mapActions('blogs', ['getBlogDetail'])
  },

  created() {
    this.getBlogDetail(this.$route.params.id).finally(() => (this.loaded = true))
  }
}
</script>
