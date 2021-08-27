<template>
  <div class="relative group h-56 text-white">
    <div class="absolute inset-0 bg-gray-700 bg-opacity-90 hidden group-hover:block p-5">
      <h1 class="text-4xl lg:text-6xl font-bold">{{title}}</h1>
      <g-link>View More</g-link>
    </div>
    <slot />
  </div>
</template>

<script>


export default {
  props: {
    title: {
      type: String,
      required: true
    },
  },
};
</script>

