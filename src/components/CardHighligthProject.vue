<template>
    <div class="lg:flex my-8 lg:my-12">
        <slot />
        <div class="bg-gray-100 p-5 lg:p-10 space-y-12 lg:space-y-24">
            <h3 class="text-4xl font-light text-gray-500">Sample Project</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere velit, veniam quod officiis deleniti sint ex, 
                dolorem similique, voluptas esse aut vitae eius natus nihil harum maiores? 
                Animi, reiciendis ipsam?
            </p>
            <app-button>
                VIEW MORE
                <arrow-icon />
            </app-button>
        </div>
    </div>
</template>


<script>
import AppButton from "~/components/AppButton.vue";
import ArrowIcon from "~/components/ArrowIcon.vue";

export default {
  components: {
    AppButton,
    ArrowIcon,
  },
};
</script>