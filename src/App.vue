<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',

  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
#app {
  margin: 0 64px;
}
</style>
