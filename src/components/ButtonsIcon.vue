<template>
  <div class="space-x-4 lg:mb-12">
    <button-icon>
      <g-image src="~/assets/arrow-left.png" />
    </button-icon>
    <button-icon>
      <g-image src="~/assets/arrow-right.png" />
    </button-icon>
  </div>
</template>

<script>
import ButtonIcon from "~/components/ButtonIcon.vue";

export default {
  components: {
    ButtonIcon,
  },
};
</script>