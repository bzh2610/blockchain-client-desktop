<template>
  <div id="wrapper">
        <div class="sidebar">
      <ul>
        <li class="icon_container"><img src="assets/block.png" class="logo"></li>
        <li> </li>
        <li>
          <input class="search" type="text" placeholder="Search...">
        </li>
                <router-link to="/">
        <li>
          <i>􀋃</i> Home
        </li>
                </router-link>
        <li><i>􀍖</i>  Votes </li>
        <li><i>􀝋</i>  Communities</li>
        <li class="selected">
        
          <i>􀜋</i>  Statistics </li>

        <li><i> <font-awesome-icon icon="user-secret"/></i>  Settings</li>
      </ul>
    </div>

    <main class="main">
    <h1>Statistics</h1>

    <div class="article_showcase lg_8" >
        <h4>Environment communities</h4>
    </div>


    <div class="article_showcase lg_4" >
      <h4>Environment communities</h4>
  </div><!--


  --><div class="article_showcase lg_4" >
    <h4>Environment communities</h4>
</div>
   
</main>
  </div>
</template>

<script>
  export default {
    name: 'statistics',
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

  .sidebar ul li.icon_container{
    height: 50px;
  }

  .logo{
    height: 35px;
    padding: 10px;
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
    width: 200%;
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 200px;
    padding: 0px 5% 0px 5%;
    color: white;
}



.article_showcase{
  border-radius: 20px;

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
