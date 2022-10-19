// objetos con literales.
let  yo = {'carolina lobos':'nombre',
    pelo:'rojo'
};
// se agregaron objetos con sus propiedades.

let food ={
    verdura: 'Espinaca',
    fruta: 'Uva',
    'frutos secos': 'Almendra',
}
 const favorite = food.fruta;
 console.log(favorite);

//Notación de corchetes.( Los objetos son mutables )

let asignaturas = {
    matematica:'ecuaciones',
    lenguaje : 'literatura',
    historia : 'egipto',
    orientacion : 'internet'

};

let contexto = 'literatura';

console.log(asignaturas[contexto]);

// Asignación de propiedad

let nombres = {
maria: 'ignacia',
juan: 'pepito',
nicolas: 'marcelo',
fernanda: 'camila'

};
nombres.maria ='torre';// cambia un objeto 
delete nombres.juan;// elimina un objeto.
console.log(nombres);