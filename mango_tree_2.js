"use strict"
// Release 1
class FruitTree {
  constructor(property){
  this._age = property || 0
  this._height = property || 0
  this.harvested = property || 0
  this.fruit = []
  this.maxGrow = property
  this.maxAge = property
  this._healthy = true;

}
set age(value){
  this._age = value
}

get age(){return this._age}
set height(value){this._height = value}
get height(){return this._height}
set healthy(value){this._healthy = value}
get healthy(){return this._healthy}


getAge(){
  return `Umur pohon : ${this._age}`;
}
getHeight(){
  return `Tinggi pohon: ${this._height}`;
}
getHealthy(){
  return this._healthy;
}
getFruit(){
  return `Jumlah buah di pohon : ${this.fruit.length}`
}

grow(){
  if(this._healthy == true){
    if(this._age < this.maxGrow){
      this._height += (Math.floor(Math.random()*(2.5-0.3)+0.3))
    }

    if(this._age >= this.maxAge){
      this._healthy = false
    }
    this._age += 1
  }
}

getRandom(){
  return Math.floor((Math.random()*10)+1)
}

harvest(){
  this.harvested = Math.floor((Math.random()*this.fruit.length)+1)
  this.fruit = []
}
}
class Fruit {
  constructor(property){
    this.quality = Math.floor((Math.random()*5)+1)
  }
}


// Release 0
class AppleTree extends FruitTree {
  constructor(property){
    super(property)
    this.maxAge = 10
    this.maxGrow = 5

  }
  set age(value){this._age = value}
  get age(){return this._age}
  set height(value){this._height = value}
  get height(){return this._height}
  set healthy(value){this._healthy = value}
  get healthy(){return this._healthy}

  produce(){
  for (var i=0; i<=Math.floor((Math.random()*10)+1); i++){
  var apel = new Apple()
  this.fruit.push(apel)
  }
}

  getRandom(){
    super.getRandom()
  }

  grow(){
    super.grow()
  }
  harvest(){
    super.harvest()
  }
  getAge(){
    super.getAge()
  }
  getHeight(){
    super.getHeight()
  }
  getHealthy(){
    super.getHealthy()
  }
  getFruit(){
    super.getFruit()
  }

  }

class MangoTree extends FruitTree {
  constructor(property){
    super(property)
    this.maxAge = 15
    this.maxGrow = 7
  }
  set age(value){this._age = value}
  get age(){return this._age}
  set height(value){this._height = value}
  get height(){return this._height}
  set healthy(value){this._healthy = value}
  get healthy(){return this._healthy}

  produce(){
  for (var i=0; i<=getRandom(); i++){
  var mangga = new Mango()
  this.fruit.push(mangga)
  }
  }
  getRandom(){
    super.getRandom()
  }
  grow(){
    super.grow()
  }
  harvest(){
    super.harvest()
  }
  getAge(){
    super.getAge()
  }
  getHeight(){
    super.getHeight()
  }
  getHealthy(){
    super.getHealthy()
  }
  getFruit(){
    super.getFruit()
  }



}

class PearTree extends FruitTree {
  constructor(property){
    super(property)
    this.maxAge = 25
    this.maxGrow = 15
  }
  set age(value){this._age = value}
  get age(){return this._age}
  set height(value){this._height = value}
  get height(){return this._height}
  set healthy(value){this._healthy = value}
  get healthy(){return this._healthy}

  produce(){
  for (var i=0; i<=getRandom(); i++){
  var pir = new Pear()
  this.fruit.push(pir)
  }
  }
  getRandom(){
    super.getRandom()
  }
  grow(){
    super.grow()
  }
  harvest(){
    super.harvest()
  }
  getAge(){
    super.getAge()
  }
  getHeight(){
    super.getHeight()
  }
  getHealthy(){
    super.getHealthy()
  }
  getFruit(){
    super.getFruit()
  }



}

class Pear extends Fruit{
  constructor(property){
    super(property)
    this.color = "yellow"
}
}



  class Mango extends Fruit{
    constructor(property){
      super(property)
      this.color = "green"
  }
  }




class Apple extends Fruit{
  constructor(property){
    super(property)
    this.color = "red"
}
}

// Release 2
class TreeGrove{
  constructor(property){
    this.groove = []
    this.tree = []
  }

  status(){
    for(var i=0; i<this.groove.length; i++){
      console.log(`Pohon ${i+1} | ${this.tree[i]} | Umur pohon : ${this.groove[i]._age} | Tinggi pohon : ${this.groove[i]._height} | Jumlah Buah : ${this.groove[i].fruit.length}`)
    }
  }
  showAge(){
    for(var i=0; i<this.groove.length; i++){
      console.log(`Pohon ${i+1} | Umur pohon : ${this.groove[i]._age}`)
    }
  }

  trees(){
    for(var i=0; i<this.tree.length; i++){
      console.log(`${i+1}. ${this.tree[i]}`);
    }
  }
  mature_trees(){
    var berbuah = []
    for(var i=0; i<this.groove.length; i++){
      if(this.groove[i].fruit.length > 0){
        berbuah.push(this.tree[i])
      }
    }
    console.log(`Pohon yg sedang berbuah : \n${berbuah}`);
  }

  dead_trees(){
    var dead = []
    for(var i=0; i< this.groove.length; i++){
      if(this.groove.healthy == false){
        dead.push(this.groove[i])
      }
    }
    console.log(`Pohon yg mati : \n${dead}`);
  }


inputTree(type, age, height, fruits, healthy){
  if(type == "MangoTree"){
    this.tree.push(type)
    var mangga = new MangoTree()
    mangga.age = age
    mangga.height = height
    for(var i =0; i<fruits; i++){
      var mangoes = new Mango()
      mangga.fruit.push(mangoes)
    }
    mangga.healthy = healthy
    this.groove.push(mangga)
  } else if(type == "AppleTree"){
    this.tree.push(type)
    var apel = new AppleTree()
    apel.age = age
    apel.height = height
    for(var i =0; i<fruits; i++){
      var apple = new Apple()
      apel.fruit.push(apple)
    }
    apel.healthy = healthy
    this.groove.push(apel)

  } else if(type == "PearTree"){
    this.tree.push(type)
    var pir = new PearTree()
    pir.age = age
    pir.height = height
    for(var i =0; i<fruits; i++){
      var pears = new Pear()
      pir.fruit.push(pears)
  }
  pir.healthy = healthy
  this.groove.push(pir)

} else {
  console.log(`Not a Tree`);
}
}

nextYear(){
  for(var i=0; i<this.groove.length; i++){
    this.groove[i].grow()
    var random = (Math.random()*(20-1)+1)
    for(var j=0; j<random; j++){
    var buah = new Fruit()
    this.groove[i].fruit.push(buah)
  }
  }
}
}

var grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 1.8, 0,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

grove.showAge()
grove.trees()
grove.mature_trees()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.status()

// var pohonApel = new AppleTree()
// var semuapohon = new TreeGrove()
// do{
//   pohonApel.grow()
//   pohonApel.produce()
//   console.log(`Year ${pohonApel.age} Report : Height = ${pohonApel.height} | Fruit Produce = ${pohonApel.fruit.length} | Fruit Harvested = ${pohonApel.harvested}`);
//   pohonApel.harvest()
// } while(pohonApel.healthy !== false)
//   console.log(`The tree has met its end :sad:`);
//
//
//
// console.log(semuapohon.dead_trees())
// console.log(semuapohon.mature_trees())
