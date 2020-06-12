<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main" style="background: rgb(243,245,250)"
     :style="{background: 'url(https://avatar.lisk.ws/'+(Math.random()*0xFFFFFF<<0).toString(6)+') center / 160%'}"
>
      <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 50px; background: transparent;"></div>
      </div>

      <div class="row" style="position: relative; top: -20vh; padding: 20px;">
        <div class="col col-lg-8" style="min-height: 50px;" >
          <div class="content"  >
            <div class="content-header" style="padding: 10px; padding-left: 20px;">
              <span>Polls</span>
            </div>

            <div
              style="background: white; width: 80%; box-shadow: 0 0 12pt 0 rgba(136, 152, 170, 0.15) !important; margin: 30pt auto 30pt auto;"
              v-for="(item, index) in polls"
              v-bind:key="'question_'+index">
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
                <large></large>
                <br />
            {{ item.question }}

               <ButtonRadio
                style="margin-top: 25px"
                :name="item.name"
                theme="fire"
                :options="item.answers"
              ></ButtonRadio>
              </div>
            </div>

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
import ButtonRadio from "@/components/elements/ButtonRadio";

export default {
  name: "communityPolls",
  components: { Sidebar, Footer, CommunitySidebar, ButtonRadio },
  methods: {},
  data: function(){
    return{
    polls: [{
      name: "VOTING_TYPE",
      question: "Within this community, voting should be :",
      answers: [{text: 'Direct',
                 value: 'DIRECT'
                },
                {text: 'Representative',
                 value: 'DELEGATE'
                }]
    },

    {
      name: "DELEGATES_COUNT",
      question: "How many delegates should be elected to represent this community ?",
      answers: [{text: '1-10',
                 value: '1'
                },
                {text: '10-20',
                 value: '1'
                },
                {text: '20-30',
                 value: '2'
                },
                {text: '30-50',
                 value: '3'
                }]
    },

    {
      name: "MINIMAL_VOTE_PERCENT",
      question: "What should be the minimum amount of voters for each vote ?",
      answers:  [{text: '1%',
                 value: '1'
                },
                {text: '5%',
                 value: '5'
                },
                {text: '10%',
                 value: '10'
                },
                {text: '15%',
                 value: '15'
                }]
    },
    ]
  }
  }
};
</script>

<style scoped src="@/assets/css/community.css"></style>
