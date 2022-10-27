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

// Metodos.

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let mascota = {
  retreat() {
    console.log(retreatMessage )
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

mascota.retreat();
mascota.takeOff();

//Objetos anidados

let spaceship = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  console.log(capFave);
  
  let firstPassenger = spaceship.passengers[0];
  console.log(firstPassenger);

  // Pasar por referencia

  let paceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  
  greenEnergy(paceship);
  
  remotelyDisable(paceship);
  
  console.log(paceship);

  //Llame a sus dos funciones con el spaceshipobjeto en el editor de código, luego console.log()
  //el spaceshipobjeto para confirmar que esas propiedades se cambiaron/agregaron.