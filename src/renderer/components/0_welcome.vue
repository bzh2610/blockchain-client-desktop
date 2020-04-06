<template>
  <div id="wrapper">
   

    <main class="main">
   
   <p class="logo_line">
<img class="block" src="../assets/icons/logo.svg" alt="Block logo"><img src="../assets/icons/votechain.svg" class="votechain" alt="Votechain">
</p>

</main>
  </div>
</template>

<script>
  export default {
    name: 'welcome'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a, router-link{
    color: inherit;
    text-decoration: none;
  }

  body{
  font-family: 'Montserrat';
}


  /*Main*/
  .main{
    background: rgb(32, 32, 32) url('../assets/screens/0_welcome/geometry.svg') center/120%;
    width: 100%;
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    margin-right: 20px;
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
