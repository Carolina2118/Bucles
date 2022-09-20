// comprueba que dos más dos son iguales a cuatro millones de veces.

const funcionDatos = ()=>{

    for ( let i = 1; i <=1000000; i ++){
        if( 2+2 != 4){
            console.log("algo esta mal:( ");
        }
    }
};
// escribiendo funciones de orden superior .


const sumaDos = num => {
    return num + 2;
  }

  const funcionOrden = (func, val) =>{
    let A = val + 2;
    let B = func(val);
    return A === B ? func(val) : "resultado";

  };
  console.log(funcionOrden(sumaDos, 10));