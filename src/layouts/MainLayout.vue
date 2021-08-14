<template>
  <div>
    <app-header />
    
    <app-navigation />

    <slot />

    <app-footer />
  </div>
</template>

<script>
const AppHeader = () => import('@/layouts/-components/AppHeader')
const AppFooter = () => import('@/layouts/-components/AppFooter')
const AppNavigation = () => import('@/components/AppNavigation')

export default {
  name: 'MainLayout',

  components: {
    AppHeader,
    AppFooter,
    AppNavigation
  }
}
</script>
