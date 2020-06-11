<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main" style="background: rgb(243,245,250)">
      <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 50px;">
          <h4>Environment communities</h4>
        </div>
      </div>

      <div class="row" style="position: relative; top: -20vh; padding: 20px;">
        <div class="col col-lg-8" style="min-height: 50px;">
          <div class="content">
            <div class="content-header" style="padding: 10px; padding-left: 20px;">
              <span>Top users</span>
            </div>
            <table>
              <tr>
                <th></th>
                <th>User</th>
                <th>Votes</th>
                <th>Ranking</th>
              </tr>
              <tr v-for="i in 10">
                <td>
                  <img
                    class="avatar"
                    :src="'https://avatar.lisk.ws/'+(Math.random()*0xFFFFFF<<0).toString(16)"
                  />
                </td>
                <td>{{ (Math.random()*0xFFFFFF<<0).toString(16) }}</td>
                <td>{{ 232421-1535*i }}</td>
                <td>{{ i }}</td>
              </tr>
            </table>

            <ul class="justify-content-end mb-0 pagination">
              <li class="disabled page-item">
                <a href="#pablo" tabindex="-1" class="page-link">
                  <span><</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="active page-item">
                <a href="#pablo" class="page-link">1</a>
              </li>
              <li class="page-item">
                <a href="#pablo" class="page-link">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a href="#pablo" class="page-link">3</a>
              </li>
              <li class="page-item">
                <a href="#pablo" class="page-link">
                  <span>></span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col col-lg-4">
          <div class="content bg-secondary" style="padding-left: 10%;">
            <img
              :src="'https://avatar.lisk.ws/'+(Math.random()*0xFFFFFF<<0).toString(16)"
              style="width: 30%;"
            />
            <span style="color: black;">TEDxBrussels</span>
            <ul class="sidebar-menu">
              <li>
                <router-link to="/community">
                  <font-awesome-icon icon="columns" size="lg" style="color : rgb(123,96,252);" />Homepage
                </router-link>
              </li>
              <li>
                <router-link to="/community/admin">
                  <font-awesome-icon icon="poll" size="lg" style="color: rgb(255,214,0)" />Polls
                </router-link>
              </li>
              <li>
                <font-awesome-icon icon="calendar-alt" size="lg" style="color :  rgb(245,54,92)" />Events
              </li>
              <li>
                <font-awesome-icon icon="users" size="lg" style="color : rgb(251,109,76)" />Administrators
              </li>
              <li>
                <font-awesome-icon icon="info-circle" size="lg" style="color : rgb(17,205,239)" />About
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar";
import Footer from "@/components/partials/Footer";

export default {
  name: "communityAdmin",
  components: { Sidebar, Footer },
  methods: {}
};
</script>
<style lang="less" scoped>
.sidebar-menu {
  list-style: none;
}

.sidebar-menu li {
  padding: 10px;
}

table {
  tr {
    width: 100%;
    padding: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  tr th {
    background-color: #dedede !important;
    color: #007bff;
    font-weight: 300;
    text-align: left;
    padding: 10px;
  }
  tr td {
    font-weight: 400;
    text-align: left;
    padding: 10px;
  }
}

.dark table {
  tr {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  tr th {
    background-color: #f7fafc !important;
    color: #4d7bca;
  }
}

font-awesome-icon {
  width: 25pt;
}
</style>
<style scoped>
table {
  width: 100%;
  color: black;
  border-radius: 20px;
  margin: 20px 0 20px 0;
  max-height: 800px;
  overflow-y: scroll;
}

.avatar {
  width: 50px;
  border-radius: 50%;
}

/* */

.pagination .page-item {
  margin: 5px;
  border-radius: 50%;
  background: #f7fafc;
  width: 40px;
  height: 40px;
  color: black;
  box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.pagination .page-item a {
  background: none;
  border: none;
}

.pagination .page-item.active {
  background: #4d7bca;
  color: white;
  border: none;
}

/* */

.content.dark {
  color: white;
  background: #172b4d;
}
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

.bg-secondary {
  background: #f7fafc !important;
}

.article_showcase {
  height: 30vh;
  border-radius: 0 0 0px 0px;
  background: linear-gradient(90deg, rgb(233, 182, 16), rgb(245, 131, 203));
}

.main {
  padding: 0px;
  overflow-x: hidden;
}
</style>
