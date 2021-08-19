<template>
  <div>
    <app-navbar />
    <app-container>
      <div class="lg:flex mb-4 lg:mb-24">
        <div class="lg:w-4/12">
          <main-title> 
            <template v-slot:title> 
              PROJECT
            </template>
            <template v-slot:undertitle> 
              Lorum
            </template>
          </main-title>
          <button-icon />
        </div>
        <div class="lg:w-8/12 relative">
          <g-image src="~/assets/bg-hero.png" class="object-cover w-full" />
          <app-button class="absolute bottom-0">
            VIEW PROJECT
            <arrow-icon />
          </app-button>
        </div>
      </div>
      <div
        class="bg-grey-100 flex flex-col-reverse lg:justify-center lg:flex-row mb-4 lg:mb-24"
      >
        <div
          class="
            lg:w-6/12
            flex
            justify-center
            lg:justify-around
            flex-wrap
            lg:flex-nowrap
            lg:py-8
            space-y-8
            lg:space-y-0
          "
        >
          <div class="space-y-8">
            <g-image src="~/assets/glass-palace2.png"></g-image>
            <g-image src="~/assets/glass-palace3.png"></g-image>
          </div>
          <div class="flex self-center">
            <g-image src="~/assets/glass-palace1.png"></g-image>
          </div>
        </div>
        <div class="lg:w-5/12 font-light lg:space-y-16 lg:py-8 space-y-4 lg:space-y-0 mb-4 lg:mb-0">
          <h2 class="text-grey-500 text-6xl">About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
            reprehenderit magnam. Praesentium, fugiat excepturi. Ipsam
            laboriosam totam tempore excepturi harum autem, itaque eveniet
            mollitia, asperiores quod officiis. Doloribus, dicta voluptate!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim esse
            temporibus, laboriosam totam tempore excepturi harum autem, itaque
            eveniet mollitia, asperiores quod officiis. Doloribus, dicta
            voluptate!
          </p>
          <app-button>
            READ MORE
            <arrow-icon />
          </app-button>
        </div>
      </div>
      <div class="space-y-8 mb-4 lg:mb-24">
        <h2 class="text-grey-500 text-6xl font-light">
          Main Focus/Mission Statement
        </h2>
        <div class="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:space-x-32">
          <div class="lg:w-10/12 flex items-center space-x-4">
            <p class="text-9xl text-grey-300">1</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
              voluptatibus voluptate culpa amet sunt consequuntur aliquid esse
              id nulla dolorem excepturi cum.
            </p>
          </div>
          <div class="lg:w-10/12 flex items-center space-x-4">
            <p class="text-9xl text-grey-300">2</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              temporibus laudantium quos labore tenetur ipsum. 
              Eius esse aperiam, nihil cumque quos nam natus officia velit
            </p>
          </div>
        </div>
      </div>
      <card-project />
      <div class="flex justify-center lg:justify-end">
        <app-button-grey>
          ALL PROJECTS
          <g-image src="~/assets/arrow-white.png" class="mx-2"></g-image>
        </app-button-grey>
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
import CardProject from "~/components/CardProject.vue";
import ArrowIcon from "~/components/ArrowIcon.vue";
import AppButtonGrey from "~/components/AppButtonGrey.vue";
export default {
  components: {
    AppNavbar,
    MainTitle,
    ButtonIcon,
    AppButton,
    AppContainer,
    CardProject,
    ArrowIcon,
    AppButtonGrey,
  },
};
</script>

<style>
</style>
