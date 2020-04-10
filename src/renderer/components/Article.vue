<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 150px;">
          <h4>Environment communities</h4>
        </div>
      </div>

      <div class="row" style="padding-top: 25px;">
       
      </div>





  <Footer></Footer>
    </main>

  </div>
</template>

<script>
import Sidebar from './partials/Sidebar'
import Footer from './partials/Footer'

export default {
  name: 'article',
  components: { Sidebar, Footer },
  methods: {
  }
}
</script>

<style scoped>

.article_showcase{
      height: 40vh;
}

.main{
  padding: 0px;
  overflow-x: hidden;
}

</style>
