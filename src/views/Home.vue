<template>
<div class="wrapper">
  <!-- Header -->
  <div class="wrapper-header">
    <div class="container">
      <div class="row">
          <div class="col s12">
            <vue-typed-js :strings="['get nombre -h']" >
              <h1> Desktop/repo/Master: <span class="typing"></span></h1>
            </vue-typed-js>
            <vue-typed-js :strings="['get edad -v']" :startDelay="2000">
              <h1> Desktop/repo/Master: <span class="typing"></span></h1>
            </vue-typed-js>

            <vue-typed-js :strings="['get profesion -v']" :startDelay="4000">
              <h1> Desktop/repo/Master: <span class="typing"></span></h1>
            </vue-typed-js>
          </div>
      </div>
    </div>
  </div>
  <!-- Header -->

  <div class="divider"></div>
  <!-- About -->
  <div class="wrapper-about">
    <div class="container">
      <div class="row">
        <div class="col s6">
          <h1>{{ about.title }}</h1>
          {{ about.description }}
        </div>
        <div class="col s6">
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
  <!-- About -->

  <!-- Jobs -->
  <div class="wrapper-about">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h1>{{ jobs.title }}</h1>
          <ul id="example-1" class="collection">
          <li v-for="i in jobs.items" class="collection-item avatar">
                <!--s<img src="images/yuna.jpg" alt="" class="circle">-->
                <span class="title">{{i.company}}</span>
                <p> {{i.role}} </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Jobs -->
  
  <!-- Form -->
  <div class="wrapper-form">
    <div class="container">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="first_name" type="text" class="validate">
              <label for="first_name">Nombre</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="first_name" type="text" class="validate">
              <label for="first_name">Comentarios</label>
            </div>
          </div>
          <div class="row">
             <button class="btn waves-effect waves-light" type="submit" name="action">Enviar</button>    
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Form -->
</div>
</template>

<script>

import { VueTypedJs } from 'vue-typed-js'


export default {
  name: 'Home',
  data() {
    return {
      about:{
        title: "Acerca de mi",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        skills:[
          {type:"backend", languaje:"PHP", percentage: 75},
          {type:"backend", languaje:"Ruby", percentage: 45},
          {type:"backend", languaje:"Golang", percentage: 35},
          {type:"backend", languaje:"Python", percentage: 35},
          {type:"frontend", languaje:"HTML5", percentage: 75},
          {type:"frontend", languaje:"CSS3", percentage: 75}
        ]
      },
      jobs: {
        title: "Empleos",
        items: [
          { company: 'Ikusmen', time: {from: "01-01-01", to: "01-01-01"}, role: "Ecommerce developer"},
          { company: 'ComproPago', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
          { company: 'Sellcom', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
          { company: 'Tv Ofertas', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
          { company: 'Gecco Corp', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
        ]
      }
    }
  },
  components:{
      VueTypedJs
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700');

.wrapper{
  border:0px;
  top:0px;
  padding:0px;
}

.wrapper p{
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
}

.wrapper-header h1, h2, h3 {
  font-family: 'Rubik', sans-serif;
  color:#64dd17;
  font-size: 45px;
}

.wrapper-header{
  background: #000000;
  width: 100%;
  height: 100vh;
  float:left;
}

.wrapper-about{
  background: #ffffff;
  width: 100%;
  height: auto;
  float:left;
}

.wrapper-form{
  background: #006fb7;
  width: 100%;
  height: auto;
  float:left;
}

.separator{
  height:50px;
}
</style>

