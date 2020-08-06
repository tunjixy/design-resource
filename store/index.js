import categories from '@/json/categories'
import resources from '@/json/resources'

export const strict = false

export const state = () => ({
  selectedCategory: [],
  categories,
  resources,
})

export const mutations = {
  makeFilter(state, category) {
    if (category.checked) {
      state.selectedCategory.push(category.category)
    } else if (state.selectedCategory.includes(category.category)) {
      const index = state.selectedCategory.indexOf(category.category)
      if (index > -1) {
        state.selectedCategory.splice(index, 1)
      }
    }

    state.categories.forEach((c, index) => {
      if (index === category.index) {
        c.check = category.checked
      }
    })
  },
}

export const getters = {
  resources(state) {
    return state.resources
  },
  categories(state) {
    return state.categories
  },
  selectedCategory(state) {
    return state.selectedCategory
  },
}
