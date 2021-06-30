<template>
  <div>
    <div id="app">
      <v-app>
        <!-- Center Justify Everything -->
        <v-layout justify-center>
          <!-- Make Main Card Take up 1/2 the Page by Wrapping in Flex -->
          <v-flex xs12 sm12 md9 lg12>
            <v-card>
              <!-- Push Contents In and Put Space Between Flex Items Using Grid List -->
              <div style="background-color: #282a35" fluid grid-list-lg>
                <v-layout row wrap>
                  <!--  Create Cards Based on Objects in an Array -->
                  <v-flex
                    v-for="card in cards"
                    :key="card.title"
                    style="width: 25%"
                  >
                    <v-flex>
                      <div
                        class="containerClass"
                        :style="{
                          'background-color': `${card.color}`,
                        }"
                      >
                        <router-link
                          style="text-decoration: none"
                          :to="`/dashboard/${card.mainHeading}`"
                        >
                          <h4 class="containerClassTitle">
                            {{ card.mainHeading }}
                          </h4>
                        </router-link>
                      </div>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
    </div>
  </div>
</template>

<script>
import chipData from "../../../jsonData/ChipCard";
export default {
  data() {
    return {
      cards: chipData,
    };
  },
  created() {
    this.cards = chipData;
    console.log(this.languages);
  },
};
</script>

<style scoped>
.containerClass {
  width: 250px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  height: 100px;
}
.containerClassTitle {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 30px;
  color: black;
}
</style>
