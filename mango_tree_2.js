"use strict"

// variable or function declared first
let getRandom = (num) => Math.round(Math.random() * num);

// mango class
class FruitTree {
  constructor(parameter) {
    this._age = parameter["age"];
    this._height = parameter["height"] || 0;
    this._fruits = parameter["fruits"] || 0;
    this._healthyStatus = parameter["healthystatus"] || true;
    this._harvest = parameter["harvest"] || 0;
    this._dead = parameter["dead"] || 20;
    this._age_array = [];
  }

  getAge() {
    this._age_array.push(this._age + 1);
    return this._age += 1;
  }

  // getObject(name) {
  //   for(var i = 0)
  //   this._fruits = new Fruit()
  // }
  getFruits(num) {
    this._fruits += getRandom(num * 3) // three times the height of tree
    return this._fruits;
  }

  getHeight(num) {
    this._height += getRandom(num);
    return this._height;
  }

  getharvest() {
    this._harvest += this._fruits;
    return this._harvest;
  }

  getHealthy() {
    var rnd = getRandom(10)
    if (getRandom(10) < 0.1) {
      this._healthyStatus = false;
      return this._healthyStatus;
    } //else {
    //   this._healthyStatus = false;
    //   return this._healthyStatus;
    // }
  }

  getDead() {

  }

  grow(num) {
    this.getHeight(num);
    this.getFruits(num);
    this.getharvest();
    this.getAge();
    this.getHealthy();
    this._age_array;
  }

}


let mango = new FruitTree({
  age: 0,
  fruits: 0
});


console.log("Mango Tree");
do {
  mango.grow(3)
  console.log(`Year ${mango._age} || Height : ${mango._height}m || Harvested : ${mango._harvest}Pcs`);
} while (mango._healthyStatus)
console.log("Mangga MATI COY \n");


// Release 0
class AppleTree extends FruitTree {
  constructor(parameter) {
    super(parameter);
    this._diameter = parameter["diameter"];
  }

  getDiameter() {
    this._diameter += getRandom(10);
    return this._diameter;
  }

  grow(num) {
    this.getHeight(num);
    this.getFruits(num);
    this.getharvest();
    this.getAge();
    this.getHealthy();
    this.getDiameter();
  }

}

let pohonApel = new AppleTree({
  age: 0,
  diameter: 0
});

console.log("Pohon Apel");
do {
  pohonApel.grow(3)
  console.log(`Year ${pohonApel._age} || Height : ${pohonApel._height}m || Harvested : ${pohonApel._harvest}Pcs || Diameter ${pohonApel._diameter}cm`);
} while (pohonApel._healthyStatus)
console.log("Phon Apel Mateee");

//
class Apple extends AppleTree {

}
//
//
// // Release 1
// // class FruitTree {}
// // class Fruit {}
//
// // Release 2
// class TreeGrove {}
