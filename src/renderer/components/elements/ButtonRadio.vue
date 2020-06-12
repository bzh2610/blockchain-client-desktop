<template>
  <div class="buttonRadio" style="text-align: center;">
    <div class="container" v-for="(item, index) in options" :key="item.value">
      <input type="radio" :name="name" :id="item.value" class="input-list-item" />
      <label :for="item.value">
        <div class="list_item" :style="{'background-color': themes[theme][index]}">{{ item.text }}</div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.container{
    display: flex;
    flex: 1;
    padding: 0px;
}
label{
  width: 100%
}
.buttonRadio{
  display: flex;
}
.list_item {
  display: inline-block;
  color: white;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 60px;
  vertical-align: middle;
  width: 100%;
}
/* Hide the checkbox */
.input-list-item {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  display: none;
}

/* Default */
.list_item {
  vertical-align: middle;
  line-height: 60px; /* CHANGE THIS FOR MULTI LINE */
  height: 100%;
  font-weight: 400;
  font-size: smaller;
  color: rgba(255, 255, 255, 0.747);
}
/* Hovered */
.list_item:hover {
  font-weight: 600;
  color: white;
}
/* Bold when selected */
input:checked + label .list_item {
  font-weight: 600;
  font-size: small;/*15pt;*/
  color: white;
}

.buttonRadio div:first-of-type .list_item {
  border-radius: 20px 0px 0px 20px;
}
.buttonRadio div:last-of-type .list_item {
  border-radius: 0px 20px 20px 0px;
}
</style>
<script>
/*
Options : Array

Example : 
[
    {
        text: "I love 🍣",
        value: "sushis"
    },
    {
         text: "I love 🍕",
        value: "pizza"
    }
]

 _________________________
|__I_love_🍣__|_I_love_🍕_|

Submit ==>
name: sushis

*/
export default {
  props: {
    //HTML Name attribute for form submission
    name: {
      type: String,
      required: true,
      default: 'name'
    },
    theme:{
        type: String,
        required: false,
        default: 'teal'
    },
    options: {
      //All of the options for this input
      type: Array,
      required: true,
      default: [{
                text: 'I love 🍣',
                value: 'sushis'
                },{
                text: 'I love 🍕',
                value: 'pizza'
                },{
                text: 'I love 🍷',
                value: 'wine'
                }]
    }
  },
  mounted() {},
  data() {
    return {
    themes: {
        'teal': ['#92C64B', '#58D688', '#4AC7B8', '#2CB1D1'],
        'fire': ['#FA4375', '#FD7839', '#FDA339', '#FDC839']
    }
    }
  }
}
</script>
