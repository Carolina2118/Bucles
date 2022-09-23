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

// metodo map() como crear un mensaje secreto 
const animales = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const mensaje = animales.map(animal => animal [0]);
console.log(mensaje.join(''));
