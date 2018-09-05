/**
 * @author Alfredo Gómez
 * @description 
 */

var app = new Vue({
    el: '#app', 
    template: '<App/>',
    data: {
        name: ["Alfredo", "Gómez"],
    },
    methods:{
        clickMe: function(){
            alert("This is a test");
        }
    }
});