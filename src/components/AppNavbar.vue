<template>
  <div>
    <app-container>
      <div class="lg:flex lg:items-center py-4 lg:py-8">
        <div class="lg:w-4/12">
          <g-image src="~/assets/logo.png" class="flex justify-start" />
        </div>
        <div
          class="
            lg:w-8/12
            fixed
            lg:relative
            inset-x-0 lg:inset-x-auto
            bottom-0 lg:bottom-auto
            top-16 lg:top-auto
            bg-white
            w-full
            h-full
            lg:h-auto
            transform
            transition-all
            duration-300
            p-4
            lg:p-0
            z-40
          "
          :class="{
            '-translate-x-full lg:translate-x-0': menuActive === false,
            'translate-x-0': menuActive === true,
          }"
        >
          <ul class="lg:flex text-xs space-y-4 lg:space-y-0 lg:space-x-28 inline-block">
            <li class="border-t-2 border-b-2 border-gray-600 px-2">
              <g-link to="/">MAIN</g-link>
            </li>
            <li
              class="
                border-t-2 border-b-2 border-transparent
                hover:border-gray-600
                px-2
              "
            >
              <g-link to="/gallery/">GALLERY</g-link>
            </li>
            <li
              class="
                border-t-2 border-b-2 border-transparent
                hover:border-gray-600
                px-2
              "
            >
              <g-link to="/our-project/">PROJECT</g-link>
            </li>
            <li
              class="
                border-t-2 border-b-2 border-transparent
                hover:border-gray-600
                px-2
              "
            >
              <g-link to="/certifications/">CERTIFICATIONS</g-link>
            </li>
            <li
              class="
                border-t-2 border-b-2 border-transparent
                hover:border-gray-600
                px-2
              "
            >
              <g-link to="/information/">CONTACTS</g-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:hidden px-5 text-right">
        <button
          @click="toggleMenu"
          class="mt-4 mr-5 w-10 absolute top-0 right-0 z-50"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="svg-inline--fa fa-bars fa-w-14"
            :class="{
              'text-black-900': menuActive === false,
              'text-gray-500': menuActive === true,
            }"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
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
  data: () => ({
    menuActive: false,
  }),
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

