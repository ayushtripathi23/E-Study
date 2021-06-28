<template>
  <div class="templateContainer">
    <h4 class="templateHeading">Web Templates</h4>
    <h4 class="templateSubHeading">
      Browse our selection of free responsive HTML templates
    </h4>
    <div class="templateImageDiv">
      <img
        class="templateImage"
        src="https://www.w3schools.com/w3css_templates.jpg"
        alt="template-picker"
      />
    </div>
    <div class="templateButtonDiv">
      <button class="templateButton">BROWSE TEMPLATES</button>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .templateContainer {
    background-color: rgb(252, 252, 252);
    width: 100%;
    height: auto;
  }
  .templateHeading {
    display: flex;
    padding-top: 40px;
    font-weight: bolder;
    justify-content: center;
    font-size: 55px;
  }
  .templateSubHeading {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 20px;
  }
  .templateImageDiv {
    display: flex;
    justify-content: center;
  }
  .templateImage {
    margin-top: 20px;
    padding-top: 10px;
    margin-bottom: 60px;
    width: 80%;
    height: auto;
  }
  .templateButton {
    width: 500px;
    border-radius: 1rem;
    height: 60px;
    background-color: #282a35;
    margin-bottom: 40px;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  .templateButtonDiv {
    display: flex;
    justify-content: center;
  }
</style>
