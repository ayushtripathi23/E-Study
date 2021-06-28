<template>
  <div class="codegameContainer">
      <h4 class="codegameHeading">Code Game</h4>
      <h4 class="codegameSubHeading">help the Lynx collect pine comes!</h4>
      <div class="codegameImageDiv">
      <img class="codegameImage"  src="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be10.png" alt="code-game">
      </div>
      <div class="codegameButtonDiv">
      <button class="codegameButton">play game</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.codegameContainer{
    background-color: #96D4D4;
    width: 100%;
    height: auto;
    
}
.codegameHeading{
    display: flex;
    padding-top: 100px;
    font-weight: bolder;
    justify-content: center;
    font-size: 55px;
}
.codegameSubHeading{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 20px;
}
.codegameImageDiv{
    display: flex;
    justify-content: center;
}
.codegameImage{
    margin-top: 20px;
    padding-top: 10px;
    width: 200px;
    height: 200px;
}
.codegameButtonDiv{
     display: flex;
    justify-content: center;
}
.codegameButton{
    margin-top: 30px;
    margin-bottom: 60px;
    width: 200px;
    height: 50px;
    border-radius: 2rem;
    background-color: #282A35;
    color: white;
}

</style>