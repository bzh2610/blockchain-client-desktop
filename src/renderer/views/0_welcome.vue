<template>
  <div id="wrapper">
   

    <main class="main">
   
   <p class="logo_line">
<img class="block" src="../assets/icons/logo.svg" alt="Block logo"><img src="../assets/icons/votechain.svg" class="votechain" alt="Votechain">
</p>

<div class="row">
<div class="col-lg-2"></div>
<div class="col-lg-8 spacer" style="text-align: center;">

<router-link to="/signup">
<button class="btn gradient_OP margin_20">Sign up</button>
</router-link>

<router-link to="/">
<button class="btn margin_20" style="background: #626262; color: white;">Sign in</button>
</router-link>

</div>
</div>


</main>
  </div>
</template>

<script>
  export default {
    name: 'welcome'
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
  margin-top: 10%;
 text-align: center; line-height: 100px; height: 100px;
}
.block{
  height: 100px;
  vertical-align: middle;
}
.votechain{
height: 50px;
padding-left: 10px;
vertical-align: middle;
}

</style>
