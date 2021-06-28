<template>
  <div>
    <NavbarComponent />
    <HomepageComponent />
    <LanguageCardComponent />
    <ChipCardComponent />
    <ColorPickerComponnent />
    <CodeGameComponent />
    <ExerciseComponent />
    <TemplatesComponent />
    <FooterComponent />
  </div>
</template>

<script>
  import NavbarComponent from "../../components/LandingPage/navbar/NavbarComponent.vue";
  import HomepageComponent from "../../components/LandingPage/homepage/HomepageComponent.vue";
  import LanguageCardComponent from "../../components/LandingPage/languagecards/LanguageCardComponent.vue";
  import ChipCardComponent from "../../components/LandingPage/chipcard/ChipCardComponent.vue";
  import ColorPickerComponnent from "../../components/LandingPage/colorpicker/ColorPickerComponent.vue";
  import CodeGameComponent from "../../components/LandingPage/codegame/CodeGameComponent.vue";
  import ExerciseComponent from "../../components/LandingPage/exercise/ExerciseComponent.vue";
  import TemplatesComponent from "../../components/LandingPage/templates/TemplatesComponent.vue";
  import FooterComponent from "../../components/LandingPage/footer/FooterComponent.vue";

  export default {
    components: {
      NavbarComponent,
      HomepageComponent,
      LanguageCardComponent,
      ChipCardComponent,
      ColorPickerComponnent,
      CodeGameComponent,
      ExerciseComponent,
      TemplatesComponent,
      FooterComponent
    },
  };
</script>

<style></style>
