<template>
    <div>
        <app-navbar />
        <app-container>
            <main-title class="mb-52 lg:mb-72">
                <template v-slot:title> COMPANY </template>
                <template v-slot:undertitle> Certifications </template>
            </main-title>
        </app-container>
        <app-footer />
    </div>
</template>

<script>
import AppNavbar from "~/components/AppNavbar.vue";
import AppContainer from "~/components/AppContainer.vue";
import MainTitle from "~/components/MainTitle.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppContainer,
    AppNavbar,
    MainTitle,
    AppFooter,
  },
};
</script>