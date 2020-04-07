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
    font-family: 'Montserrat';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    a, router-link{
    color: inherit !important;
    text-decoration: none !important;
  }

  body { font-family: 'Montserrat', sans-serif; background: transparent !important; }
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');


.margin_20{
  margin: 20px;
}

/* System */

.draggable {
    -webkit-app-region: drag;
}

/* Elements */


   /* Search */

    input.search{
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      border-radius: 5px;
      width: 80%;
      margin: auto;
      position: relative;
      height: 20pt;
      text-align: center;
      color: white;
      opacity: 0.5;
      font-size: 10pt;
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
