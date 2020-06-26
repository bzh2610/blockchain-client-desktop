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
            >
              <div style="width: calc(10% - 5px); display: inline-block; vertical-align: top;">
                <img
                  style="margin-left: -50%; margin-top: 45%;"
                  class="avatar"
                  :src="'http://localhost:8080/'+(Math.random()*0xFFFFFF<<0).toString(6)"
                />
              </div>
              <div
                class="post-content"
                style="display: inline-block; width: calc(90%); padding: 25px; top: 0px;"
              >
              <form @submit.prevent="newPost">
                <small>{{ (Math.random()*0xFFFFFF<<0).toString(16) }}</small>
                <br />
                 <b-field label="Post a new message :">
            <b-input name="post" style="color: black;" maxlength="200" type="textarea" placeholder="What do you want to discuss ?"></b-input>
        </b-field>
        <span>{{ formError }}</span>
        <input class="button" type="submit" value="Publish"/>

              </form>
              </div>
            </div>








            <div
              style="width: 80%; box-shadow: 0 0 12pt 0 rgba(136, 152, 170, 0.15) !important; margin: 30pt auto 30pt auto;"
              v-for="post in this.posts"
              v-bind:key="post"
            >
              <div style="width: calc(10% - 5px); display: inline-block; vertical-align: top;">
                <img
                  style="margin-left: -50%; margin-top: 45%;"
                  class="avatar"
                  :src="'http://localhost:8080/'+post.user"
                />
              </div>
              <div
                class="post-content"
                style="display: inline-block; width: calc(90%); padding: 25px; top: 0px;"
              >
                <small>{{ post.user }}</small>
                <br />
                <p>{{ post.post }}
                </p>
              <div class="actions" style="margin-top: 5pt; float: left; display: inline-block;">
              <table>
                <tr>
 <td>             <font-awesome-icon icon="thumbs-up" size="sm" class="thumbs-up"/>
     </td><td>         <font-awesome-icon icon="thumbs-down" size="sm" class="thumbs-down" />
 </td><td><font-awesome-icon icon="comments" size="sm" class="comments" />
 </td><td><font-awesome-icon icon="share" size="sm" class="share" />
 </td></tr><tr>
   <td>{{ post.up }}</td>
   <td>{{ post.down }}</td>
   <td>{{ post.comments }}</td>
   <td>{{ post.shared }}</td>
   </tr>
 </table>
              </div>
              </div>
            </div>

           <Pagination></Pagination>
          </div>
        </div>

        <CommunitySidebar name="TEDxBrussels"></CommunitySidebar>
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
import ButtonRadio from "@/components/elements/ButtonRadio";

export default {
  name: "article",
  components: { Sidebar, Footer, CommunitySidebar, Pagination, ButtonRadio },
  data(){
    return{
      user : (Math.random()*0xFFFFFF<<0).toString(16),
      posts : [ ],
      formError: ""
    }
  },
  mounted(){
    for(var i = 0; i<10; i++){
      this.posts.push({
        user: (Math.random()*0xFFFFFF<<0).toString(16),
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                 Morbi vel ex dolor. Aliquam ut nisi viverra purus condimentum tempor\
                 at vulputate justo. Mauris eu condimentum mi. Fusce non magna ligula.\
                 Phasellus luctus fringilla quam, eu ultrices dolor rutrum posuere.\
                 Phasellus imperdiet aliquet dignissim.",
        up: (Math.random()*1000).toFixed(0),
        down: (Math.random()*100).toFixed(0),
        comments : (Math.random()*1000).toFixed(0),
        shared : (Math.random()*1000).toFixed(0)
      })
    }
  },
  methods: {
    newPost(submitEvent){
      this.formError = ""
      var post = submitEvent.target.elements.post.value
      
      if(post.length > 10){
      this.posts.unshift({
        user: this.user,
        post: post,
        up: 0,
        down: 0,
        comments : 0,
        shared : 0
      })
    }else {
      this.formError = "Your post must be at least 10 characters long."
    }
  }
  }
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



/* New post */
.button {
  display: inline-block;
  color: white;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 60px;
  width: 100%;
  vertical-align: middle;
  line-height: 60px; /* CHANGE THIS FOR MULTI LINE */
  height: 100%;
  font-weight: 400;
  font-size: 14pt;
  color: rgba(255, 255, 255, 0.747);
  background: #2CB1D1;
}
/* Hovered */
.button:hover, .button:active {
  font-weight: 600;
  outline: none;
  color: white;
}
</style>
<style scoped src="@/assets/css/community.css"></style>