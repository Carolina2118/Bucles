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
  //Cree un do...whilebucle que se incremente cupsAddeden uno mientras cupsAddedsea menor que cupsOfSugarNeeded.
  
let cupsOfSugarNeeded = 5;
let  cupsAdded = 0;
   do{
     cupsAdded ++;
   console.log(cupsAdded)
   } while (cupsAdded<cupsOfSugarNeeded);
   