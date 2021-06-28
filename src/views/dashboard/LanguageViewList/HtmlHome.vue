<template>
  <div class="mainContainerView">
    <div class="titletext">
      <h4 class="htmlLabel">HTML Tutorial</h4>
      <h4 class="htmlLabel1">Easy Learning with HTML "Try it Yourself"</h4>
      <h4 class="htmlLabel2">
        With our "Try it Yourself" editor, you can edit the HTML code and view
        the result:
      </h4>
    </div>
    <div class="tryItContaner">
      <h4 class="tryItLabel">EXAMPLE</h4>
      <div class="prismContainer"></div>
      <button class="tryItButton">Try It Yourself</button>
    </div>
    <h4 class="clickOnTry">
      Click on the "Try it Yourself" button to see how it works.
    </h4>
    <v-divider />
    <div>
      <h3 class="htmlLabel">HTML Examples</h3>
      <h5 class="htmlLabel1">
        In this HTML tutorial, you will find more than 200 examples. With our
        online "Try it Yourself" editor, you can edit and test each example
        yourself!
      </h5>
      <button class="goButton">Go to HTML Examples</button>
    </div>
    <v-divider />
    <v-divider />
    <div class="titletext">
      <h4 class="htmlLabel">HTML Exercise</h4>
      <h4 class="htmlLabel1">
        This HTML tutorial also contains nearly 100 HTML exercises.
      </h4>
    </div>
    <div class="tryItContaner">
      <h4 class="tryItLabel">Exercise</h4>
      <div class="prismContainer"></div>
      <button class="tryItButton">Submit Answer</button>
    </div>

    <v-divider />
    <div>
      <h3 class="htmlLabel">HTML Quiz Test</h3>
      <h5 class="htmlLabel1">Test your HTML skills with our HTML Quiz!</h5>
      <button class="goButton">Go to HTML Examples</button>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .mainContainerView {
    width: 80%;
    border: 1px solid;
    background-color: rgb(255, 255, 255);
  }
  .titletext {
    margin-top: 100px;
  }
  .tryItContaner {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    background-color: rgb(219, 219, 219);
    height: 450px;
  }
  .prismContainer {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(53, 51, 51);
    height: 70%;
    border-radius: 1rem;
  }
  .htmlLabel {
    letter-spacing: 1.5;
    font-size: 25px;
    padding-left: 20px;
    font-weight: 400;
  }
  .htmlLabel1 {
    letter-spacing: 1.5;
    font-weight: 300;
    font-size: 19px;
    padding-left: 20px;
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
