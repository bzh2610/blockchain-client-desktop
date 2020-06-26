<template>
  <div id="wrapper">
    <sidebar></sidebar>

    <main class="main" style="background: rgb(243,245,250)"
     :style="{background: 'url(http://localhost:8080/'+(Math.random()*0xFFFFFF<<0).toString(6)+') center / 160%'}"
>
      <div class="row">
        <div class="article_showcase col col-lg-12" style="min-height: 50px; background: transparent;"></div>
      </div>

      <div class="row" style="position: relative; top: -20vh; padding: 20px;">
        <div class="col col-lg-10 mx-auto" style="min-height: 50px;" >
          <div class="content"  >
            <div class="content-header" style="padding: 10px; padding-left: 20px;">
               <h1>Statistics</h1>
            </div>

      <div class="row chart">
        <div class="col-lg-8 chart_container">
          <p class="chart_title">Weekly active users</p>
          <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>

        <div class="col-sm-4">
          <p class>Latest poll</p>
          <apexchart type="donut" height="250" :options="chartOptions_R" :series="series_R"></apexchart>
        </div>
      </div>

      <div class="row chart">
        <div class="col-lg-12 chart_container">
          <p class="chart_title">Weekly active users</p>
          <apexchart type="heatmap" height="350" :options="chartOptions_H" :series="series_H"></apexchart>
        </div>
      </div>
          </div>
        </div>
      </div>
  
       <Footer style="background: rgba(10,10,10, 0.7);  padding-bottom: 5px;"></Footer>
    </main>
  </div>
</template>

<style scoped src="@/assets/css/community.css"></style>



<script>
/* eslint-disable */
import VueApexCharts from "vue-apexcharts";
import Sidebar from "@/components/partials/Sidebar";
import Footer from "@/components/partials/Footer";

export default {
  name: "statistics",
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  },
  components: {
    Sidebar,
    Footer,
    apexchart: VueApexCharts,
  },
  methods: {
    generateData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
  },
  data() {
    return {
      /* BAR */
      series: [
        {
          name: "coins",
          data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 410,
          animations: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            barHeight: "100%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          colors: ["#fff"],
          width: 0.2
        },
        labels: Array.apply(null, { length: 15 }).map(function(el, index) {
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
            text: " "
          }
        },
        grid: {
          position: "back"
        },
        title: {
          text: "",
          align: "right",
          offsetY: 30
        },
        colors: ["#FF9811"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#F51F61"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        }
      },

      /* RADIAL */

      series_R: [38, 52, 10],
      chartOptions_R: {
        labels: ["Apple", "Mango", "Orange", "Watermelon"],
        chart: {
          type: "donut"
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              stroke: {
                show: false,
                width: 0
              }
            }
          }
        ]
      },

      /* HEATMAP */

      series_H: [
        {
          name: "Metric1",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric9",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      chartOptions_H: {
        chart: {
          height: 350,
          type: "heatmap",
          toolbar: {
            show: false
          }
        },

        dataLabels: {
          enabled: false
        },
        colors: ["#8C59FD", "#F51F61"]
      }
    };
  }
};
</script>

<style scoped>
.chart {
  width: calc(90%);
  margin-left: 5%;
  margin-top: 20px;
}

.chart_container {
  border-radius: 20px;
  padding: 0px;
  background: transparent;
}

.chart_title {
  width: 100%;
  padding: 10px;
  border-radius: 20px 20px 0px 0px;
  /* background: rgba(255,255,255,0.5);*/
}
</style>
