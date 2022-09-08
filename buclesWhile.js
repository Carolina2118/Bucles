// La sintaxis de un whilebucle es ideal cuando no sabemos de antemano cuántas veces debe ejecutarse el bucle.

let conteoUno = 1; 
while (conteoUno < 5){
    console.log(conteoUno);
    conteoUno ++;    
}

// Declaracion Do ...while .

let DoWhile = '';
let i= 0;
 do{
    DoWhile = DoWhile +i;
    i ++;
 } while (i < 5);
  console.log(DoWhile);
  //Somos golosos, por lo que queremos agregar al menos una taza de azúcar a la masa, 
  //incluso si el valor de cupsOfSugarNeededes 0.
  //Cree un do...while bucle que se incremente cupsAddeden uno mientras cupsAddedsea menor que cupsOfSugarNeeded.
  
let cupsOfSugarNeeded = 5;
let  cupsAdded = 0;
   do{
     cupsAdded ++;
   console.log(cupsAdded)
   } while (cupsAdded<cupsOfSugarNeeded);

// La palabra clave de ruptura es break.


for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Naranja, te alegra que haya roto el bucle');

const rappero = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rappero.length; i++){
  console.log(rappero[i]);
  if ( rappero[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

