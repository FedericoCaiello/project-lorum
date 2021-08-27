<template>
  <button
    class="px-8 py-4 flex items-center text-xs"
    :class="{
      'bg-white text-gray-600': variant === 'primary',
      'bg-gray-600 text-white': variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      validator: (value) => ["primary", "secondary"].includes(value),
      default: "primary",
    },
  },
};
</script>

