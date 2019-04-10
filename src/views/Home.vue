<template>
<div class="wrapper">
  <!-- Header -->
  <Header v-bind:header="header"></Header>
  <!-- Header -->

  <!-- About -->
  <About v-bind:about="about"> </About>
  <!-- About -->
  
  <!-- Jobs -->   
  <Jobs v-bind:jobs="jobs"></Jobs>
  <!-- Jobs -->
  
  <!-- Form -->
  <Form v-bind:form="form"></Form>
  <!-- Form -->

  <!-- Footer -->
  <Footer v-bind:links="footer.links"/>
  <!-- Footer -->
</div>
</template>

<script>

import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Jobs from '../components/Jobs.vue'
import Form from '../components/Form.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  data() {
    return {
      header: {
        object: "Claro que si"
      },
      about:{
        title: "Acerca de mi",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        skills:[
          {type:"backend", languaje:"PHP", percentage: 90},
          {type:"backend", languaje:"Ruby", percentage: 45},
          {type:"backend", languaje:"Golang", percentage: 35},
          {type:"backend", languaje:"Python", percentage: 35},
          {type:"frontend", languaje:"HTML5", percentage: 75},
          {type:"frontend", languaje:"CSS3", percentage: 75}
        ]
      },
      jobs: {
        title: "Formación laboral",
        items: [
          { company: 'Ikusmen', time: {from: "01-01-01", to: "01-01-01"}, role: "Ecommerce developer"},
          { company: 'ComproPago', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
          { company: 'Sellcom', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
          { company: 'Tv Ofertas', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
          { company: 'Gecco Corp', time: {from: "01-01-01", to: "01-01-01"}, role: "Fullstack developer"},
        ]
      },
      form:{
        title: "Formulario de contacto",
        inputs: [
          {type: "text", id: "name", sp: "Nombre"},
          {type: "email", id: "email", sp: "Correo Electrónico"},
          {type: "text", id: "comments", sp: "Comentarios"}
        ]
      },
      footer: {
        links: [
          {title: "Github", url: "http://github.com/antrax4521", image: "cloudfront:bucket:s3"},
          {title: "Twitter", url: "http://twitter.com/antrax4521", image: "cloudfront:bucket:s3"}
        ]
      }
    }
  },
  components:{
      Header,
      About,
      Jobs,
      Form,
      Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700');

.wrapper{
  border:0px;
  top:0px;
  padding:0px;
  position: relative;
}

.wrapper p{
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
}

/* This is an exaple of svg*/
.ocean {
  width: 100%;
  height: 600px;
  position: relative;
  background-color: #2d3b41;
}

.wrapper-form{
  background: #0e1e25;
  width: 100%;
  height: auto;
  padding:50px 0px;
  float:left;
}

.separator{
  height:50px;
}
</style>

