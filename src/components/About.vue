<template>
    <div class="wrapper-about">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l6">
          <h1>{{ about.title }}</h1>
          {{ about.description }}
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "About",
    props: {
        about: Object
    }
    
}
</script>

<style>

.wrapper-about {
  width: 100%;
  height: 100vh;
  background-color: #232729;
}

.wrapper-about .mar {
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: block;
  width: 100%;
  height: 200px;
  position:absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../assets/images/method-draw-image.svg');
}


</style>

