<template>
  <div class="u-mt-32">
    <p class="headline--lg">Blog detail</p>

    <div 
      v-if="isLoading" 
      class="media u-mt-16"
    >
      <img class="media__image" :src="blog.image" alt="image">

      <div class="media__body">
        <p class="headline--md">{{ blog.title }}</p>
        <p class="u-mt-8">{{ blog.content }}</p>
        <p class="headline--sm u-mt-8">Created at: {{ $filters.moment_yyyy_mm_dd(blog.createdAt) }}</p>
      </div>
    </div>
    
    <img 
      v-else
      width="50" 
      class="u-mt-16" 
      src="../../assets/images/loading-buffering.gif" 
      alt="loading gif" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Blog',

  data() {
    return {
      isLoading: false
    }
  },

  computed: {
    ...mapState('blogs', ['blog'])
  },

  methods: {
    ...mapActions('blogs', ['getBlogDetail'])
  },

  created() {
    this.getBlogDetail(this.$route.params.id)
      .finally(() => {
        setTimeout(() => {
          this.isLoading = true
        }, 1000)
      })
  }
}
</script>
