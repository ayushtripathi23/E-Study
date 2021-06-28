<template>
  <div>
    <nav
      style="height: 80px"
      class="navbar navbar-expand-lg navbar-dark bg-light"
    >
      <a class="navbar-brand" href="#" style="color: black">E-Study</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                style="color: black; font-size: 20px"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tutorials
              </button>
              <div
                class="dropdown-menu dropdownCustomize"
                aria-labelledby="dropdownMenuButton"
              >
                <h2 class="dropdownHeading">Tutorials</h2>
                <div class="row">
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">HTML & CSS</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in frontend"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Server Side</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in server"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                    <div>
                      <h1 class="dropdownHeading">Web Building</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in webBuiding"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">JavaScript</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in javaScript"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                    <div>
                      <h1 class="dropdownHeading">Programming</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in programming"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Artificial Intelligence</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in artificial"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                    <div>
                      <h1 class="dropdownHeading">XML Tutorial</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in xml"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- For Refrence Dropdown -->
          <li class="nav-item dropdown">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                style="color: black; font-size: 20px"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Reference
              </button>
              <div
                class="dropdown-menu dropdownReferenceCustomize"
                aria-labelledby="dropdownMenuButton"
              >
                <h2 class="dropdownHeading">Refrences</h2>
                <div class="row">
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">HTML</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in htmlref"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">JavaScript</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in javaScriptref"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                    <div>
                      <h1 class="dropdownHeading">Programming</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in programmingRef"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Server Side</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in serversideRef"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                    <div>
                      <h1 class="dropdownHeading">XML</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in xmlref"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Character Sets</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in characterRef"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- end of Refrence Dropdown -->
          <!-- for Exercise -->
          <li class="nav-item dropdown">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                style="color: black; font-size: 20px"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Exercise
              </button>
              <div
                class="dropdown-menu dropdownExerciseCustomize"
                aria-labelledby="dropdownMenuButton"
              >
                <h2 class="dropdownHeading">Exercise</h2>
                <div class="row">
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Exercise</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in exercise"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Quizzes</h1>
                      <div class="dropdownLabels"   v-for="(item, index) in quiz"
                        :key="index">
                        <router-link :to="`/quiz/${item.language}`">
                          <h6>{{ item.language }}</h6>
                          </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <h1 class="dropdownHeading">Server Side</h1>
                      <div
                        class="dropdownLabels"
                        v-for="(item, index) in serverSideExercise"
                        :key="index"
                      >
                        <router-link :to="`/dashboard/${item.category}`">
                          <h6>{{ item.language }}</h6>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- End for for Exercise -->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import frontend from "../../../jsonData/dropdownData/FrontEnd";
import serverEnd from "../../../jsonData/dropdownData/ServerSide";
import webBuiding from "../../../jsonData/dropdownData/WebBuilding";
import javaScript from "../../../jsonData/dropdownData/JavaScript";
import programming from "../../../jsonData/dropdownData/Programming";
import artificial from "../../../jsonData/dropdownData/Ai";
import xml from "../../../jsonData/dropdownData/Xml";
import htmlref from "../../../jsonData/dropdownData/HtmlRef";
import javaScriptref from "../../../jsonData/dropdownData/JavaScriptRef";
import programmingRef from "../../../jsonData/dropdownData/ProgrammingRef";
import serversideRef from "../../../jsonData/dropdownData/ServerSideRef";
import characterRef from "../../../jsonData/dropdownData/CharacterRef";
import xmlref from "../../../jsonData/dropdownData/XmlRef";
import exercise from "../../../jsonData/dropdownData/Exercise";
import serverSideExercise from "../../../jsonData/dropdownData/ServerSideExercise";
import quiz from "../../../jsonData/dropdownData/Quiz";
export default {
  data() {
    return {
      dialog: false,
      frontend: [],
      server: [],
      webBuiding: [],
      javaScript: [],
      programming: [],
      artificial: [],
      xml: [],
      htmlref: [],
      javaScriptref: [],
      programmingRef: [],
      serversideRef: [],
      characterRef: [],
      xmlref: [],
      exercise: [],
      serverSideExercise: [],
      quiz: [],

      nav: [
        {
          icon: "home",
          text: "Home",
          title: "Back to Home page",
          active: true,
        },
        {
          icon: "info",
          text: "About",
          title: "About this demo",
          active: false,
        },
        {
          icon: "assignment_turned_in",
          text: "Todos",
          title: "Some stuff that needs doing",
          active: false,
        },
        {
          icon: "email",
          text: "Contact",
          title: "Our Contact info",
          active: false,
        },
      ],
    };
  },
  created() {
    this.frontend = frontend;
    this.server = serverEnd;
    this.webBuiding = webBuiding;
    this.javaScript = javaScript;
    this.programming = programming;
    this.artificial = artificial;
    this.xml = xml;
    this.htmlref = htmlref;
    this.javaScriptref = javaScriptref;
    this.programmingRef = programmingRef;
    this.serversideRef = serversideRef;
    this.characterRef = characterRef;
    this.xmlref = xmlref;
    this.exercise = exercise;
    this.serverSideExercise = serverSideExercise;
    this.quiz = quiz;
  },
};
</script>
<style scoped>
.dropdownCustomize {
  width: 100vw;
  height: auto;
  margin-left: -130px;
  background-color: #282a35;
}
.dropdownReferenceCustomize {
  width: 100vw;
  height: auto;
  margin-left: -250px;
  background-color: #282a35;
}
.dropdownExerciseCustomize {
  width: 100vw;
  height: auto;
  margin-left: -390px;
  background-color: #282a35;
}
.dropdownHeading {
  color: #fff4a3;
  margin-left: 70px;
  margin-top: 20px;
  font-size: 20px;
}
.dropdownLabels {
  color: white;
  margin-left: 70px;
  margin-top: 10px;
  color: white;
}
h6 {
  color: white;
}
.dropdownLabels :hover {
  background-color: rgb(199, 199, 199);
  border-radius: 1rem;
  padding-left: 10px;
  transform: scale(1.2);
  cursor: pointer;
  color: black;
}
</style>
