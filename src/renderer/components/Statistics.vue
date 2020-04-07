<template>
  <div id="wrapper">
    <div class="sidebar">
      <ul>
        <li class="icon_container">
          <img src="../assets/block.png" class="logo" />
        </li>
        <li></li>
        <li>
          <input class="search" type="text" placeholder="Search..." />
        </li>
        <router-link to="/">
          <li>
            <i>􀋃</i> Home
          </li>
        </router-link>
        <li>
          <i>􀍖</i> Votes
        </li>
        <li>
          <i>􀝋</i> Communities
        </li>
        <li class="selected">
          <i>􀜋</i> Statistics
        </li>

        <li>
          <i>
            <font-awesome-icon icon="user-secret" />
          </i> Settings
        </li>
      </ul>
    </div>

    <main class="main">
      <h1>Statistics</h1>
      <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>

      <div class="lg_8"></div>

      <div class="article_showcase lg_4">
        <h4>Environment communities</h4>
      </div>
      <!--


      -->
      <div class="article_showcase lg_4">
        <h4>Environment communities</h4>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import VueApexCharts from 'vue-apexcharts'

export default {
  name: "statistics",
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link);
    }
  },
  components: {
    'apexchart': VueApexCharts
  },
data () {
        return {  
          series: [{
            name: 'coins',
            data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7 ]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 410,
              animations: {
                enabled: false
              },
              toolbar: {
              show: false
            },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                barHeight: '100%',
            
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              colors: ["#fff"],
              width: 0.2
            },
            labels: Array.apply(null, {length: 15}).map(function(el, index){
              return index + 1;
            }),
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              labels: {
                show: false
              },
              title: {
                text: ' ',
              },
            },
            grid: {
              position: 'back'
            },
            title: {
              text: '',
              align: 'right',
              offsetY: 30
            },
            
            fill: {
              type: 'gradient',
              gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
            },
          },
          
        }
        },
}
</script>

<style scoped>

#chart{
  width: calc(90vw - 200px);
}


i {
  width: 50px;
  display: inline-block;
  font-style: normal;
  text-align: center;
  margin-left: -10px;
}

/*Main*/
.main {
  background: rgb(32, 32, 32);
  width: 200%;
  display: inline-block;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 200px;
  padding: 0px 5% 0px 5%;
  color: white;
}

.article_showcase {
  border-radius: 20px;
}

.article_showcase h4 {
  margin-left: 20px;
  margin-top: 20px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16pt;
  color: white;
  background: black;
}
</style>
