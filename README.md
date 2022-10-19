## Blucles

- Un bucle es una herramienta de programación que repite un conjunto de instrucciones hasta que se alcanza una condición específica, llamada condición de parada.
- Cuando necesitamos reutilizar una tarea en nuestro código, a menudo empaquetamos esa acción en una función. De manera similar, cuando vemos que un proceso tiene que repetirse varias veces seguidas, escribimos un bucle.
- Los bucles nos permiten crear código eficiente que automatiza procesos para crear programas escalables y manejables.
- Como se ilustra en el diagrama, los bucles iteran o repiten una acción hasta que se cumple una condición específica.
- Cuando se cumple la condición, el ciclo se detiene y la computadora pasa a la siguiente parte del programa.

## El bucle For

EL for sintaxis del bucle se ve así:

      for (let counter = 0; counter < 4; counter++) {
       console.log(counter);}

- La inicialización es let counter = 0, por lo que el ciclo comenzará a contar en 0.

- La condición de parada es counter < 4, lo que significa que el bucle se ejecutará siempre que la variable del iterador countersea menor que 4.

- La sentencia de iteración es counter++. Esto significa que después de cada bucle, el valor de counteraumentará en 1.
  Para la primera iteración counterserá igual 0a , para la segunda iteración counterserá igual a 1, y así sucesivamente.

- El bloque de código está dentro de las llaves, console.log(counter)se ejecutará hasta que la condición se evalúe como false.
  La condición será falsa cuando countersea mayor o igual a 4; el punto en el que la condición se vuelve falsa a veces se denomina condición de parada

> > Este forbucle hace posible escribir 0, 1, 2y 3programáticamente.

## Bucle a través de un array

- Por ejemplo, podemos usar un for bucle para realizar la misma operación en cada elemento de un array.
  Los array contienen listas de datos, como nombres de clientes o información de productos.
  Imagina que tenemos una tienda y queremos aumentar el precio de todos los productos de nuestro catálogo.
  Eso podría ser una gran cantidad de código repetitivo,
  pero al usar un for bucle para iterar a través de un array, podríamos realizar esta tarea fácilmente.

## Bucles anidados.

- Un uso de un for bucle anidado es comparar los elementos de dos array.
  Para cada ronda del ciclo externo for, el ciclo interno forse ejecutará por completo.

ejercicio:

- ¡Imagínate que eres un programador importante para una plataforma de redes sociales!
  Se le ha encomendado la tarea de crear un prototipo para un programa de seguidores mutuos.
  Necesitará dos conjuntos de "amigos" de dos usuarios simulados para poder extraer los nombres
  de los seguidores que existen en ambas listas.

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
for (let j = 0; j < tinasFollowers.length; j++) {
if (bobsFollowers[i] === tinasFollowers[j]) {
mutualFollowers.push(bobsFollowers[i]); }
}
};

## El ciclo while

- La sintaxis de un whilebucle es ideal cuando no sabemos de antemano cuántas veces debe ejecutarse el bucle.

  let counterTwo = 1;
  while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
  }

- La counterTwo variable se declara antes del bucle. Podemos acceder a él dentro de nuestro while ciclo ya que está en el ámbito global.
- Comenzamos nuestro bucle con la palabra clave while seguida de nuestra condición de parada o condición de prueba. Esto se evaluará antes de cada ronda del bucle. Mientras la condición se evalúa como true, el bloque seguirá ejecutándose. Una vez que se evalúe, false el ciclo se detendrá.
- A continuación, tenemos el bloque de código de nuestro ciclo que se imprime counterTwo en la consola y se incrementa counterTwo.

### Declaraciones Do...While

- Una do...while declaración dice que se debe hacer una tarea una vez y luego seguir haciéndola hasta que ya no se cumpla una condición específica.

- La sintaxis de una do...whiledeclaración se ve así:

  let countString = '';
  let i = 0;

