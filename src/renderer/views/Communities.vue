<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Communities</h1>


  <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 150px;">
          <h4>Environment communities</h4>
        </div>
      </div>


           <div class="row" style="padding-top: 25px;">
        <div class="article_showcase col col-md-4 event">
          <h4>Events</h4>
        </div>

        <div class="article_showcase col col-md-3 elderly" style="margin: 0px 2.5% 0px 2.5%;">
          <h4>Events</h4>
        </div>

        <div class="article_showcase col col-md-4 politics">
          <h4>Launch your own community</h4>
        </div>
        </div>

      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/partials/Sidebar'
import Footer from '@/components/partials/Footer'

export default {
  name: 'Communities',
  methods: {},
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>


.event {
  background: url("../assets/showcase/event.png") center/cover;
}

.politics {
  background: url("../assets/showcase/politics.png") center/cover;
}

.elderly {
  background: url("../assets/showcase/elderly.png") center/cover;
}
</style>
