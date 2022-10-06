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
//join() une todos los elementos de un array (o un objeto similar a una array) en una cadena y devuelve esta cadena.
const animales = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const mensaje = animales.map(animal => animal [0]);
console.log(mensaje.join(''));

// método. filter().

const numeroAleatorio= [375, 200, 3.14, 7, 13, 852];
const smallNumbers = numeroAleatorio.filter(function(number){
if(number < 250){
return true;
}
})
console.log(smallNumbers);


const favoriteletra = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteletra.filter(word => {
  return word.length > 7;
})
console.log(longFavoriteWords);

// metodo finIndex().

const primos = [7, 5, 11, 3, 2, 19, 17, 23];

const resultado = primos.findIndex((p) => p > 15);

console.log(resultado);
 

//se Invoco .findIndex()en la animalsmatriz para encontrar el índice del elemento que tiene el valor 'elephant'y 
//guarde el valor que devuelto en una const variable llamada foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal);
//A ver si encontramos el índice del primer animal que empieza con la letra 's'.
//Llame .findIndex()a la animalsmatriz y devuelvo el índice del primer elemento que comienza con 's'. 
//Asigne el valo y  devuelto a una const variable llamada startsWithS.

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});
console.log( startsWithS );

//metodo .reduce() El método devuelve un único valor después de iterar a través de los elementos de un array, reduciendo así eñ array.

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums);