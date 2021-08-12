<template>
  <div class="px-5">
    <app-navbar />
    <div class="lg:flex container mx-auto">
      <div class="lg:w-4/12">
        <main-title />
        <button-icon />
      </div>
      <div class="lg:w-8/12 relative">
        <g-image src="~/assets/bg-hero.png" />
        <app-button>
          VIEW PROJECT
        </app-button>
      </div>
    </div>
  </div>
  
</template>

<script>

import AppNavbar from "~/components/AppNavbar.vue";
import MainTitle from "~/components/MainTitle.vue";
import ButtonIcon from "~/components/ButtonIcon.vue";
import AppButton from "~/components/AppButton.vue";
export default {
  components: {
    AppNavbar,
    MainTitle,
    ButtonIcon,
    AppButton,
  },
};
</script>

<style>

</style>
