<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
const MainLayout = () => import('@/layouts/MainLayout')

export default {
  name: 'App',

  components: {
    MainLayout
  }
}
</script>
