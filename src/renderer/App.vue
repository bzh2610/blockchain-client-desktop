<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vue-electron'
  }
</script>

<style>
  /* CSS */

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    a, router-link{
    color: inherit;
    text-decoration: none;
  }

  body { font-family: 'Montserrat', sans-serif; }
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');



/* Homemade bootstrap */


  .col-lg-12, .lg_12{
  display: inline-block;
  width: 100%;
  height: 30vh;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5Px;
}

  .col-lg-8, .lg_8{
  display: inline-block;
  width: 66.66%;
  height: 30vh;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5Px;
}

.col-lg-6, .lg_6{
  margin: 0px;
  width: 50%;
  height: 30vh;
  position: relative;
  display: inline-block;
}

.col-lg-4, .lg_4{
  margin: 0px;
  width: 33.33%;
  height: 30vh;
  position: relative;
  display: inline-block;
}

.col-lg-2, .lg_2{
  margin: 0px;
  width: 16.66%;
  height: 30vh;
  position: relative;
  display: inline-block;
}


/* Elements */


   /* Search */

    input.search{
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      border-radius: 4px;
      width: 80%;
      margin: auto;
      position: relative;
      height: 15pt;
      text-align: center;
      color: white;
      /*outline: rgb(28, 135, 251)*/
    }
    input.search::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 0.9; /* Firefox */
    }
    input.search:focus::-webkit-input-placeholder {
        color: transparent;
    }

   /* Button */

   .btn{
     padding: 5px 30px 10px 30px;
     border: none;
     background: white;
     font-weight: 300;
     font-size: 20pt;
     font-family: 'Montserrat';
     border-radius: 20pt;
   }

   .gradient_OP{
      color: white;
      background: linear-gradient(45deg, #F27752, #FF3EB9);
   }
</style>
