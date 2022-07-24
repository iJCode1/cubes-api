class CubesServices{
  constructor(){
    this.cubes = [];
    this.generateData();
  }

  generateData(){
    this.cubes = [
      {id: 1, brand: "Gan", category: "2x2", model: "249 v2", base: "Stickerless", price: 550},
      {id: 2, brand: "QiYi", category: "2x2", model: "Qi Di", base: "Black", price: 249},
      {id: 3, brand: "LanLan", category: "2x2", model: "LL221", base: "Black", price: 133},
      {id: 4, brand: "Gan", category: "3x3", model: "356 R", base: "Stickerless", price: 499},
      {id: 5, brand: "Moyu", category: "3x3", model: "Weilong GTS3", base: "Stickerless", price: 699},
      {id: 6, brand: "QiYi", category: "3x3", model: "Warrior S", base: "Stickerless", price: 229},
      {id: 7, brand: "QiYi", category: "3x3", model: "MP", base: "Stickerless", price: 520},
      {id: 8, brand: "Moyu", category: "4x4", model: "Rs4m", base: "Stickerless", price: 450},
      {id: 9, brand: "Moyu", category: "4x4", model: "Meilong M", base: "Stickerless", price: 388},
      {id: 10, brand: "Gan", category: "Pyraminx", model: "M Standard Edition", base: "Stickerless", price: 470},
      {id: 11, brand: "QiYi", category: "Pyraminx", model: "Pyraminx", base: "Black", price: 299},
      {id: 12, brand: "Moyu", category: "6x6", model: "MGC M", base: "Stickerless", price: 680},
      {id: 13, brand: "YJ", category: "6x6", model: "Meilong", base: "Stickerless", price: 399},
      {id: 14, brand: "Shengshou", category: "11x11", model: "Kingcube 11x11", base: "Black", price: 3100},
    ];
  }

  create(newCube){
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        this.cubes.push(newCube);
        resolve();
      }, 1000);
    });
  };

  findAll(category){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(category){
          const filterData = this.cubes.filter(cube => cube.category === category);
          resolve(filterData);
        }
        resolve(this.cubes);
      }, 1000);
    });
  };

  findOne(id){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const cube = this.cubes.find(cube => cube.id === parseInt(id));
        if(cube){
          resolve(cube);
        }
        reject();
      }, 1000);    
    });
  }

  editPartial(id, body){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const indexFounded = this.cubes.findIndex(cube => cube.id === parseInt(id));
        if(indexFounded !== 1){
          let cubesCopy = [ ...this.cubes ];
          const newBody = this.cubes[indexFounded];
          cubesCopy[indexFounded] = { ...newBody, ...body };
          this.cubes = [...cubesCopy];
          resolve();
        }
      }, 1000);    
    });
  }

  editComplete(id, body){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const indexFounded = this.cubes.findIndex(cube => cube.id === parseInt(id));
        if(indexFounded !== -1){
          let cubesCopy = [ ...this.cubes ];
          cubesCopy[indexFounded] = {id, ...body};
          this.cubes = [...cubesCopy];
          resolve();
        }
      }, 1000);    
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const indexFounded = this.cubes.findIndex(cube => cube.id === parseInt(id));
        if(indexFounded !== -1){
          const cubesCopy = [...this.cubes];
          cubesCopy.splice(indexFounded, 1);
          this.cubes = [...cubesCopy];
          resolve();
        }
      }, 1000);    
    });
  }

}

module.exports = CubesServices;