<template>
  <div>
    <app-navbar />
    <app-container>
      <main-title>
        <template v-slot:title> Our </template>
        <template v-slot:undertitle> Project </template>
      </main-title>
      <div class="space-y-4 lg:space-y-10">
        <card-highligth-project>
          <g-image
            src="~/assets/image30.png"
            class="w-full object-cover"
          ></g-image>
          <template v-slot:title> Sample Project </template>
          <template v-slot:text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              velit, veniam quod officiis deleniti sint ex, dolorem similique,
              voluptas esse aut vitae eius natus nihil harum maiores? Animi,
              reiciendis ipsam?
            </p>
          </template>
        </card-highligth-project>
        <card-highligth-project>
          <g-image
            src="~/assets/image32.png"
            class="w-full object-cover"
          ></g-image>
          <template v-slot:title> Sample Project </template>
          <template v-slot:text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              velit, veniam quod officiis deleniti sint ex, dolorem similique,
              voluptas esse aut vitae eius natus nihil harum maiores? Animi,
              reiciendis ipsam?
            </p>
          </template>
        </card-highligth-project>
        <card-highligth-project>
          <g-image
            src="~/assets/image33.png"
            class="w-full object-cover"
          ></g-image>
          <template v-slot:title> Sample Project </template>
          <template v-slot:text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              velit, veniam quod officiis deleniti sint ex, dolorem similique,
              voluptas esse aut vitae eius natus nihil harum maiores? Animi,
              reiciendis ipsam?
            </p>
          </template>
        </card-highligth-project>
      </div>
      <div class="flex space-x-8 my-8">
        <div>
          <number-selected>
            <template v-slot:number-to-left>
              <span class="block text-gray-600">0</span>
              <span class="block text-gray-600">1</span>
            </template>
            <template v-slot:number-to-right>
              <span class="block">5</span>
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
import AppContainer from "~/components/AppContainer.vue";
import MainTitle from "~/components/MainTitle.vue";
import CardHighligthProject from "~/components/CardHighligthProject.vue";
import NumberSelected from "~/components/NumberSelected.vue";
import ButtonsIcon from "~/components/ButtonsIcon.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppContainer,
    AppNavbar,
    MainTitle,
    CardHighligthProject,
    NumberSelected,
    ButtonsIcon,
    AppFooter,
  },
};
</script>