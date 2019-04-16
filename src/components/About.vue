<template>
    <div class="wrapper-about">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l6">
          <h1>{{ about.title }}</h1>
          <p>{{ about.description }}</p>
        </div>
        <div class="col s12 m6 l6">
          <h1>Skills</h1>
          <ul class="collection">
            <li v-for="a in about.skills">
              <p>{{a.languaje}}</p>
              <div class="progress">
                  <div class="determinate" v-bind:style="{ width: a.percentage + '%' }"></div>
              </div>
            </li>
          </ul>
            <!-- Código para backend frontend
            <ul id="tabs-swipe-demo" class="tabs">
              <li class="tab col s3"><a href="#test-swipe-1">Backend</a></li>
              <li class="tab col s3"><a class="active" href="#test-swipe-2">Frontend</a></li>
              <li class="tab col s3"><a href="#test-swipe-3">DevOps</a></li>
            </ul>
              <div id="test-swipe-1" class="col s12 blue">Test 1</div>
              <div id="test-swipe-2" class="col s12 red">Test 2</div>
              <div id="test-swipe-3" class="col s12 green">Test 3</div>-->
        </div>
      </div>
    </div>
    <div class="mar"></div>
  </div>
</template>

<script>
export default {
    name: "About",
    props: {
        about: Object
    },
    mounted(){
      $('.tabs').tabs();
    }
    
}
</script>

<style>

.wrapper-about {
  width: 100%;
  min-height: auto;
  position: relative;
  padding:50px 0px 200px 0px;
  background-color: #2d3b41;
}

.wrapper-about .collection{
  border:0px !important; 
}

.wrapper-about h1{
  color:#ffffff;
  font-family: 'Rubik', sans-serif;
  font-size: 35px;
  font-weight: 500;
}

.wrapper-about p{
  color:#ffffff;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 200;
  text-align: justify;
}

.wrapper-about .mar {
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
  background-image: url("../assets/images/about.svg");
}

</style>

