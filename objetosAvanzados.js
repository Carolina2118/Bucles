// OBJETOS AVANZADOS 
const robot = {

    modelo: '1E78V2',
    nivelEnergia: 100,
   informacion() { 
      return `yo soy ${this.modelo} y mi nivel de energia actual ${this.nivelEnergia}.`
    }
  };
  
  console.log(robot.informacion());

  // Funciones de flecha y esto.

  const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
   
  goat.diet(); // Prints undefined

  // metodo Getters
  
 const auto = {
  _model:'Escarabajo',
  _marca:'Volkswagen',
  get autoFavorito() {
    if (this._marca && this._model){
      return `Mi marca favorita de auto es:${this._marca} y modelo: ${this._model}`;
    }else{
      return "No es mi auto favorito";
    }
    
  }
  
};
console.log(auto.autoFavorito);