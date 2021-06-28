<template>
  <div>
    <div id="app">
      <v-app>
        <!-- Center Justify Everything -->
        <v-layout justify-center>
          <!-- Make Main Card Take up 1/2 the Page by Wrapping in Flex -->
          <v-flex xs12 sm12 md9 lg12>
            <v-card  style="background-color:#282A35">
              <!-- Push Contents In and Put Space Between Flex Items Using Grid List -->
              <v-container fluid grid-list-lg >
                <v-layout row wrap >
                  <!--  Create Cards Based on Objects in an Array -->
                  <v-flex  >
                    <v-flex style="display:flex; flex-wrap:wrap;"  >
                      <div class="containerClass" v-for="card in cards" :key="card.title"  :style="{'background-color': `${card.color}`}">
                        <h4 class="containerClassTitle">{{card.mainHeading}}</h4>
                        <h4 class="containerClassSubTitle">
                          {{card.headSubHeading}}
                        </h4>
                        <div class="containerBox">
                            <router-link :to="`/dashboard/${card.mainHeading}`">
                          <button class="containerClassButton">
                           {{card.button}}
                          </button>
                            </router-link>
                        </div>
                      </div>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
    </div>
  </div>
</template>

<script>
  import languageData from "../../../jsonData/LanguageCard";
  export default {
    data() {
      return {
        cards: languageData,
      };
    },
    created() {
      this.cards = languageData;
      console.log(this.languages);
    },
  };
</script>

<style scoped>
  .containerClass {
    width: 550px;
    flex:40%;
    margin:5px;
    border-radius: 1rem;
    height: 250px;
  
  }
  .containerClassTitle {
    display: flex;
    justify-content: center;
    padding-top: 30px;

    font-size: 40px;
  }
  .containerClassSubTitle {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    font-size: 20px;
  }
  .containerBox {
    display: flex;
    justify-content: center;
  }
  .containerClassButton {
    margin-top: 30px;
    background-color:#282A35;
    color: white;
    width: 200px;
    height: 35px;
    border-radius: 1rem;
  }
</style>
