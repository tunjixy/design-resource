<template>
  <div class="overflow-y-auto scrollbar mt-5">
    <div class="px-5">
      <label
        v-for="(category, index) in categories"
        :key="index"
        class="wrapper text-sm"
        :for="index"
      >
        {{ category.category }}
        <input
          :id="index"
          type="checkbox"
          :checked="category.check"
          @change="selectCategory(category, index)"
        />
        <span class="checkmark" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceFilter',
  computed: {
    categories() {
      return this.$store.getters.categories
    },
  },
  methods: {
    selectCategory(category, index) {
      this.$store.commit('makeFilter', {
        category: category.category,
        checked: (category.check = !category.check),
        index,
      })
    },
  },
}
</script>
