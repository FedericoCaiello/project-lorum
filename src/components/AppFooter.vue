<template>
  <div class="bg-gray-700">
    <app-container>
      <div
        class="
          py-4
          lg:py-8
          lg:flex
          space-y-4
          lg:space-y-0
          text-white
        "
      >
        <div class="lg:w-2/12">
          <g-image src="~/assets/logo-white.png" />
        </div>
        <div class="lg:w-3/12">
          <h3 class="font-bold mb-4">Information</h3>
          <ul class="space-y-2">
            <li><g-link to="/main/">Main</g-link></li>
            <li><g-link to="/gallery/">Gallery</g-link></li>
            <li><g-link to="/project/">Project</g-link></li>
            <li><g-link to="/certifications/">Certifications</g-link></li>
            <li><g-link to="/contacts/">Contacts</g-link></li>
          </ul>
        </div>
        <div class="lg:w-5/12">
          <h3 class="font-bold mb-4">Contacts</h3>
          <ul class="space-y-2 lg:space-y-10">
            <li class="flex space-x-2">
              <g-image src="~/assets/position.png" class="object-contain" />
              <p>1234 Sample Street Austin Texas 78704</p>
            </li>
            <li class="flex space-x-2">
              <g-image src="~/assets/phone.png" class="object-contain" />
              <p>513.333.2222</p>
            </li>
            <li class="flex space-x-2">
              <g-image src="~/assets/message.png" class="object-contain" />
              <p>sampleemail@gmail.com</p>
            </li>
          </ul>
        </div>
        <div class="lg:w-2/12">
          <h3 class="font-bold mb-4">Social Media</h3>
          <ul class="flex space-x-8">
            <li>
              <g-link to="/facebook/"
                ><g-image src="~/assets/facebook.png"
              /></g-link>
            </li>
            <li>
              <g-link to="/twitter/"
                ><g-image src="~/assets/twitter.png"
              /></g-link>
            </li>
            <li>
              <g-link to="/LinkedIn/"
                ><g-image src="~/assets/LinkedIn.png"
              /></g-link>
            </li>
            <li>
              <g-link to="/pininterest/"
                ><g-image src="~/assets/pininterest.png"
              /></g-link>
            </li>
          </ul>
        </div>
      </div>
    </app-container>
    <div class="border-t-2 border-gray-600 py-8">
      <app-container>
        <p class="text-center text-gray-500">© 2021 All Rights Reserved</p>
      </app-container>
    </div>
  </div>
</template>


<script>
import AppContainer from "~/components/AppContainer.vue";

export default {
  components: {
    AppContainer,
  },
};
</script>
