<template>
  <div class="relative">
    <input
      class="bg-white dark:bg-dark-gray-light trans-in shadow rounded-full py-2 px-10 w-full outline-none focus:shadow-outline-primary"
      type="search"
      placeholder="Search resource"
      @input="search"
    />
    <i class="fas fa-search absolute text-sm" style="top: 35%; left: 15px;" />
  </div>
</template>

<script>
export default {
  name: 'ResourceSearch',
  methods: {
    search(e) {
      this.$emit('search', e.target.value)
    },
  },
}
</script>
