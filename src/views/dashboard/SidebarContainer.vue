<template>
  <div>
    <div v-for="list in sideBarList" :key="list.languageTitle">
      <h4 class="sidebarTitle">{{ list.languageTitle }}</h4>
      <div class="hoverEffect">
        <h4
          class="sidebarBody"
          v-for="(item, index) in list.languageBody"
          :key="index"
        >
          {{ item }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import SideBardata from "../../jsonData/SidebarLanguage";

export default {
  data() {
    return {
      sideBarList: [],
    };
  },
  created() {
    this.sideBarList = SideBardata;
  },
};
</script>

<style scoped>
.sidebarTitle {
  width: 100%;
  margin: 0;
  padding-left: 20px;
  padding-bottom: 5px;
  padding-top: 5px;
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
</style>
