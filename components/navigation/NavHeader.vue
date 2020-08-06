<template>
  <header
    class="w-full sticky top-0 px-6 py-2 shadow bg-white dark:bg-dark-gray trans-in h-16 flex items-center justify-between z-30"
  >
    <div class="flex items-center mr-4">
      <svg
        class="fill-current cursor-pointer flex md:hidden mr-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        @click="$emit('toggle')"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
      <nuxt-link to="/" class="text-lg font-bold hidden sm:block">
        Design
        <span class="text-primary">Resource.</span>
      </nuxt-link>
      <nuxt-link to="/" class="text-lg font-bold sm:hidden">
        .D<span class="text-primary">R.</span>
      </nuxt-link>
    </div>
    <resource-search @search="search" />
  </header>
</template>

<script>
export default {
  name: 'NavHeader',
  methods: {
    search(value) {
      this.$emit('search', value)
    },
  },
}
</script>
