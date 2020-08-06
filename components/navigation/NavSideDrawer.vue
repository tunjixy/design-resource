<template>
  <div class="w-full overflow-y-auto relative">
    <div
      v-if="show"
      class="bg-black bg-opacity-75 h-full w-full z-40 fixed top-0 right-0"
      @click="$emit('close')"
    />
    <transition name="slide-side">
      <div
        v-if="show"
        class="h-full top-0 left-0 bg-dark-gray w-64 fixed z-50 flex flex-col overflow-y-auto"
      >
        <h2 class="font-bold text-lg text-white mt-4 px-5">Filter Resources</h2>
        <resource-filter @toggle="toggleResources" />
        <theme-toggle />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NavSideDrawer',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleResources(category) {
      this.$emit('toggle', category)
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active i {
  @apply text-primary;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}

.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
