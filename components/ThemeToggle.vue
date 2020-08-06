<template>
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
</template>

<script>
export default {
  name: 'ThemeToggle',
  computed: {
    theme() {
      return this.$colorMode.value === 'light' ? 'far fa-moon' : 'far fa-sun'
    },
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      // this.$emit('close')
    },
  },
}
</script>
