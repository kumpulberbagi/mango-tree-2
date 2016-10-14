"use strict"

// // function to get random number to fill the grow and get fruit
function getRandom(range) {
  return Math.floor(Math.random() * range * 100) / 100;
}

class FruitTree {
  constructor(component) {
    this.name = component["name"] || "no name";
    this.age = component["age"] || 0;
    this.height = component["height"] || 0;
    this.first_fruit = component["first_fruit"] || 2;
    this.life_time = component["life_time"] || 20;
    this.healthy = component["healthy"] || true;
    this.current_fruit = component["current_fruit"] || 0;
    this.fruit = [];
    this.height_record = [];
  }

  // give the ability of user to set the age from outside and define the constructor from outside the class

  set _age(age) {
    this.age = age;
  }

  set _height(height) {
    this.height = height;
  }

  set _first_fruit(firstFruit) {
    this.first_fruit = firstFruit;
  }

  set _life_time(life) {
    this.life_time = life;
  }

  // Method related to tree
  // to make the fruit tree grows
  grow() {
    if (this.age < this.life_time){
      this.age += 1;
      this.height += getRandom(2); // random from 1 to 2 m per year with two decimal places
      this.height_record.push(this.height);
      this.bearFruit();
    } else {
      this.healthy = false;
    }
  }

  // method to produce fruit
  bearFruit() {
    if (this.age > this.first_fruit && this.age < this.life_time) {
      this.current_fruit = Math.floor(getRandom(50)); // to get the current fruit
      this.fruit.push(this.current_fruit); // array of fruit produce each month
    } else {
      this.fruit.push(0);
    }
  }

  // checking the harvest of the year
  harvest_year(year) {
    return this.fruit[year + 1];
  }

  // checking the total fruit between the range of the year
  total_fruit(start, end) {
    var result = 0;
    for (var i = start; i < end; i += 1) {
      result += this.fruit[i];
    }
    return result;
  }

  all_time() {
    for(var i = this.age; i < this.life_time; i += 1) {
      this.grow();
      this.bearFruit();
    }
  }

  nextYear() {
    this.grow();
    this.bearFruit();
    console.log(`Fruit Name: ${this.name}\ncurrent height: ${this.height}\ncurrent fruit: ${this.current_fruit}\n`);
  }


}


//the grove of tree

class TreeGrove {
  constructor() {
    this.kind = [];
  }

  inputTree(object) {
    var fruit = new FruitTree(object)
    this.kind.push(fruit);
  }

  nextYear() {
    for (var i = 0; i < this.kind.length; i += 1) {
      var tree = this.kind[i]
      tree.grow();
      tree.bearFruit()
      console.log(`Fruit Name: ${tree.name}\ncurrent height: ${tree.height} m\ncurrent fruit: ${tree.current_fruit} hundred\nhealthy condition: ${tree.healthy}\n`);
      if (tree.healthy === false) {
        console.log(`${tree.name} is died`);
      }
    }
  }

  deadTrees() {
    for (var i = 0; i < this.kind.length; i += 1) {
      var tree = this.kind[i]
      if (tree.healthy === false) {
        console.log(tree.name + " is died :( ");
      }
    }
  }

  matureTrees() {
    for (var i = 0; i < this.kind.length; i += 1) {
      var tree = this.kind[i]
      if (tree.current_fruit > 0) {
        console.log(`---> Mature <----\nFruit Name: ${tree.name}\ncurrent height: ${tree.height} m\ncurrent fruit: ${tree.current_fruit} hundred\nhealthy condition: ${tree.healthy}\n`);
      }
    }
  }
}



//
let grove = new TreeGrove();

// the input

grove.inputTree({
  name: "mango",
  first_fruit: 2,
  height:0.5,
  life_time: 20
})
grove.inputTree({
  name: "apple",
  first_fruit: 2,
  height:0.5,
  life_time: 15
})
grove.inputTree({
  name: "pear",
  first_fruit: 0,
  height:0,
  life_time: 4
})


// testing all release
grove.nextYear();
grove.nextYear();

grove.matureTrees();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.matureTrees();
grove.deadTrees();
