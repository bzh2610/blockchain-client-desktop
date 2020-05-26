<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vue-electron',
    data: function () {
      return {
        selected_item: 1
      }
    }
  }
</script>

<style>
  /* CSS */

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css');
  @import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css');

/* montserrat-100 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-100.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Thin'), local('Montserrat-Thin'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-100italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 100;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-100italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-100italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-200 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-200.eot'); /* IE9 Compat Modes */
  src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-200italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 200;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-200italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-200italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-300 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-300.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Light'), local('Montserrat-Light'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-300italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 300;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-300italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-300italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-regular - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Italic'), local('Montserrat-Italic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-600 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-600.eot'); /* IE9 Compat Modes */
  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-500 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-500.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Medium'), local('Montserrat-Medium'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-500italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 500;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-500italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-500italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-600italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-600italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-600italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-700 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-700italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 700;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-700italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-800 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-800.eot'); /* IE9 Compat Modes */
  src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-900 - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-900.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Black'), local('Montserrat-Black'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-800italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-800italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-800italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-900italic - latin-ext_latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  src: url('./assets/fonts/montserrat-v14-latin-ext_latin-900italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'),
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/montserrat-v14-latin-ext_latin-900italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}


  * {
    font-family: 'Montserrat';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    a, router-link{
      outline: none;
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

    /* Inputs Text, passwords, number, emails */
    input[type=text], input[type=email], input[type=password], input[type=number]{
        background: transparent;
      width: 80%;
      font-size: 15pt;
      border: none;
      border-bottom: 2px solid rgba(255,255,255,0.7);
      outline: none;
      color: white;
      }

      input:focus+label{
        color: #b480fa !important;
        font-weight: 500;
      }

      input:focus{
        border-bottom: 2px solid #b480fa;
      }


      input[type=email]+label, input[type=text]+label, input[type=password]+label, input[type=number]+label{
        display: inline-block;
      margin-left: 10%;
      position: relative;
      top: -55pt;
      padding-top: 20px;
      color: white;
      }

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
