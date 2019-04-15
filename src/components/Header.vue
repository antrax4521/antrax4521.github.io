<template>
    <div class="wrapper-header">
    <div class="container">
      <div class="row">
          <div class="col s12 m12 l12">
            <vue-typed-js :strings="['get nombre -h']" >
              <h1> Desktop/repo: <span class="typing"></span></h1>
            </vue-typed-js>
            <vue-typed-js :strings="['get edad -v']" :startDelay="2000">
              <h1> Desktop/repo: <span class="typing"></span></h1>
            </vue-typed-js>

            <vue-typed-js :strings="['get profesion -v']" :startDelay="4000">
              <h1> Desktop/repo: <span class="typing"></span></h1>
            </vue-typed-js>
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
    }
}
</script>

<style>

.wrapper-header{
  background: #000000;
  width: 100%;
  height: 100vh;
  float:left;
}

.wrapper-header h1, h2, h3 {
  font-family: 'Rubik', sans-serif;
  color:#64dd17;
  font-size: 45px;
}

</style>


