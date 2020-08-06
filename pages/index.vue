<template>
  <div>
    <nav-side-drawer
      :show="toggleNav"
      @toggle="toggleResources"
      @close="toggleNav = false"
    />
    <div class="flex h-screen w-full">
      <!-- Side nav -->
      <nav-side-menu @toggle="toggleResources" />

      <!-- Main content -->
      <div class="w-full relative overflow-y-auto">
        <nav-header @toggle="toggleNav = true" @search="search" />
        <div class="py-8">
          <div class="container">
            <h1 class="text-center font-bold md:text-xl mb-12 trans-in">
              UI & UX Resources Curated for you
            </h1>
            <div
              v-show="filteredResources.length > 0"
              class="flex flex-wrap sm:-mx-2 mt-5"
            >
              <resource-block
                v-for="(resource, index) in filteredResources"
                :key="index"
                :resource="resource"
              />
            </div>
            <div v-show="filteredResources.length === 0" class="text-center">
              No results found for "{{ searchTerm }}"
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resources from '~/json/resources.json'

export default {
  data() {
    return {
      resources,
      searchTerm: '',
      selectedCategory: [],
      toggleNav: false,
    }
  },
  computed: {
    filteredResources() {
      if (this.selectedCategory.length > 0) {
        return this.resources.filter((resource) =>
          this.selectedCategory.includes(resource.CATEGORY)
        )
      } else if (this.searchTerm) {
        return this.resources.filter((resource) =>
          resource.NAME.toLowerCase().startsWith(this.searchTerm.toLowerCase())
        )
      } else {
        return this.resources
      }
    },
  },
  methods: {
    search(value) {
      this.searchTerm = value
    },
    toggleResources(category) {
      if (this.selectedCategory.includes(category.category)) {
        const index = this.selectedCategory.indexOf(category.category)
        if (index > -1) {
          this.selectedCategory.splice(index, 1)
        }
      } else {
        this.selectedCategory.push(category.category)
      }
    },
  },
}
</script>
