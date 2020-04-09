<template>
  <div id="wrapper">
   

    <main class="main">
   
   <header>

   <p class="logo_line">
<img class="block" src="/src/renderer/assets/icons/logo.svg" alt="Block logo">
Request access to the platform
</p>

   </header>

<div class="row">
<div class="col-lg-2"></div>
<div class="col-lg-8 spacer" style="text-align: center;">
  
<h4>Your request has been sent,<br>
you should receive an invitation to join the platform soon.
</h4>

<img src="/src/renderer/assets/icons/envelope.svg" alt="Envelope" style="width: 25%; margin: 40px;">


<h4>Check your (physical) mailbox in the comming days</h4>


<router-link to="/welcome">
<button class="btn gradient_OP margin_20">Back</button>
</router-link>

</div>
</div>


</main>
  </div>
</template>

<script>
  export default {
    name: 'signup-finished'
  }
</script>

<style scoped>



  /*Main*/
  .main{
    background: rgb(32, 32, 32);
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    padding: 0px 5% 0px 5%;
    color: white;
}

.main:before {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url('/src/renderer/assets/screens/0_welcome/geometry.svg') center/120%;
    width: 100%;
    height: 100%;
    opacity : 0.5;
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
