<template>
    <div class="wrapper-header">
    <div class="container">
      <div class="row">
          <div class="col offset-s12 offset-m6 l2"></div>
          <div class="col s12 m12 l8 background">
            <vue-typed-js :strings="['Who am i']" :startDelay="1000">
              <h5> Desktop/user: <span class="typing"></span></h5>
            </vue-typed-js>
            <p class="whoiam">Jesús alfredo Gómez Enríquez <br>Sr. Full Stack Developer <br>Datos de contacto</p>
          </div>
          <div class="col offset-s6 offset-m6 l2"></div>
      </div>

      <div class="row">
          <div class="col s12 m12 l12 center-align">
            <a class="btn-floating btn-large pulse green darken-4" href="#about"><i class="material-icons">arrow_downward</i></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'

export default {
    name: "header",
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

.whoiam {
    display: none;
    color: #64dd17;
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    margin-top: 25px;
    margin-left: 25px;
    font-size: 21px;
    animation: fadein 1s;
    -moz-animation: fadein 1s; /* Firefox */
    -webkit-animation: fadein 1s; /* Safari and Chrome */
    -o-animation: fadein 1s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

.wrapper-header{
  background-image: url('https://ak8.picdn.net/shutterstock/videos/18933008/thumb/1.jpg');
  background-size: contain;
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


