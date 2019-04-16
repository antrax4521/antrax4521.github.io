<template>
    <div class="wrapper-formation">
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l12">
          <div class="box">
            <h2>{{ jobs.title }}</h2>
            <ul id="example-1" class="collapsible">
            <li v-for="i in jobs.items">
                  <div class="collapsible-header">
                    <p class="p-box">{{i.company}} </p>
                  </div>
                  <div class="collapsible-body">
                    <p><span>Puesto: </span> <i>{{i.role}}</i></p>
                    <p><span>Tiempo: </span> <i>{{i.time.from}} - {{i.time.to}}</i> </p> 
                    <p><span>Funciones: </span></p>
                    <p v-for="text in i.functions.split('\n')"><i>{{text}}</i><br></p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
        <!--<div class="col s12 m12 l4">
          <div class="hide-on-small-only">
            <img src="../assets/images/code.jpg" alt="" srcset="">
          </div>
        </div>-->
      </div>
    </div>
    <div class="mar"></div>
  </div>
</template>

<script>

export default {
    name: "Jobs",
    props: {
        jobs: Object
    },
    mounted() {
      $('collapsible').collapsible();  
    }
}
</script>

<style>

.wrapper-formation{
  width: 100%;
  min-height: auto;
  position: relative;
  padding:50px 0px 200px 0px;
  background-color: #0e1e25;
}

.wrapper-formation h2, h3{
  color:#0e1e25;
  font-family: 'Rubik', sans-serif;
  font-size: 35px;
  font-weight: 500;
}

.wrapper-formation p{
  color:#0e1e25;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 200;
  text-align: justify;
}

.wrapper-formation .p-box {
    color:#0e1e25;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    display:inline;
}

.collapsible{
  border: 0px !important;
  -webkit-box-shadow: 0px !important;
  cursor:pointer;
}

.wrapper-formation .p-box:after {
    content:"\a";
    white-space: pre;
}

.wrapper-formation span{
  color:#0e1e25;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: justify;
}

.wrapper-formation .box {
  width: 100%;
  height: 100%;
  background-color:#ffffff;
  border-radius: 5px;
  padding:10px 10px 10px 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.wrapper-formation .mar {
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: block;
  width: 100%;
  z-index: 50;
  height: 250px;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url("../assets/images/jobs.svg");
}

</style>


