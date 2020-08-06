<template>
  <div
    class="w-56 bg-secondary flex-none hidden md:flex md:flex-col md:justify-between overflow-y-hidden"
  >
    <h2 class="font-bold text-lg text-white mt-4 px-5">Filter Resources</h2>
    <resource-filter @toggle="toggleResources" />
    <theme-toggle />
  </div>
</template>

<script>
export default {
  name: 'NavSideMenu',
  methods: {
    toggleResources(category) {
      this.$emit('toggle', category)
    },
  },
}
</script>
