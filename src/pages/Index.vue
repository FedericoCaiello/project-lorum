<template>
  <div>
    <app-navbar />
    <app-container>
      <div class="lg:flex lg:mb-24">
        <div class="lg:w-4/12">
          <main-title />
          <button-icon />
        </div>
        <div class="lg:w-8/12 relative">
          <g-image src="~/assets/bg-hero.png" class="object-cover w-full" />
          <app-button class="absolute inset-x-0 bottom-0">
            VIEW PROJECT
          </app-button>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="bg-grey-700 flex">
          <div class="lg:w-7/12 flex">
            <div>
              <g-image src="~/assets/glass-palace2.png"></g-image>
              <g-image src="~/assets/glass-palace3.png"></g-image>
            </div>
            <g-image src="~/assets/glass-palace1.png"></g-image>
          </div>
          <div class="lg:w-5/12">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              reprehenderit magnam. Praesentium, fugiat excepturi. Ipsam
              laboriosam totam tempore excepturi harum autem, itaque eveniet
              mollitia, asperiores quod officiis. Doloribus, dicta voluptate!
            </p>
            <app-button>READ MORE</app-button>
          </div>
        </div>
      </div>
    </app-container>
  </div>
</template>

<script>
import AppNavbar from "~/components/AppNavbar.vue";
import MainTitle from "~/components/MainTitle.vue";
import ButtonIcon from "~/components/ButtonIcon.vue";
import AppButton from "~/components/AppButton.vue";
import AppContainer from "~/components/AppContainer.vue";

export default {
  components: {
    AppNavbar,
    MainTitle,
    ButtonIcon,
    AppButton,
    AppContainer,
  },
};
</script>

<style>
</style>
