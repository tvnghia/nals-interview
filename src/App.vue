<template>
  <div id="app">
    <main-layout>
      <router-view />
      <flash />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
const Flash = () => import('@/components/Flash')

export default {
  name: 'App',

  components: {
    MainLayout,
    Flash
  }
}
</script>

<style lang="scss">
#app {
  margin: 0 64px;
}
</style>
