<template>
  <ul>
    <router-link
      tag="li"
      to="/"
      exact
    >
      Home
    </router-link>

    <router-link
      tag="li"
      to="/articles"
      exact
    >
      Articles
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>
