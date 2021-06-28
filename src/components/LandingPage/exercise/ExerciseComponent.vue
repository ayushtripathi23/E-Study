<template>
  <div class="exerciseContainer">
      <h4 class="exerciseHeading">Exercise</h4>
      <h4 class="exerciseSubHeading">Test yourself with exercise</h4>
      <div class="exerciseSubMain">
 <div class="exerciseLangContainer">
     <div class="row">
         <div class="col" >
            <button class="exerciseButton">HTML Exercise</button>
         </div>
          <div class="col">
            <button class="exerciseButton">CSS Exercise</button>
         </div>
          <div class="col">
            <button class="exerciseButton">JS Exercise</button>
         </div>

     </div>
      <div class="row">
         <div class="col">
            <button class="exerciseButton1">SQL</button>
         </div>
          <div class="col">
            <button class="exerciseButton1">Python</button>
         </div>
          <div class="col">
            <button class="exerciseButton1">PHP</button>
         </div>
          <div class="col">
            <button class="exerciseButton1">JQuery</button>
         </div>
          <div class="col">
            <button class="exerciseButton1">java</button>
         </div>
          <div class="col">
            <button class="exerciseButton1">C++</button>
         </div>
         <div class="col">
            <button class="exerciseButton1">C#</button>
         </div>

     </div>
 </div>
      </div>
     
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.exerciseContainer{
    background-color: #282A35;
    width: 100%;
    height: 500px;
}
.exerciseHeading{
    display: flex;
    padding-top: 50px;
    font-weight: bolder;
    justify-content: center;
    font-size: 55px;
    color: white;
}
.exerciseSubHeading{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: white;
    font-size: 20px;
}
.exerciseLangContainer{
    
    width: 1000px;
    height: 200px;
}
.exerciseButton{
    width: 280px;
    height: 50px;
    border-radius: 0.5rem;
    margin-left: 25px;
    color: white;
    font-weight: bolder;
    background-color: #04AA6D;
}
.exerciseButton1{
    width: 100px;
    height: 50px;
    border-radius: 0.5rem;
    margin-left: 5px;
    color: white;
    font-weight: bolder;
    background-color: #04AA6D;
}
.exerciseSubMain{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

</style>