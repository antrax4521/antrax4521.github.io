<template>
    <div class="wrapper-form">
    <div class="container">
      <div class="row">
        <h1>
          {{form.title}}
        </h1>
        <form class="col s12 m12 l6">
          <div class="row">
            <div class="input-field col s12">
              <input id="name" type="text" class="validate" v-model="message">
              <label for="name">Nombre</label>
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
              <input id="phone" type="number" maxlength="10" class="validate">
              <label for="phone">Teléfono</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="comments" class="materialize-textarea"></textarea>
              <label for="comments">Comentarios</label>
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
    data() {
      return {message: this.message}
    },
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

@import url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i');

.wrapper-form{
  background: #0e1e25;
  width: 100%;
  height: auto;
  padding:50px 0px;
  float:left;
}

.wrapper-form h1{
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  color:#fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-size: 45px;
}

.wrapper-form .input-field > label {
  color: #fff;
}

.wrapper-form .input-field > label:focus {
  color: #fff;
}

</style>



