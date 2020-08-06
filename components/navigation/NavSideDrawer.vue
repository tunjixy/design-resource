<template>
  <div class="w-full overflow-y-auto relative">
    <div
      v-if="show"
      class="bg-black bg-opacity-75 h-full w-full z-40 fixed top-0 right-0"
      @click="$emit('close')"
    />
    <transition name="slide-side">
      <div
        v-show="show"
        class="h-full top-0 left-0 bg-dark-gray w-64 fixed z-50 flex flex-col overflow-y-auto"
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
    </transition>
  </div>
</template>

<script>
import categories from '~/json/categories.json'

export default {
  name: 'NavSideDrawer',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
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
