<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Settings</h1>


      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/partials/Sidebar'
import Footer from '@/components/partials/Footer'

export default {
  name: 'Settings',
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
