<template>
  <div class="col col-lg-4" style="padding-right: 2.5%;">
    <div class="content bg-secondary" style="padding-left: 10%;">
      <img
        :src="'https://avatar.lisk.ws/'+(Math.random()*0xFFFFFF<<0).toString(16)"
        style="width: 30%;"
      />
      <span style="color: black;">TEDxBrussels</span>
      <ul class="sidebar-menu">
        <li>
          <router-link to="/community">
            <font-awesome-icon icon="columns" size="lg" style="color : rgb(123,96,252);" />
            <span>Homepage</span>
          </router-link>
        </li>
        <li>
          <router-link to="/community/polls">
            <font-awesome-icon icon="poll" size="lg" style="color: rgb(255,214,0)" />
            <span>Polls</span>
          </router-link>
        </li>
        <li>
          <router-link to="/community/events">
            <font-awesome-icon icon="calendar-alt" size="lg" style="color :  rgb(245,54,92)" />
            <span>Events</span>
          </router-link>
        </li>
        <li>
          <router-link to="/community/admin">
            <font-awesome-icon icon="users" size="lg" style="color : rgb(251,109,76)" />
            <span>Administrators</span>
          </router-link>
        </li>
        <li>
          <router-link to="/community/about">
            <font-awesome-icon icon="info-circle" size="lg" style="color : rgb(17,205,239)" />About
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content {
  background: rgb(247, 250, 252);
  border-radius: 20px;
  margin: 20px;
  width: 100%;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
  display: inline-block;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
}

.content.dark {
  color: white;
  background: #172b4d;
}

.bg-secondary {
  background: #f7fafc !important;
}

.sidebar-menu {
  list-style: none;
}

.sidebar-menu li {
  padding: 10px;
}
</style>

<script>
export default {
  name: "CommunitySidebar",
  components: {},
  methods: {}
};
</script>