<template>
  <a
    :href="resource.LINK"
    target="_blank"
    :title="resource.NAME"
    :aria-label="resource.Name"
    class="w-full flex sm:px-2 mb-8 sm:w-1/2 lg:w-1/3"
  >
    <div
      class="w-full flex flex-col h-auto card trans-in py-4 px-6 transform hover:-translate-y-3 duration-300 ease-in hover:shadow-2xl"
    >
      <img
        class="block mx-auto rounded-lg shadow-lg overflow-hidden h-10 w-10 -mt-8"
        :src="resource.IMAGE_URL"
        :alt="resource.NAME"
      />
      <div class="flex-grow">
        <h3 class="font-bold text-center mt-3">{{ resource.NAME }}</h3>
        <p
          class="text-gray-600 dark:text-gray-light text-sm leading-relaxed text-center"
        >
          {{ resource.DESCRIPTION }}
        </p>
      </div>
      <div
        class="mx-auto mt-3 shadow-md text-xs font-bold text-primary bg-accent rounded-full py-1 px-3"
      >
        {{ resource.CATEGORY }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ResourceBlock',
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
}
</script>
