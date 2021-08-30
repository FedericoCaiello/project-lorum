<template>
    <div>
        <app-navbar />
        <app-container>
            <main-title>
                <template v-slot:title> Photo </template>
                <template v-slot:undertitle> Gallery </template>
            </main-title>
        </app-container>
    </div>
</template>

<script>
import AppNavbar from "~/components/AppNavbar.vue";
import MainTitle from "~/components/MainTitle.vue";
import AppContainer from '~/components/AppContainer.vue';

export default {
    components: {
        AppNavbar,
        MainTitle,
        AppContainer,
    },
};
  

</script>
