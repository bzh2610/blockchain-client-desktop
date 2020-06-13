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
              <span>Homepage</span>
            </div>

            <div
              style="width: 80%; box-shadow: 0 0 12pt 0 rgba(136, 152, 170, 0.15) !important; margin: 30pt auto 30pt auto;"
              v-for="i in 10"
              v-bind:key="i"
            >
              <div style="width: calc(10% - 5px); display: inline-block; vertical-align: top;">
                <img
                  style="margin-left: -50%; margin-top: 45%;"
                  class="avatar"
                  :src="'https://avatar.lisk.ws/'+(Math.random()*0xFFFFFF<<0).toString(6)"
                />
              </div>
              <div
                class="post-content"
                style="display: inline-block; width: calc(90%); padding: 25px; top: 0px;"
              >
                <small>{{ (Math.random()*0xFFFFFF<<0).toString(16) }}</small>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Morbi vel ex dolor. Aliquam ut nisi viverra purus condimentum tempor
                 at vulputate justo. Mauris eu condimentum mi. Fusce non magna ligula.
                 Phasellus luctus fringilla quam, eu ultrices dolor rutrum posuere.
                 Phasellus imperdiet aliquet dignissim.
                </p>
              <div class="actions" style="margin-top: 5pt; float: left; display: inline-block;">
              <table>
                <tr>
 <td>             <font-awesome-icon icon="thumbs-up" size="sm" class="thumbs-up"/>
     </td><td>         <font-awesome-icon icon="thumbs-down" size="sm" class="thumbs-down" />
 </td><td><font-awesome-icon icon="comments" size="sm" class="comments" />
 </td><td><font-awesome-icon icon="share" size="sm" class="share" />
 </td></tr><tr>
   <td>265</td>
   <td>12</td>
   <td>102</td>
   <td>43</td>
   </tr>
 </table>
              </div>
              </div>
            </div>

           <Pagination></Pagination>
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
import Pagination from "@/components/elements/Pagination";

export default {
  name: "article",
  components: { Sidebar, Footer, CommunitySidebar, Pagination },
  methods: {}
};
</script>
<style scoped lang="less">
.main{
   background: linear-gradient(90deg, rgb(233, 182, 16), rgb(245, 131, 203)) !important;
}
.actions{
  .thumbs-up:hover{
    color: rgb(224, 63, 144);
  }
  .thumbs-down:hover{
    color: rgb(255, 145, 0)
  }
  .comments:hover{
    color: rgb(63, 201, 189);
  }
  .share:hover{
    color: rgb(93, 71, 192);
  }
}

.actions td{
  padding: 0px 15px 0px 15px;
  border: none;
}
.actions .thumbs-up, .actions .thumbs-down, .actions .comments, .actions .share{
  cursor: pointer;
  color: lightgrey;
}

</style>
<style scoped src="@/assets/css/community.css"></style>