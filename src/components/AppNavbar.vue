<template>
  <div>
    <app-container>
      <div class="lg:flex lg:items-center py-4 lg:py-8">
        <div class="lg:w-4/12">
          <g-image src="~/assets/logo.png" class="flex justify-start" />
        </div>
        <div class="lg:w-8/12 hidden lg:block">
          <ul class="lg:flex text-xs space-y-4 lg:space-y-0 lg:space-x-28">
            <li class="border-t-2 border-b-2 border-grey-500 px-2">
              <g-link to="/main/">MAIN</g-link>
            </li>
            <li><g-link to="/gallery/">GALLERY</g-link></li>
            <li><g-link to="/project/">PROJECT</g-link></li>
            <li><g-link to="/certifications/">CERTIFICATIONS</g-link></li>
            <li><g-link to="/contacts/">CONTACTS</g-link></li>
          </ul>
        </div>
      </div>
    </app-container>
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