<> do {
countString = countString + i;
i++;
} while (i < 5);
</>

console.log(countString);

### La palabra clave de ruptura es break.

- La break palabra clave permite que los programas salgan del bucle desde dentro del bloque del bucle.  
   -¡Las declaraciones pueden ser especialmente útiles cuando estamos recorriendo grandes estructuras de datos! Con los descansos, podemos agregar condiciones de prueba además de la condición de parada y salir del bucle cuando se cumplan.

  <> for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
  <break;
  }
  console.log('Banana.');
  }</>

<console.log('Orange you glad I broke out the loop!');>

- Los bucles realizan acciones repetitivas para que no tengamos que codificar ese proceso manualmente cada vez.
- Cómo escribir forbucles con una variable iteradora que incrementa o decrementa
- Cómo usar un forbucle para iterar a través de una matriz
- Un bucle anidado fores un bucle dentro de otro bucle
- whilelos bucles permiten diferentes tipos de condiciones de parada.
- Las condiciones de parada son cruciales para evitar bucles infinitos.
- do...whileejecuta un bucle de código al menos una vez, solo verifica la condición de detención después de la primera ejecución
- La breakpalabra clave permite que los programas dejen un bucle durante la ejecución de su bloque.

### Funciones como datos.

- Las funciones de JavaScript se comportan como cualquier otro tipo de datos en el lenguaje; podemos asignar funciones a variables y podemos reasignarlas a nuevas variables.
- upongamos que esta función hace un trabajo importante y necesita ser llamada repetidamente. Para cambiar el nombre de esta función sin sacrificar el código fuente, podemos reasignar la función a una variable con un nombre adecuadamente corto:

<const busy = announceThatIAmDoingImportantWork;
busy();>

### funciones de orden superior

- La abstracción nos permite escribir código complicado de una manera que sea fácil de reutilizar,
  depurar y comprender para los lectores humanos.
- Podemos trabajar con funciones de la misma manera que trabajamos con cualquier otro tipo de datos,
  incluso reasignándolos a nuevas variables.
- Las funciones de JavaScript son objetos de primera clase, por lo que tienen propiedades y métodos como cualquier otro objeto.
- Las funciones se pueden pasar a otras funciones como parámetros.
- Una función de orden superior es una función que acepta funciones como parámetros, devuelve una función o ambas cosas.

> const addTwo = num => {
> return num + 2;
> }

> const checkConsistentOutput = (func, val) => {>
> let checkA = val + 2;
> let checkB = func(val);
> return checkA === checkB ? func(val) : 'inconsistent results';  
> } >

> console.log(checkConsistentOutput(addTwo, 10));

### Documentación del iterador

- Hay muchos métodos de array incorporados adicionales, una lista completa de los cuales se encuentra en la página de métodos de iteración del array de MDN .

La documentación de cada método contiene varias secciones:Have you visited

- Una descripción extendida.
- Ejemplos de uso del método.
- Otra información adicional.Have you visited.

                  ###Resumen de lo aprendido sobre metodo aprendidos.

- son ura serie de métodos útiles en esta lección.
- .forEach() se usa para ejecutar el mismo código en cada elemento de un array, pero no cambia el array y devuelve undefined.
- .map() ejecuta el mismo código en cada elemento de un array y devuelve una nueva array con los elementos actualizados.
- .filter() verifica cada elemento en unarray para ver si cumple con ciertos criterios y devuelve
  una nueva array con los elementos que devuelven la verdad para los criterios.
- .findIndex() devuelve el índice del primer elemento de un array que cumple una condición en la función de devolución de llamada.
  Regresa -1 si ninguno de los elementos del array cumple la condición.
- .reduce() itera a través de un array y toma los valores de los elementos y devuelve un valor único.
- El every()método prueba si todos los elementos del array pasan la prueba implementada por la función proporcionada.
  Devuelve un valor booleano.

   
