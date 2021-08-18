<template>
    <div class="">
        <h2 class="text-6xl font-light text-grey-400 mb-4">
          Our Project
        </h2>
        <div>
          <ul class="w-11/12 flex flex-wrap justify-around">
            <li><g-image src="~/assets/img-project5.png" class="py-2"></g-image></li>
            <li><g-image src="~/assets/img-project3.png" class="py-2"></g-image></li>
            <li><g-image src="~/assets/img-project1.png" class="py-2"></g-image></li>
            <li><g-image src="~/assets/img-project4.png" class="py-2"></g-image></li>
            <li><g-image src="~/assets/img-project2.png" class="py-2"></g-image></li>
            
          </ul>
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