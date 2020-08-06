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
        <div class="mt-5 mb-5 w-full px-5">
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
  computed: {
    theme() {
      return this.$colorMode.value === 'light' ? 'far fa-moon' : 'far fa-sun'
    },
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      this.$emit('close')
    },
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
