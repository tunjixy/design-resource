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
    <div class="mt-5 mb-4 w-full px-5">
      <ui-button
        title="Toggle Theme"
        secondary
        raised
        rounded
        full
        class="text-white"
        @click="toggleTheme"
      >
        <i :class="theme" class="mr-2" />
        {{ $colorMode.value === 'light' ? 'Dark' : 'Light' }}
      </ui-button>
    </div>
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
  computed: {
    theme() {
      return this.$colorMode.value === 'light' ? 'far fa-moon' : 'far fa-sun'
    },
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    toggleResources(category) {
      this.$emit('toggle', category)
    },
  },
}
</script>
