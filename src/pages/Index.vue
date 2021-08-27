<template>
  <div>
    <app-navbar/>
    <app-container>
      <div class="lg:flex mb-4 lg:mb-24">
        <div class="lg:w-4/12">
          <main-title>
            <template v-slot:title> PROJECT </template>
            <template v-slot:undertitle> Lorum </template>
          </main-title>
          <buttons-icon />
          <number-selected>
            <template v-slot:number-to-left>
              <span class="block">0</span>
              <span class="block">1</span>
            </template>
            <template v-slot:number-to-right>
              <span class="block">2</span>
            </template>
          </number-selected>
        </div>
        <div class="lg:w-8/12 relative">
          <g-image src="~/assets/bg-hero.png" class="object-cover w-full" />
          <app-button class="absolute bottom-0 left-0">
            VIEW PROJECT
            <arrow-icon />
          </app-button>
        </div>
      </div>
      <div
        class="
          bg-gray-100
          flex flex-col-reverse
          lg:justify-center
          lg:flex-row
          mb-4
          lg:mb-24
        "
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
        <div
          class="
            lg:w-5/12
            font-light
            lg:space-y-16
            lg:py-8
            space-y-4
            mb-4
            lg:mb-0
          "
        >
          <h2 class="text-gray-500 text-6xl">About</h2>
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
        <h2 class="text-gray-500 text-6xl font-light">
          Main Focus/Mission Statement
        </h2>
        <div
          class="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:space-x-32"
        >
          <div class="flex items-center space-x-4">
            <p class="text-9xl text-gray-300">1</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
              voluptatibus voluptate culpa amet sunt consequuntur aliquid esse
              id nulla dolorem excepturi cum.
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <p class="text-9xl text-gray-300">2</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              temporibus laudantium quos labore tenetur ipsum. Eius esse
              aperiam, nihil cumque quos nam natus officia velit
            </p>
          </div>
        </div>
      </div>
      <h2 class="text-6xl font-light text-gray-500 mb-4">Our Project</h2>
      <div class="flex flex-col lg:flex-row space-x-4 mb-4">
        <card-project title="title1" class="lg:w-6/12">
          <g-image
            src="~/assets/img-project5.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </card-project>
        <card-project title="title2" class="lg:w-6/12">
          <g-image
            src="~/assets/img-project3.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </card-project>
      </div>
      <div class="flex flex-col lg:flex-row space-x-4 mb-4 lg:mb-8">
        <card-project title="title3" class="lg:w-2/12">
          <g-image
            src="~/assets/img-project1.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </card-project>
        <card-project title="title4" class="lg:w-6/12">
          <g-image
            src="~/assets/img-project4.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </card-project>
        <card-project title="title5" class="lg:w-4/12">
          <g-image
            src="~/assets/img-project2.png"
            class="h-full lg:object-cover w-full"
          ></g-image>
        </card-project>
      </div>
      <div class="flex justify-center lg:justify-end">
        <app-button variant="secondary" class="mb-24">
          ALL PROJECTS
          <g-image src="~/assets/arrow-white.png" class="mx-2"></g-image>
        </app-button>
      </div>
      <div class="lg:mb-24 mb-12">
        <h2
          class="
            text-6xl
            font-light
            text-gray-500
            mb-4
            lg:text-left
            text-center
          "
        >
          Contact Us
        </h2>
        <div class="flex flex-col-reverse lg:flex-row">
          <div class="lg:w-5/12 space-y-8">
            <input
              type="text"
              placeholder="Name"
              class="outline-none bg-gray-300 py-2 pl-4 w-3/4"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              class="outline-none bg-gray-300 py-2 pl-4 w-3/4"
            />
            <input
              type="email"
              placeholder="Email*"
              class="outline-none bg-gray-300 py-2 pl-4 w-3/4"
            />
            <input
              type="text"
              placeholder="Interestered In"
              class="outline-none bg-gray-300 py-2 pl-4 w-3/4"
            />
            <input
              type="text"
              placeholder="Message*"
              class="outline-none bg-gray-300 pt-4 pl-4 pb-14 w-3/4"
            />
          </div>
          <div class="lg:w-7/12 contents">
            <g-image
              src="~/assets/image-12.png"
              class="mb-12 lg:mb-0"
            ></g-image>
          </div>
        </div>
      </div>
      <app-button variant="secondary" class="mb-24">
        SEND EMAIL
        <g-image src="~/assets/arrow-white.png" class="mx-2"></g-image>
      </app-button>
    </app-container>
    <app-footer class="bg-gray-700" />
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
import AppFooter from "~/components/AppFooter.vue";
import ButtonsIcon from "~/components/ButtonsIcon.vue";
import NumberSelected from "~/components/NumberSelected.vue";

export default {
  components: {
    AppNavbar,
    MainTitle,
    ButtonIcon,
    AppButton,
    AppContainer,
    CardProject,
    ArrowIcon,
    AppFooter,
    ButtonsIcon,
    NumberSelected,
  },
};
</script>

<style>
</style>
