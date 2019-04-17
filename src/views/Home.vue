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
        object: "Claro que si",
        presentation: "- Jesús alfredo Gómez Enríquez \n - Sr. Full Stack Developer \n datos de contacto"
      },
      about:{
        title: "Acerca de mi",
        description: "Soy un desarrollador apasionado en búsqueda de nuevos retos, tengo varios años de experiencia en el desarrollo, me gusta trabajar por objetivos y soy autodidacta. Mis áreas de interés son la arquitectura del software, el diseño de apis, microservicios, seguridad informática, devOps, etc.",
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
          { company: 'Ikusmen', time: {from: "Agosto 2018", to: "Actual"}, role: "Sr. Full Stack developer", functions: "Me encargo de desarrollar módulos para distintas plataformas ecommerce que están en comunicación con el ERP del cliente, conexión y desarrollo de Web services, participo en la arquitectura de software y seguridad de los distintos sitios, creación de librerías y code reviews entre equipos. A cargo de la administración de los servicios de AWS de la compañía y la gestión de los ambientes de desarrollo y productivos."},
          { company: 'ComproPago', time: {from: "Febrero 2017", to: "Abril 2018"}, role: "Sr. Full Stack developer", functions: "Entre mis principales actividades se encontraba el mantenimiento, soporte y desarrollo de plugins para distintas plataformas ecommerce en el área fintech, actualizar la documentación e integración con el api. \n Mantenimiento al producto principal y desarrollo de nuevos módulos utilizando el lenguaje Ruby, actualización de servicios de facturación con la nueva normativa. \n Lider de proyecto, a cargo de la planificación, la gestión y el control del producto, así como participar activamente en la arquitectura, desarrollo de backend a escala de microservicios escritos en Nodejs y frontend utilizando Vuejs, desarrollo de pruebas unitarias y a cargo de la infraestructura (AWS)."},
          { company: 'Sellcom', time: {from: "Abril 2015", to: "Febrero 2016"}, role: "Semi Sr. Full Stack developer", functions: "Mi función principal fue el desarrollo \nde sitios ecommerce utilizando el framework Magento, trabajando principalmente en el desarrollo de módulos y la conexión con los web services de los clientes. Adicional a ello estuve a cargo del desarrollo de páginas informativas y dinámicas. Trabajar e integrar herramientas de SEO y tracking para los sitios desarrollados."},
          { company: 'Tv Ofertas', time: {from: "Noviembre 2014", to: "Marzo 2015"}, role: "Ecommerce developer", functions: "Desarrollo y diseño de páginas ecommerce (Magento Community), configuración de servidores, Seguridad Web (Certificado SSL), medición de Analytics, google adwords."},
          { company: 'Gecco Corp', time: {from: "Septiembre 2013", to: "Septiembre 2014"}, role: "Web developer jr", functions: "Desarrollo de páginas web informativas, dinámicas y ecommerce con PHP, configuración de servidores"},
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
          {title: "Twitter", url: "http://twitter.com/allgoritmo", image: "cloudfront:bucket:s3"}
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500,500i');

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
.p-code{
  font-family: 'Roboto Mono', monospace;
}

.p-text{
  font-family: 'Rubik', sans-serif;
}

.separator{
  height:50px;
}
</style>

