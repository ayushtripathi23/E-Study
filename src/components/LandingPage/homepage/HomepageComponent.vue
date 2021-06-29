<template>
  <div>
    <div
      class="mainContainer"
      v-for="language in languages"
      :key="language.button"
      :style="{ 'background-color': `${language.color}` }"
    >
      <div class="row">
        <div class="col mainSubLeftContainer">
          <h6 class="textField">{{ language.headLabel }}</h6>
          <h4 class="secondTextField">{{ language.headSubHeading }}</h4>
          <router-link :to="`/dashboard/${language.headLabel}`">
            <button class="buttonField">{{ language.button }}</button>
          </router-link>
          <button class="buttonField2">{{ language.buttonReference }}</button>
        </div>
        <div class="col">
          <div class="mainSubContainer">
            <h4 class="subTextField">{{ language.titleExample }}:</h4>
            <div class="codeSnipContainer">
              <pre
                class="language-javascript codeSnipContainer"
              ><code :class="`${language.codeName}`">
{{language.codeDescription}}
              </code>
              </pre>
            </div>
            <a>
              <button
                @click="openTryItYourself(language.tryItButtonLink)"
                class="buttonSnipField"
              >
                {{ language.tryItButton }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homepageData from "../../../jsonData/Homepage";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  data() {
    return {
      languages: homepageData,
    };
  },
  created() {
    this.languages = homepageData;
    console.log(this.languages);
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  },
  methods: {
    openTryItYourself(a) {
      window.open(a);
    },
  },
};
</script>

<style scoped>
code[class*="language-"],
pre[class*="language-"] {
  text-shadow: none;
  color: white;
}
.mainContainer {
  background-color: rgb(49, 49, 49);
  width: 100%;
  height: 550px;
}
.mainSubContainer {
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  margin-top: 80px;
  background-color: whitesmoke;
  width: 600px;
  height: 400px;
}
.codeSnipContainer {
  width: 500px;
  height: 250px;
  margin-left: auto;
  border-radius: 1rem;
  margin-right: auto;
  background-color: rgb(49, 49, 49);
}

.textField {
  color: azure;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 85px;
}
.secondTextField {
  color: azure;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.subTextField {
  color: black;
  padding-top: 30px;
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
}
.buttonField {
  width: 180px;
  border-radius: 1rem;
  height: 40px;
  margin-top: 30px;
  margin-left: 220px;
  background-color: rgb(38, 168, 38);

  color: white;
  font-size: 15px;
}
.buttonSnipField {
  width: 180px;
  border-radius: 1rem;
  height: 40px;
  margin-top: 10px;
  margin-left: 50px;
  background-color: rgb(38, 168, 38);
  color: white;
  font-size: 15px;
}
.buttonField2 {
  width: 180px;
  border-radius: 1rem;
  height: 40px;
  margin-top: 30px;
  margin-left: 220px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 15px;
}
</style>
