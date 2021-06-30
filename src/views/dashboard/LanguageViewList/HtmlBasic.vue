<template>
  <div class="mainContainerView">
    <div class="navigationButton">
      <button class="tryItButton" @click="previous()">Previous</button>
      <button class="tryItButton" @click="next()">Next</button>
    </div>
    <div
      class="titletext"
      v-for="(list, index) in currentSideBarList.description"
      :key="index"
    >
      <div v-if="list.languageId == cid">
        <h4 class="htmlLabel">{{ list.languageTitle }}</h4>
        <p id="demo"></p>
        <h4
          class="htmlLabel1"
          v-for="(subItem, index) in list.languageBody"
          :key="index"
        >
          <span id="phrase">
            {{ subItem }}
          </span>
        </h4>

        <div class="tryItContaner" v-if="list.codeDescription">
          <h4 class="tryItLabel">EXAMPLE</h4>
          <div class="prismContainer">
            <pre
              class="language-javascript"
              style="background-color: rgb(49, 49, 49)"
            ><code :class="`${list.codeName}`">
{{list.codeDescription}}
              </code>
              </pre>
          </div>
          <button
            @click="openTryItButton(list.codeEditorLink)"
            class="tryItButton"
          >
            Try It Yourself
          </button>
        </div>
      </div>
    </div>
    <div class="navigationButton">
      <button class="tryItButton" @click="previous()">Previous</button>
      <button class="tryItButton" @click="next()">Next</button>
    </div>
  </div>
</template>

<script>
import SideBardata from "../../../jsonData/SidebarLanguage";
import langDescription from "../../../jsonData/languagesModel/LanguageDescription";
import cssDescription from "../../../jsonData/languagesModel/CssDescription";
import jsDescription from "../../../jsonData/languagesModel/JavaScriptDescription";
import Sqldescription from "../../../jsonData/languagesModel/SqlDescription";
import PhpDescription from "../../../jsonData/languagesModel/PhpDescription";
import BootstrapDescription from "../../../jsonData/languagesModel/BootstrapDescription";
import HowToDescription from "../../../jsonData/languagesModel/HowToDescription";
import W3Description from "../../../jsonData/languagesModel/W3Description";
import JavaDescription from "../../../jsonData/languagesModel/JavaDescription";
import MySqldescription from "../../../jsonData/languagesModel/MySqldescription";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  props: {
    // passIndex: {
    //   type: Number,
    //   default: 0,
    // },
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  },
  computed: {
    currentSideBarList() {
      // console.log(this.currentNav, "dge");
      let cd = this.combinedata.find((lang) => {
        let langToCheck = this.currentNav ? this.currentNav : "HTML";
        // console.log(lang.category, this.currentNav, langToCheck);
        return lang.language === langToCheck;
      });
      console.log(cd);
      return cd || [];
    },
    currentNav() {
      // window.Prism = window.Prism || {};
      // window.Prism.manual = true;
      this.$nextTick(() => {
        console.log("-----");
        Prism.highlightAll();
      });
      // console.log("this.$route.params.id", this.$route.params.id);
      return this.$route.params.id;
    },
    cid() {
      // console.log("this.$route.params.id", this.$route.params.id);
      let cl = SideBardata.find((lang) => {
        let langToCheck = this.currentNav ? this.currentNav : "HTML";
        // console.log(lang.category, this.currentNav, langToCheck);
        return lang.category === langToCheck;
      });
      let i = cl.languageBody.findIndex(
        (topic) => topic === decodeURIComponent(this.$route.params.cid)
      );
      console.log(cl, "cl", i);
      return i > 0 ? i : 0;
    },
  },
  data() {
    return {
      combinedata: [],
      passName: this.$route.params.id,
    };
  },
  created() {
    console.log(this.$route.params.id, "view");
    // this.description = langDescription;
    // this.cssData = cssDescription;
    // this.combinedata= {...langDescription , ...cssDescription , ...jsDescription, ...Sqldescription}
    this.combinedata.push(
      langDescription,
      cssDescription,
      jsDescription,
      Sqldescription,
      PhpDescription,
      BootstrapDescription,
      HowToDescription,
      W3Description,
      JavaDescription,
      MySqldescription
    );
    // this.combinedata.push(jsDescription);

    console.log(this.combinedata);
    console.log(this.combinedata[0].language);
  },
  methods: {
    previous() {
      window.history.go(-1);
    },
    next() {
      window.history.go(+1);
    },
    openTryItButton(a) {
      window.open(a);
    },
    // subItemsFind(a) {
    //   if (a.match("^<") && a.match(">$")) {
    //     document.getElementById("demo").innerHTML = a.find(this.subItemsFind);
    //   }
    // },
    // myFunction() {},
  },
  // mounted() {
  //   console.log(this.passIndex);
  // },
};
</script>

<style scoped>
.navigationButton {
  display: flex;
  justify-content: space-between;
}
code[class*="language-"],
pre[class*="language-"] {
  text-shadow: none;
  color: white;
}
.mainContainerView {
  width: 80%;
  background-color: rgb(255, 255, 255);
}
.titletext {
  margin-top: 20px;
}
.tryItContaner {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  background-color: rgb(219, 219, 219);
  height: auto;
}
.prismContainer {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(53, 51, 51);
  height: auto;
  border-radius: 1rem;
}
.htmlLabel {
  letter-spacing: 2;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 35px;
  padding-left: 20px;
  font-weight: 300;
}
.htmlLabel1 {
  letter-spacing: 1.5;
  font-weight: 300;
  font-size: 19px;
  padding-left: 50px;
}
.htmlLabel2 {
  letter-spacing: 1.5;
  font-size: 15px;
  padding-left: 20px;
  padding-top: 10px;
}
.tryItLabel {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.tryItButton {
  width: 150px;
  background-color: #04aa6d;
  margin-top: 20px;
  height: 40px;
  border-radius: 1rem;
  margin-left: 20px;

  margin-bottom: 20px;
}
.goButton {
  width: 200px;
  background-color: #dddddd;
  margin-top: 20px;
  height: 40px;
  border-radius: 0.5rem;
  margin-left: 20px;
  margin-bottom: 20px;
}
.clickOnTry {
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}
</style>
