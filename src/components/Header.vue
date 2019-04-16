<template>
    <div class="wrapper-header">
    <div class="container">
      <div class="row">

          <div class="col s0 m0 l2">
          </div>

          <div class="col s12 m12 l8 background" >

            <vue-typed-js :strings="['Who am i']" :startDelay="1000">
              <h5> Desktop/repo: <span class="typing"></span></h5>
            </vue-typed-js>
            <p class="whoiam"> - Jesús Alfredo Gómez Enríquez </p>
          </div>

          <div class="col s0 m0 l2">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'

export default {
    name: "sdsd",
    props: {
        header: Object
    },
    components: {
        VueTypedJs
    },
    mounted(){
       
      setTimeout(() => {
        document.querySelector('.whoiam').style.display = 'block';
      }, 2000);
    }
}
</script>

<style>
.whoiam{
  display: none;
  color: #64dd17;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  -webkit-transition: opacity 2s ease-in;
    -moz-transition: opacity 2s ease-in;
    -o-transition: opacity 2s ease-in;
    -ms-transition: opacity 2s ease-in;
    transition: opacity 2s ease-in;

}
.wrapper-header{
  background: #000;
  width: 100%;
  height: 100vh;
  padding-top:150px;
}

.wrapper-header h2, h3, h4, h5 {
  font-family: 'Roboto Mono', monospace;
  color:#64dd17;
  font-size: 20px;
}

.wrapper-header .background{
  padding: 30px !important;
  display: block;
  width: 100%;
  z-index: 50;
  height: 580px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url("../assets/images/terminal.svg");
}

</style>


