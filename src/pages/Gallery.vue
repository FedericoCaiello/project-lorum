<template>
  <div>
    <app-navbar />
    <app-container>
      <main-title>
        <template v-slot:title> Photo </template>
        <template v-slot:undertitle> Gallery </template>
      </main-title>
      <div class="lg:flex lg:justify-between my-8">
        <photo-gallery>
          <g-image
            src="~/assets/gallery1.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery2.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery3.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery4.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery5.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
      </div>
      <div class="lg:flex lg:justify-between my-8">
        <photo-gallery>
          <g-image
            src="~/assets/gallery6.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery7.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery8.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery9.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
        <photo-gallery>
          <g-image
            src="~/assets/gallery10.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </photo-gallery>
      </div>
      <div class="flex space-x-8">
        <div>
          <number-selected>
            <template v-slot:number-to-left>
              <span class="block text-gray-600">0</span>
              <span class="block text-gray-600">1</span>
            </template>
            <template v-slot:number-to-right>
              <span class="block">2</span>
            </template>
          </number-selected>
        </div>
        <div>
            <buttons-icon />
        </div>
      </div>
    </app-container>
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "~/components/AppNavbar.vue";
import MainTitle from "~/components/MainTitle.vue";
import AppContainer from "~/components/AppContainer.vue";
import PhotoGallery from "~/components/PhotoGallery.vue";
import NumberSelected from "~/components/NumberSelected.vue";
import ButtonsIcon from "~/components/ButtonsIcon.vue";
import AppFooter from "~/components/AppFooter.vue";
export default {
  components: {
    AppNavbar,
    MainTitle,
    AppContainer,
    PhotoGallery,
    NumberSelected,
    ButtonsIcon,
    AppFooter,
  },
};
</script>
