<template>
  <div id="wrapper">
        <div class="sidebar">
      <ul>
        <li class="icon_container">
          <img src="../assets/icons/logo_text@3x.png" class="logo">
          </li>
        <li> </li>
        <li>
          <input class="search" type="text" placeholder=" Search...">
        </li>
        <li class="selected">
          <i>􀋃</i> Home
        </li>
        <li><i>􀍖</i>  Votes </li>
        <li><i>􀝋</i>  Communities</li>
        
        <router-link to="/statistics">
          <li> <i>􀜋</i>  Statistics </li>
        </router-link>
        <li><i>􀍟</i>  Settings</li>
         <router-link to="/welcome">
          <li> <i>􀜋</i>  Welcome </li>
        </router-link>
      </ul>
    </div>

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
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
 

/*Sidebar*/
.sidebar{
    background: transparent;
    width: 200px;
display: inline-block;
height: 100%;
position: fixed;
top: 0px;
left: 0px;
padding-top: 30px;
font-size: 16pt;
font-weight: 400;
color: rgba(255, 255, 255, 0.7);
  }





  .sidebar ul{
    margin: 0px;
    padding-left: 0px;
  }

  .sidebar ul li{
    padding-left: 20px;
    font-family: "SF Pro Rounded";
    list-style: none;
    line-height: 40pt;
    vertical-align: middle;
    cursor: pointer;
  }

  .sidebar ul li:hover{
    color: white;
  }

  .sidebar ul li.selected{
    background: rgba(255, 255, 255, 0.25);
  }


  .icon_container{
    vertical-align: middle;
    line-height: 60px;
    text-align: center;
  }

  .logo{
    width: 70%;
    height: auto;
    padding-top: 5px;
    margin-left: -10%;
  }

  i{
    width: 50px;
    display: inline-block;
    font-style: normal;
    text-align: center;
    margin-left: -10px;
  }


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
