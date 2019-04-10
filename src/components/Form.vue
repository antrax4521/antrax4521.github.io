<template>
    <div class="wrapper-form">
    <div class="container">
      <div class="row">
        <h1>
          {{form.title}}
        </h1>
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
             <button class="btn waves-effect waves-light" v-on:click="alertando()" type="submit" name="action">Enviar</button>    
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Form",
    props: {
        form: Object
    },
    methods: {
        alertando: function(){
            alert("Hola Mundo");
            return false;
        }
    }
    
}
</script>

<style>

.wrapper-form{
  background: #0e1e25;
  width: 100%;
  height: auto;
  padding:50px 0px;
  float:left;
}

</style>



