<template>
  <div class="lg:flex my-8 lg:my-12">
    <div class="lg:w-7/12">
      <slot />
    </div>
    <div class="lg:w-5/12">
      <div class="bg-gray-100 p-5 lg:p-10 space-y-12 lg:space-y-24 h-full">
        <h3 class="text-4xl font-light text-gray-500">
            {{title}}
        </h3>
        <p>
            {{description}}
        </p>
        <app-button>
          <g-link to="/sample-project1/" class="flex items-center">
            VIEW MORE
            <arrow-icon />
          </g-link>
        </app-button>
      </div>
    </div>
  </div>
</template>


<script>
import AppButton from "~/components/AppButton.vue";
import ArrowIcon from "~/components/ArrowIcon.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  components: {
    AppButton,
    ArrowIcon,
  },
};
</script>