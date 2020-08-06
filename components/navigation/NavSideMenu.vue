<template>
  <div
    class="w-56 bg-secondary flex-none hidden md:flex md:flex-col md:justify-between overflow-y-hidden"
  >
    <h2 class="font-bold text-lg text-white mt-4 px-5">Filter Resources</h2>
    <div class="overflow-y-auto scrollbar mt-5">
      <div class="px-5">
        <label
          v-for="(category, index) in categories"
          :key="index"
          class="wrapper text-sm"
          :for="category.category"
        >
          {{ category.category }}
          <input
            :id="category.category"
            type="checkbox"
            :value="category.category"
            @click="toggleResources(category)"
          />
          <span class="checkmark" />
        </label>
      </div>
    </div>
    <theme-toggle />
  </div>
</template>

<script>
import categories from '~/json/categories.json'

export default {
  name: 'NavSideMenu',
  data() {
    return {
      categories,
    }
  },
  methods: {
    toggleResources(category) {
      this.$emit('toggle', category)
    },
  },
}
</script>
