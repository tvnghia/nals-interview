<template>
  <ul class="nav">
    <router-link tag="li" class="nav__item" to="/" exact> Home </router-link>
    <router-link tag="li" class="nav__item" to="/blogs"> Blogs </router-link>
  </ul>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>
