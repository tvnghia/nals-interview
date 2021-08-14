<template>
  <div>
    <app-navigation />
    <slot />
  </div>
</template>

<script>
const AppNavigation = () => import('@/components/AppNavigation')

export default {
  name: 'MainLayout',

  components: {
    AppNavigation
  }
}
</script>
