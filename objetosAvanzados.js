// OBJETOS AVANZADOS 
const robot = {

    modelo: '1E78V2',
    nivelEnergia: 100,
   informacion() { 
      return `yo soy ${this.modelo} y mi nivel de energia actual ${this.nivelEnergia}.`
    }
  };
  
  console.log(robot.informacion());
