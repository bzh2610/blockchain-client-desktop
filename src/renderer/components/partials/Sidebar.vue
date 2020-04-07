<template>
  <div class="sidebar draggable">
    <ul>
      <li></li>
      <li style="padding: 20px 0px 20px 0px; text-align: center;">
        <input class="search fa" type="text" :placeholder="search" />
      </li>
      <router-link v-on:click.native="changeTab(1)" to="/">
        <li v-on:click="changeTab(1)"
            v-bind:class="{ selected: (selected_item === 1) }">
        <i>
          <font-awesome-icon icon="columns" />
        </i> Dashboard
      </li>
      </router-link>

      
      <router-link v-on:click.native="changeTab(2)" to="/votes">
        <li v-on:click="changeTab(2)"
            v-bind:class="{ selected: (selected_item === 2) }">
        <i>
          <font-awesome-icon icon="vote-yea" />
        </i> Votes
        </li>
      </router-link>
      
      
      <router-link v-on:click.native="changeTab(3)" to="/communities" >
        <li  v-on:click="changeTab(3)" 
             v-bind:class="{ selected: (selected_item === 3) }">
        <i>
          <font-awesome-icon icon="user-friends" />
        </i> Communities
      </li>
      </router-link>

      <router-link v-on:click.native="changeTab(4)" to="/statistics" >
        <li v-on:click="changeTab(4)" 
            v-bind:class="{ selected: (selected_item === 4) }">
          <i>
            <font-awesome-icon icon="chart-bar" />
          </i>
          Statistics
        </li>
      </router-link>
      <li>
        <i>􀍟</i> Settings
      </li>
      <router-link to="/welcome">
        <li>
          <i>
            <font-awesome-icon icon="sign-in-alt" />
          </i> Welcome
        </li>
      </router-link>

      <li class="user_tab">
        <img src="../../assets/icons/1.png" style="width: 40px;" /> John Doe
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: 'Sidebar',
  data: function () {
    return {
      search: 'Search',
      selected_item: this.$parent.$parent.selected_item
    }
  },
  methods: {
    changeTab (value) {
      // debugger
      this.selected_item = value
      this.$parent.$parent.selected_item = value
    }
  }
}
</script>


<style scoped>
/*Sidebar*/
.sidebar {
  background: rgba(0, 0, 0, 0.7);
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

.sidebar ul {
  height: 100%;
  margin: 0px;
  padding-left: 0px;
}

.sidebar ul li {
  padding-left: 20px;
  list-style: none;
  line-height: 30pt;
  vertical-align: middle;
  cursor: pointer;
  font-family: "Helvetica Neue";
  font-size: 14pt;
  font-weight: 500;
}

.sidebar ul li:hover {
  color: white;
}

.sidebar ul li.selected {
  background: rgba(255, 255, 255, 0.25);
}

.sidebar ul li.user_tab {
  font-size: 12pt;
  position: absolute;
  bottom: 15px;
  font-weight: 500;
}

.icon_container {
  vertical-align: middle;
  line-height: 60px;
  text-align: center;
}

i {
  width: 50px;
  display: inline-block;
  font-style: normal;
  text-align: center;
  margin-left: -10px;
}

</style>

