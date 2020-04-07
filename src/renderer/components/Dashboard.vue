<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Dashboard</h1>

      <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 150px;">
          <h4>Environment communities</h4>
        </div>
      </div>

      <div class="row" style="padding-top: 25px;">
        <div class="article_showcase col col-md-6 event">
          <h4>Events</h4>
        </div>

        <div class="article_showcase col col-md-5 offset-md-1 community">
          <h4>Launch your own community</h4>
        </div>
      </div>


     <h5 style="padding-top: 25px;">Trending communities</h5>

      <div class="row ranking">
        <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/1.png" style="float: left"> 1. Eindhoven music festival</p>
        </div>

        <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/2.png" style="float: left"> 2. Homework help</p>
        </div>

        <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/3.png" style="float: left"> 3. Antwerp Festival</p>
        </div>

        <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/4.png" style="float: left"> 4. Breda entrepreneurs</p>
        </div>

        <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/2.png" style="float: left"> 5. Elderly Help</p>
        </div>

         <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/4.png" style="float: left">6. Climate watch group</p>
        </div>

         <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/1.png" style="float: left"> 7. TEDxTilburg</p>
        </div>

         <div class="col col-md-6 col-lg-4">
          <p> <img src="../assets/icons/3.png" style="float: left"> 8. Bradant students</p>
        </div>
      </div>



  <Footer></Footer>
    </main>

  </div>
</template>

<script>
import Sidebar from './partials/Sidebar'
import Footer from './partials/Footer'

export default {
  name: 'landing-page',
  components: { Sidebar, Footer },
  methods: {
  }
}
</script>

<style>
/*Main*/
.main {
  background: rgb(32, 32, 32);
  min-height: 100%;
  height: auto;
  width: calc(100% - 200px);
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 200px;
  margin-right: 20px;
  padding: 0px 5% 0px 5%;
  color: white;
}

.main h1:first-child {
  margin-top: 20px;
  font-weight: 600;
  font-size: 25pt;
}

.article_showcase {
  border-radius: 20px;
  height: calc(100vw / 5);
  min-height: 200px;
  background: url("../assets/showcase/environment.png") center/cover;
}

.event {
  background: url("../assets/showcase/event.png") center/cover;
}

.community {
  background: url("../assets/showcase/community.png") center/cover;
}

.article_showcase h4 {
  margin-left: 0px;
  margin-top: 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16pt;
  color: black;
}


.ranking p{
  font-size: 10pt;
}

.ranking .col{
  margin-top: 20px;
}
</style>
