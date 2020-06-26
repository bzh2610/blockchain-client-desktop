<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main">
      <h1>Dashboard</h1>

      <div class="row">
        <div
          class="article_showcase col col-lg-12"
          style="min-height: 150px;"
          v-on:click="push('article')"
        >
          <h4>Environment communities</h4>
        </div>
      </div>


      <h5 style="padding-top: 25px;">Most subscribed communities</h5>

      <div class="row ranking">
        <div
          class="col col-md-6 col-lg-4"
          v-for="(item, index) in trendingCommunities"
          :key="'trendingCommunity-'+index"
        >
         
            <img
              :src="'http://localhost:8080/'+(Math.random()*0xFFFFFF<<0).toString(6)"
              style="float: left; width: 50px;"
            />
          <p style="margin-left: 60px;">
            {{ index+1 }}. {{ item.communityName }}<br>
            {{ item.totalSubscribers }} subscribers
          </p>
        </div>
      </div>

      <div class="row" style="padding-top: 25px;">
        <div class="article_showcase col col-md-6 event">
          <h4>Events</h4>
        </div>

        <div class="article_showcase col col-md-5 offset-md-1 community">
          <h4>Launch your own community</h4>
        </div>
      </div>

      <h5 style="padding-top: 25px;">Trending communities</h5>

      <div class="row ranking">
        <div
          class="col col-md-6 col-lg-4"
          v-for="(item, index) in trendingCommunities"
          :key="'trendingCommunity-'+index"
        >
         
            <img
              :src="'http://localhost:8080/'+(Math.random()*0xFFFFFF<<0).toString(6)"
              style="float: left; width: 50px;"
            />
          <p style="margin-left: 60px;">
            {{ index+1 }}. {{ item.communityName }}<br>
            {{ item.weeklyNewSubscribers }} new subs. ( + {{ item.weeklyGrowth.toFixed(2) }}%)
          </p>
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
  name: "landing-page",
  components: { Sidebar, Footer },
  methods: {
    push(url) {
      this.$router.push({ name: url });
    }
  },
  data() {
    return {
      trendingCommunities: [
        {
          communityName: "Eindhoven music festival",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "Homework help",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "Antwerp festival",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "Breda entrerpreneurs",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "Elderly help",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "Climate watch group",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "TEDxBrussels",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        },
        {
          communityName: "Bradant students",
          weeklyGrowth: 23.00,
          weeklyNewSubscribers: 125,
          totalSubscribers: 1566
        }
      ]
    };
  }
};
</script>

<style>
/*Main*/
.main {
  background: rgb(32, 32, 32);
  min-height: 100%;
  height: auto;
  width: calc(100% - 200px);
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 200px;
  margin-right: 20px;
  padding: 0px 5% 0px 5%;
  color: white;
}

.main h1:first-child {
  margin-top: 20px;
  font-weight: 600;
  font-size: 25pt;
}

.article_showcase {
  border-radius: 20px;
  height: calc(100vw / 5);
  min-height: 200px;
  transition: 1s;
  background: url("../assets/showcase/environment.png") center/cover;
}

.event {
  background: url("../assets/showcase/event.png") center/cover;
}

.community {
  background: url("../assets/showcase/community.png") center/cover;
}

.article_showcase h4 {
  margin-left: 0px;
  margin-top: 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16pt;
  color: black;
}

.ranking p {
  font-size: 10pt;
}

.ranking .col {
  margin-top: 20px;
}
</style>
