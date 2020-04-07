<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Votes</h1>

      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from './partials/Sidebar'
import Footer from './partials/Footer'

export default {
  name: 'Votes',
  components: {
    Sidebar,
    Footer
  },
  methods: {},
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
