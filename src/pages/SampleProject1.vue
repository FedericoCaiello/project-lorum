<template>
  <div>
    <app-navbar />
    <app-container>
      <main-title class="mb-10">
        <template v-slot:title> Sample </template>
        <template v-slot:undertitle> Project 1 </template>
      </main-title>
      <div class="space-y-6 lg:space-y-10 mb-8 lg:mb-24">
        <div>
          <g-image
            src="~/assets/img-sample1.png"
            class="lg:w-full lg:object-cover"
          ></g-image>
        </div>
        <div class="lg:flex lg:space-x-8 space-y-6 lg:space-y-0">
          <g-image src="~/assets/img-sample2.png"></g-image>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
            ratione inventore. Qui, dolore modi recusandae animi facilis
            repudiandae aliquid illum tenetur. Labore eum laboriosam quos libero
            fuga ratione amet deserunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod dolorem praesentium reiciendis sint delectus
            dolores dolorum ipsam nam aliquid mollitia atque maxime quam, id
            veniam iste enim iusto? Doloribus, dolorum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolorum ratione a repellat
            possimus, tenetur reprehenderit, quam similique minima sunt incidunt
            saepe porro minus praesentium nulla? Cum velit debitis obcaecati
            impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Officia incidunt sed aperiam. Odit, atque vitae! Laboriosam veniam
            voluptas in aut, ipsum tenetur dolore officiis maiores nostrum sequi
            molestiae? Officia, autem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo odio sapiente, porro sequi eaque neque
            praesentium veritatis nisi cumque deserunt ullam sint alias
            voluptates ex assumenda sunt earum exercitationem culpa. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas, dolores, ex
            deserunt eos esse exercitationem dolore nemo corporis est
            perspiciatis in officia! Ut eveniet asperiores voluptatibus alias
            adipisci itaque fuga! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A illum voluptatum perspiciatis quis quia,
            expedita nihil dicta vitae nam saepe eligendi optio animi, alias,
            quas excepturi sapiente aut provident recusandae? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Vel corporis voluptates
            voluptatum et inventore odit minus soluta, officia laboriosam rerum
            natus rem, dolorum sunt incidunt, voluptatibus veritatis enim est
            veniam?
          </p>
        </div>
        <div>
          <g-image
            src="~/assets/img-sample3.png"
            class="lg:w-full lg:object-cover"
          ></g-image>
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
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppNavbar,
    AppContainer,
    MainTitle,
    AppFooter,
  },
};
</script>