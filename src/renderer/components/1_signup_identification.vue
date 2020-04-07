<template>
  <div id="wrapper">
   

    <main class="main">
   
   <header>

   <p class="logo_line">
<img class="block" src="../assets/icons/logo.svg" alt="Block logo">
Request access to the platform
</p>

   </header>

<div class="row">
<div class="col-lg-2"></div>
<div class="col-lg-8 spacer" style="text-align: center;">

<router-link to="/">
<button class="btn gradient_OP margin_20">Next</button>
</router-link>

<router-link to="/">
<button class="btn margin_20" style="background: #626262; color: white;">Cancel</button>
</router-link>

</div>
</div>


</main>
  </div>
</template>

<script>
  export default {
    name: 'signup-1'
  }
</script>

<style scoped>

  /*Main*/
  .main{
    background: rgb(32, 32, 32) url('../assets/screens/0_welcome/geometry.svg') center/120%;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    padding: 0px 5% 0px 5%;
    color: white;

}

.logo_line{
  margin-top: 0px;
  padding-left: 50px; 
 text-align: left;
 line-height: 50px;
 height: 50px;
 font-size: 25pt;
 background: rgb(32,32,32);
 width: 100%;
}
.block{
  height: 50px;
  vertical-align: middle;
}
.votechain{
height: 50px;
padding-left: 10px;
vertical-align: middle;
}

</style>
