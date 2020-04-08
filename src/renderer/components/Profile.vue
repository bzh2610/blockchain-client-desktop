<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Profile</h1>


      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from './partials/Sidebar'
import Footer from './partials/Footer'

export default {
  name: 'Profile',
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

</style>
