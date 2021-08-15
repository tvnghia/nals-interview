<template>
  <div class="media u-mt-16">
    <img class="media__image" :src="blog.image" alt="blog image" />

    <div class="media__body">
      <p class="headline--md">{{ blog.title }}</p>
      <p class="u-mt-8">{{ blog.content }}</p>
      <p class="headline--sm u-mt-8">Created at: {{ $filters.moment_yyyy_mm_dd(blog.createdAt) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',

  props: {
    blog: {
      type: Object,
      require: true
    }
  }
}
</script>
