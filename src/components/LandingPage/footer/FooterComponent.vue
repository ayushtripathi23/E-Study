<template>
  <div>
    <div class="footerContainer">
      <h4 class="footertitle">
        W3Schools is optimized for learning, testing, and training. Examples
        might be simplified to improve reading and basic understanding.
        Tutorials, references, and examples are constantly reviewed <br />
        to avoid errors, but we cannot warrant full correctness of all content.
        While using this site, you agree to have read and accepted our terms of
        use, cookie and privacy policy.<br />
        Copyright 1999-2021 by Refsnes Data. All Rights Reserved.
      </h4>
      <div class="footerDiv">
        <button class="footerButton">E-STUDY SHOP</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .footerContainer {
    width: 100%;
    height: auto;
    background-color: #282a35;
  }
  .footertitle {
    color: white;
    font-size: 15px;
  }
  .footerDiv {
    display: flex;
    justify-content: center;
  }
  .footerButton {
    width: 400px;
    height: 50px;
    border-radius: 2rem;
    color: white;
    background-color: #059862;
  }
</style>
