<template>
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
</template>

<script>
import categories from '~/json/categories.json'

export default {
  name: 'ResourceFilter',
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
