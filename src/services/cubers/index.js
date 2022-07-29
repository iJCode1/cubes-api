class CubersServices{
  constructor(){
    this.cubers = [];
    this.generateData();
  }

  generateData(){
    this.cubers = [
      {id: 1, name: "Feliks", lastname:"Zemdegs", country: "Australia", age: 26 , "competitions": 126},
      {id: 2, name: "Max", lastname:"Park", country: "USA", age: 20 , "competitions": 118},
      {id: 3, name: "Mats", lastname:"Valk", country: "Netherlands", age: 26 , "competitions": 148},
      {id: 4, name: "Lucas", lastname:"Etter", country: "USA", age: 21 , "competitions": 58},
      {id: 5, name: "Jorge", lastname:"Sanchez", country: "México", age: 22 , "competitions": 30},
      {id: 6, name: "Colin", lastname:"Burns", country: "USA", age: 21 , "competitions": 55},
    ];
  }

  create(newCuber){
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        this.cubers.push(newCuber);
        resolve();
      }, 1000);
    });
  };

  findAll(country){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(country){
          const filterData = this.cubers.filter(cuber => cuber.country === country);
          resolve(filterData);
        }
        resolve(this.cubers);
      }, 1000);
    });
  };

  findOne(id){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const cuber = this.cubers.find(cuber => cuber.id === parseInt(id));
        if(cuber){
          resolve(cuber);
        }
      }, 1000);    
    });
  }

  editPartial(id, body){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const indexFounded = this.cubers.findIndex(cuber => cuber.id === parseInt(id));
        if(indexFounded !== 1){
          let cubersCopy = [ ...this.cubers ];
          const newBody = this.cubers[indexFounded];
          cubersCopy[indexFounded] = { ...newBody, ...body };
          this.cubers = [...cubersCopy];
          resolve();
        }
      }, 1000);    
    });
  }

  editComplete(id, body){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const indexFounded = this.cubers.findIndex(cuber => cuber.id === parseInt(id));
        if(indexFounded !== -1){
          let cubersCopy = [ ...this.cubers ];
          cubersCopy[indexFounded] = {id, ...body};
          this.cubers = [...cubersCopy];
          resolve();
        }
      }, 1000);    
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const indexFounded = this.cubers.findIndex(cuber => cuber.id === parseInt(id));
        if(indexFounded !== -1){
          const cubersCopy = [...this.cubers];
          cubersCopy.splice(indexFounded, 1);
          this.cubers = [...cubersCopy];
          resolve();
        }
      }, 1000);    
    });
  }

}

module.exports = CubersServices;