"use strict"

class FruitTree {
  constructor(args={})
  {
    this._age = args['age'] || 0
    this._max_age = args['max_age'] || 20
    this._height = args['height'] || 15
    this._diameter = args['diameter'] || 0
    this._healthy = args['healthy'] || true;
  }

  set max_age(maxAge)
  {
    this._max_age = maxAge
  }
  set age(age) {
    this._age = age;
  }
  set height(height) {
    this._height = height;
  }
  set diameter(diameter) {
    this._diameter = diameter;
  }
  set healthy(healthy) {
    this._healthy = healthy;
  }

  get max_age()
  {
    return this._max_age
  }
  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get diameter() {
    return this._diameter;
  }
  get healthy() {
    return this._healthy;
  }


}

class AppleTree extends FruitTree{
    constructor()
    {
      super()
    }
}

class MangoTree extends FruitTree{
    constructor()
    {
      super()
    }
}


class Fruit{
  constructor(args={})
  {
    this._diameter = args['diameter']
    this._size = args['size']
    this._taste = args['taste']
  }

  set diameter(diameter)
  {
    this._diameter = diameter
  }
  get diameter()
  {
    return this._diameter
  }
  set size(size)
  {
    this._size = size
  }
  get size()
  {
    return this._size
  }

  set taste(taste)
  {
    this._taste = taste
  }
  get taste()
  {
    return this._taste
  }
}

class Apple extends Fruit{
  constructor()
  {
    super();
  }
}

class Mango extends Fruit{
  constructor()
  {
    super();
  }
}

var fruit = new Fruit()
var apple = new Apple()
var mango = new Mango()


class TreeGrove {
  constructor()
  {
    this.tampung_tree = [];
  }

  age()
  {
    for (var i = 0; i < this.tampung_tree.length; i++) {
      console.log("Usia pohon " + this.tampung_tree[i].constructor.name + " : " + this.tampung_tree[i]._age);
    }
    // return this.tampung_tree[this.tampung_tree.length].age;
  }

  add_trees(tree)
  {
      this.tampung_tree[this.tampung_tree.length] = tree;
  }

  trees() {
    for (var i = 0; i < this.tampung_tree.length; i++) {
      console.log(this.tampung_tree[i]);
    }
  }

  get_size()
  {
    return this.tampung_tree.length
  }

  mature_trees() {
    var tampung_pohon = []
    for(var i=0;i<this.tampung_tree.length;i++)
    {
      if(this.tampung_tree[i]._age >= 3 && this.tampung_tree[i]._age <=15)
      {
        tampung_pohon.push(this.tampung_tree[i].constructor.name)
      }
    }

    if (tampung_pohon.length === 0) {
      return "Tidak ada pohon yang berbuah :'(";
    }
    else {
      return tampung_pohon.join("\n");
    }

  }

  dead_trees() {
    var pohon_mati = []
    for(var i=0;i<this.tampung_tree.length;i++)
    {
      if(this.tampung_tree[i]._age >= this.tampung_tree[i]._max_age)
      {
        pohon_mati.push(this.tampung_tree[i].constructor.name)
      }
    }

    if (pohon_mati.length === 0) {
      return "Semua pohon masih sehat :D";
    }
    else {
      return pohon_mati.join("\n");
    }

  }
}

function getRand() {
  return Math.random();
}


var tree = new TreeGrove();

var appleTree = new AppleTree()
  appleTree.age = Math.ceil(getRand() * 25);
  appleTree.max_age = 20;
  appleTree.height = Math.ceil(getRand() * 10);
  appleTree.diameter = getRand().toFixed(2);

var mangoTree = new MangoTree()
  mangoTree.age = Math.ceil(getRand() * 20);
  mangoTree.max_age = 15;
  mangoTree.height = Math.ceil(getRand() * 15);
  mangoTree.diameter = getRand().toFixed(2);

tree.add_trees(appleTree)
tree.add_trees(mangoTree)

console.log("=== Daftar usia pohon ===");
tree.age();

console.log("\n");
console.log("=== Daftar semua pohon ===");
tree.trees();

console.log("\n");
console.log("=== Daftar pohon yang berbuah ===");
console.log(tree.mature_trees());

console.log("\n");
console.log("=== Daftar pohon yang mati ===");
console.log(tree.dead_trees());
