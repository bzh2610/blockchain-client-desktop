<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Votes</h1>

  <div class="row">
    <div class="col-md-5" style="color: black; background: linear-gradient(45deg, #EC42FA, #6EC6E9); border-radius: 20px; padding: 10px;">
      <h5 style="font-size: 14pt;">Eindhoven municipality, 12 hours left</h5>
      <hr>
      <p style="text-align: center">
        Would you have 2H next week to share about your professional background with high school students ?
      </p>

      <button class="btn  margin_20">Yes</button>
      <button class="btn  margin_20">No</button>
    </div>

    <div class="col-md-5 offset-2" style="color: black; background: linear-gradient(45deg, #6DE5AC, #B9EA75, #DEC855); border-radius: 20px; padding: 10px;">
      <h5 style="font-size: 14pt;">Eindhoven municipality, 12 hours left</h5>
       <hr>
      <p style="text-align: center">
        Would you have 2H next week to share about your professional background with high school students ?
      </p>

      <button class="btn  margin_20">Yes</button>
      <button class="btn  margin_20">No</button>
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
