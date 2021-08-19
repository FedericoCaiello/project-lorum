<template>
    <div class="mb-12">
        <h2 class="text-6xl font-light text-grey-500 mb-4">
          Our Project
        </h2>
        <div class="flex flex-wrap justify-center lg:justify-between">
          <div class="relative mb-4 z-10">
            <g-image src="~/assets/img-project5.png" class=""></g-image>
              <div class="absolute top-0 bg-grey-600 opacity-75 z-20 h-full w-full flex flex-col justify-center items-start pl-10">
                <h2 class="text-white lg:text-6xl text-4xl font-bold w-6/12 mb-4">Sample project</h2>
                <p class="flex items-center text-white w-6/12">
                  VIEW MORE 
                  <g-image src="~/assets/arrow-white.png" class="mx-2"></g-image>
                </p>
              </div>
          </div>
          <div class="mb-4">
            <g-image src="~/assets/img-project3.png"></g-image>
          </div>
          <div class="mb-4 lg:mb-0">
            <g-image src="~/assets/img-project1.png"></g-image>
          </div>
          <div class="mb-4 lg:mb-0">
            <g-image src="~/assets/img-project4.png"></g-image>
          </div>
          <div class="mb-4 lg:mb-0">
            <g-image src="~/assets/img-project2.png"></g-image>
          </div>
        </div>
      </div>
</template>



<script>
import AppContainer from "~/components/AppContainer.vue";
import AppButton from "~/components/AppButton.vue";
export default {
  components: {
    AppContainer,
    AppButton,
  },
};
</script>