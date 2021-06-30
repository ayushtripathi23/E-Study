<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <router-link to="/"> HOME </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="(list, index) in listButton"
            :key="index"
            @click="navIndex(list.button)"
          >
            <router-link :to="`/dashboard/${list.button}`">
              <button class="listItems">{{ list.button }}</button>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="mainContainer">
      <div class="sidebarContainer">
        <div>
          <!-- <div v-if="list.category == getNavButtonIndex"> -->
          <h4 class="sidebarTitle">{{ currentSideBarList.languageTitle }}</h4>
          <div class="hoverEffect">
            <h4
              class="sidebarBody"
              v-for="(item, index) in currentSideBarList.languageBody"
              :key="index"
              @click="openView(item, currentSideBarList.languageBody[index])"
            >
              <router-link
                style="text-decoration: none"
                :to="{
                  path: `/dashboard/${currentSideBarList.languageTitle}/${item}`,
                }"
              >
                <h6 class="sidebarItems">{{ item }}</h6>
              </router-link>
            </h4>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="viewContainer">
        <div>
          <!-- <div v-if="getIndex == 0">
           <HtmlHome/>
          </div>
          <div v-if="getIndex == 1">
            <HtmlIntro/>
            </div> -->
          <div>
            <HtmlBasic :passIndex="getIndex" :passName="langToCheck" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../../jsonData/NavButtonList";
import SideBardata from "../../jsonData/SidebarLanguage";
import ContentView from "../../jsonData/Contentview";
// import HtmlHome from '../dashboard/LanguageViewList/HtmlHome.vue'
// import HtmlIntro from '../dashboard/LanguageViewList/HtmlIntro.vue'
import HtmlBasic from "../dashboard/LanguageViewList/HtmlBasic.vue";

export default {
  components: { HtmlBasic },
  data() {
    return {
      listButton: [],
      sideBarList: [],
      contentViewList: "",
      getIndex: "",
      langToCheck: "",
      getTitle: "",
      getNavButtonIndex: "HTML",
    };
  },
  computed: {
    currentSideBarList() {
      // console.log(this.currentNav, "dge");
      return this.sideBarList.find((lang) => {
        let langToCheck = this.currentNav ? this.currentNav : "HTML";
        // console.log(lang.category, this.currentNav, langToCheck);
        return lang.category === langToCheck;
      });
    },
    currentNav() {
      // console.log("this.$route.params.id", this.$route.params.id);
      return this.$route.params.id;
    },
  },
  methods: {
    navIndex(i) {
      console.log(i);
      this.getNavButtonIndex = i;
      //  this.$router.push(`${i}`)
    },
    openView(i, y) {
      console.log(i, y, "check");
      this.getIndex = i;
      this.getTitle = y;
      switch (i) {
        case 0:
          console.log("zero");

          break;
        case 1:
          console.log("one");
          break;

        default:
          break;
      }
    },
  },
  created() {
    this.openView();
    console.log("src/views/dashboard/Navbar");
    this.listButton = jsonData;
    this.contentViewList = ContentView;
    this.sideBarList = SideBardata;
    if (this.$route.params.id) {
      this.getNavButtonIndex = this.$route.params.id.toUpperCase();
    } else {
      this.getNavButtonIndex = "HTML";
    }
  },
};
</script>

<style scoped>
.sidebarItems {
  color: rgb(0, 0, 0);
  margin: 10px;
  font-family: "Segoe UI", Arial, sans-serif;
  text-decoration: none;
  display: block;
}
.sidebarTitle {
  width: 100%;
  margin: 0;
  padding-left: 20px;
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 21px;
}
.sidebarBody {
  font-size: 19px;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-left: 20px;
  font-weight: 400;
  width: 100%;
}
.hoverEffect :hover {
  background-color: rgb(151, 148, 147);
}
.listItems {
  color: white;
  padding-top: 6px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  border: none;
}
.nav-item :hover {
  transform: scale(1.2);
}
.nav-item :focus {
  background-color: #04aa6d;
}
.sidebarContainer {
  width: 20%;
  height: 84vh;
  background-color: #e6e6e6;
}
.viewContainer {
  width: 80%;
  height: 84vh;
  overflow-y: scroll;
  background-color: rgb(255, 255, 255);
}
.mainContainer {
  display: flex;
  justify-content: center;
}
</style>
