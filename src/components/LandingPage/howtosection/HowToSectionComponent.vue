<template>
  <div class="howtoContainer">
    <h4 class="howtoHeading">How To Section</h4>
    <h4 class="howtoSubHeading">Code snippets for HTML, CSS and JavaScript</h4>
    <div class="howtoImageDiv">
      <button class="howtoButton">Learn How To</button>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .howtoContainer {
    background-color: rgb(252, 252, 252);
    width: 100%;
    height: 500px;
  }
  .howtoHeading {
    display: flex;
    padding-top: 100px;
    font-weight: bolder;
    justify-content: center;
    font-size: 55px;
  }
  .howtoSubHeading {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 20px;
  }
  .howtoImageDiv {
    display: flex;
    justify-content: center;
  }
  .howtoButton {
      margin-top: 100px;
    width: 500px;
    height: 50px;
    background-color: #282A35;
    color: white;
    border-radius: 2rem;
  }
</style>
