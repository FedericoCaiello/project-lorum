<template>
    <div>
        <app-navbar />
        <app-container>
            <main-title>
                <template v-slot:title> Our </template>
                <template v-slot:undertitle> Project </template>
            </main-title>
        </app-container>
    </div>
</template>


<script>
import AppNavbar from "~/components/AppNavbar.vue";
import AppContainer from "~/components/AppContainer.vue";
import MainTitle from "~/components/MainTitle.vue";

export default {
  components: {
    AppContainer,
    AppNavbar,
    MainTitle,
  },
};
</script>