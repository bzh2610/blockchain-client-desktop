<template>
  <div class="footer draggable">
    <hr/>
    <h4>Shortcuts</h4>
    <p>
      <span class="outer-link" v-on:click="open('http://google.com/')"> Homepage </span>
    </p>
    <p style="font-size: 8pt;">
      Votechain, a blockchain voting system by Vlad Gheorghiu, Sander Hitz, Evan Ollivier &amp; Thomas Post
    </p>
  </div>
</template>


<script>
export default {
  name: 'Footer',
  data: function () {
    return {
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>


<style scoped>
/*Sidebar*/
.footer {
  width: 100%;
  display: block;
  min-height: 20vh;
  max-height: 250px;
  background: transparent;
}


.outer-link{
  font-size: 15pt;
  color: rgb(28, 131, 243);
  font-weight: 500;
  cursor: pointer;
}

</style>

