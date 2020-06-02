<template>
    <div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
 computed: {
    statics() {
      // Nous verrons ce que représente `params` dans un instant.
      return this.$route.params.statistics
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
