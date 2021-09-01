<template>
  <div>
    <app-navbar/>
    <div class="lg:flex lg:relative mb-4 lg:mb-20">
      <app-container>
        <div class="space-y-4 lg:space-y-8 mb-12 lg:mb-0">
          <main-title>
            <template v-slot:title> Contact </template>
            <template v-slot:undertitle> Information </template>
          </main-title>
          <ul class="space-y-2 lg:space-y-8">
            <li class="flex flex-col">
              <p class="text-lg font-bold">Company Name</p>
              <p>1234 Sample Street Austin Texas 78704</p>
            </li>
            <li>
              <p class="text-lg font-bold">513.333.2222</p>
            </li>
            <li>
              <p>sampleemail@gmail.com</p>
            </li>
          </ul>
          <app-button variant="secondary">
            CONTACT US
            <g-image src="~/assets/arrow-white.png" class="mx-2"></g-image>
          </app-button>
        </div>
      </app-container>
      <div class="lg:absolute lg:right-0 img-information lg:h-96">
        <g-image src="~/assets/gps.png" class="lg:object-fill w-full h-full"> </g-image>
      </div>
    </div>
    <app-footer />
  </div>
</template>



<script>
import AppNavbar from "~/components/AppNavbar.vue";
import AppContainer from "~/components/AppContainer.vue";
import MainTitle from "~/components/MainTitle.vue";
import AppButton from "~/components/AppButton.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppNavbar,
    AppContainer,
    MainTitle,
    AppButton,
    AppFooter,
  },
};
</script>


<style>
  
  @media (min-width: 1024px) {
    .img-information {
    width: 58rem;
  }
}
</style>