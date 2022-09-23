// metodo forEach

const nombres = ['Carlos', 'Maria', 'Camila', ,'Maria', 'Carlos',' josealfledo', 'Carlos'];

let contador = {};

nombres.forEach(item =>{
    if (contador[item]){
        contador[item]++;
    }else {
        contador[item] =1;
    }
})
    console.log(contador);





// metodo map()
const animales = ['elefante', ' jirafa', 'cocodrilo', 'caballo', 'leon'];

