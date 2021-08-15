<template>
  <ul class="nav">
    <router-link v-for="nav in navList" :key="nav.index" tag="li" class="nav__item" :to="nav.to" :exact="nav.exact">
      {{ nav.label }}
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'AppNavigation',

  computed: {
    navList() {
      const navList = [
        {
          to: '/',
          exact: true,
          label: 'Home'
        },

        {
          to: '/blogs',
          exact: false,
          label: 'Blogs'
        }
      ]
      return navList
    }
  }
}
</script>
