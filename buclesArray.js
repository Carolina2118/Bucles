// Para recorrer cada elemento de un array, un for bucle debe usar la .length propiedad de el array en su condición.
// se recorre cada elemento del array con un bucle 

const colores =['rojo','rosado','violeta','verde'];

for (let i = 0; i < colores.length; i ++){
    console.log('Uno de los colores que más me gusta es: ' + colores[i]);
}

// Bucles anidados.(un bucle dentro de otro bucle).

const Bob = ['Carlos','Martin','David','Juan'];
const Tina = ['Carlos','alexa','Martin'];
const Mutuo =[];

for (let i = 0; i< Bob.length;i ++){
    for (let i =0; i< Tina.length; i ++){
        if (Bob[i] === Tina[i]){

            Mutuo.push(Bob[i])
        }
    }
};

