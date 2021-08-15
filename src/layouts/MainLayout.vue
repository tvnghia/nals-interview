<template>
  <div>
    <app-navigation />
    <slot />
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'

export default {
  name: 'MainLayout',

  components: {
    AppNavigation
  }
}
</script>
