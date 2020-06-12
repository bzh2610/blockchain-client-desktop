<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main" style="background: rgb(243,245,250)">
      <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 50px;"></div>
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
              <tr v-for="i in 10" v-bind:key="i">
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
                  <span>&lt;</span>
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

        <CommunitySidebar></CommunitySidebar>
      </div>

 <Footer style="background: rgba(10,10,10, 0.7);  padding-bottom: 5px;"></Footer>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar";
import Footer from "@/components/partials/Footer";
import CommunitySidebar from "@/components/community/CommunitySidebar";

export default {
  name: "communityAdmin",
  components: { Sidebar, Footer, CommunitySidebar },
  methods: {}
};
</script>
<style lang="less" scoped>
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

table {
  width: 100%;
  color: black;
  border-radius: 20px;
  margin: 20px 0 20px 0;
  max-height: 800px;
  overflow-y: scroll;
}
</style>

<style scoped src="@/assets/css/community.css"></style>