/**
 * @author Alfredo Gómez
 * @description Test of Vuejs
 */

var app = new Vue({
    el: '#app', // Elemento al que va a ser asignado
    data: { // Toda la imformación que se va a renderizar 
        list: [
        
        ],
        promedio: '',
        name: '',
        footer: "allgoritmo.com"
    },
    methods:{ //Propiedad donde se definen todos los métodos
        agregarNota: function(){ // Metodo que se llama
            estadoA = false;
            if(this.promedio >= 7 ){
                estadoA = true;
            }

            if(this.name != "" && this.promedio != ""){
                this.list.push({name: this.name, promedio: this.promedio, state: estadoA})
            }else{
                alert("Verifica que los campos se hayan llenado correctamente");
            }
        }
    }
});