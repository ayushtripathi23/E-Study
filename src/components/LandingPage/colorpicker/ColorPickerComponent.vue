<template>
  <div class="colorContainer">
      <h4 class="colorHeading">Color Picker</h4>
      <h4 class="colorSubHeading">E-Study Famous color picker</h4>
      <div class="colorImageDiv">

     
      <img class="colorImage"  src="https://www.w3schools.com/colors/img_colormap.gif" alt="color-picker">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.colorContainer{
    background-color: rgb(252, 252, 252);
    width: 100%;
    height: 500px;
}
.colorHeading{
    display: flex;
    padding-top: 100px;
    font-weight: bolder;
    justify-content: center;
    font-size: 55px;
}
.colorSubHeading{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 20px;
}
.colorImageDiv{
    display: flex;
    justify-content: center;
}
.colorImage{
    margin-top: 20px;
    padding-top: 10px;
    width: 200px;
    height: 200px;
}

</style>