<template>
  <div id="wrapper">

    <sidebar></sidebar>

    <main class="main">
    <h1>Dashboard</h1>

<div class="row">
    <div class="article_showcase col col-lg-12"
          style="min-height: 150px;" >
        <h4>Environment communities</h4>
    </div>
</div>

<div class="row" style="padding-top: 25px;">
    <div class="article_showcase col col-md-5" >
      <h4>Environment communities</h4>
  </div>
  
  <div class="article_showcase col col-md-5 offset-md-2" >
    <h4>Environment communities</h4>
</div>
   
</div>

</main>
  </div>
</template>

<script>
  import Sidebar from './partials/Sidebar'

  export default {
    name: 'landing-page',
    components: { Sidebar },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
 
  /*Main*/
  .main{
    background: rgb(32, 32, 32);
    width: calc(100% - 200px);
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 200px;
    margin-right: 20px;
    padding: 0px 5% 0px 5%;
    color: white;
}

.main h1:first-child{
  margin-top: 20px;
  font-weight: 600;
  font-size: 25pt;
}



.article_showcase{
  border-radius: 20px;
  height: calc(100vw / 5);
  min-height: 200px;
  background: url('../assets/showcase/environment.png') center/cover;
}


.article_showcase h4{
 margin-left: 20px;
 margin-top: 20px;
 font-family: 'Montserrat';
 font-weight: 400;
 font-size: 16pt;
 color: black;
}



</style>
