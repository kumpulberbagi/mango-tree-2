"use strict"


function random(){
  return Math.round(Math.random()*5)
}
//apple produce

// Release 1
class FruitTree {
  constructor(){
    this._umur = 0;
    this._tinggi =0;
    this._healthy = true;
    this._maxAge =  20+random();
    this._harvested = 0;
    this._fruits = []
  }
  get umur(){
    return this._umur
  }

  set umur(value){
    this._umur = value
  }
  get tinggi(){
    return this._tinggi
  }

  set tinggi(value){
    this._tinggi = value
  }
  get healthy(){
    return this._healthy
  }

  set healthy(value){
    this._healthy = value
  }
  grow(){
      this._tinggi+=random();
      this._umur+=1
      if (this._umur >= this._maxAge) {
        return this._healthy = false
      }
  }

  harvest(){
    this._harvested+=random()+8
  }

}





class AppleTree extends FruitTree {
  constructor (){
  super()
  }
  produce(){
    for (var i = 0; i <  Math.round(random()); i++) {
      this._fruits.push(new AppleTree())
    }
    return this._fruits
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super()
  }  produce(){
      for (var i = 0; i <  Math.round(random()); i++) {
        this._fruits.push(new MangoTree())
      }
      return this._fruits
    }
}

class PearTree extends FruitTree {
  constructor() {
    super()
  }
  produce(){
    for (var i = 0; i < Math.round(random()); i++) {
      this._fruits.push(new PearTree())
    }
    return this._fruits
  }
}

class Fruit {}

 var mango = new MangoTree()
console.log(("---------"));
console.log(`The MANGO tree is alive! :smile:`)
do {
  mango.grow()
  mango.produce()
  mango.harvest()
  console.log(`[Year ${mango._umur} Report] Height = ${mango._tinggi} m | Fruits harvested = ${mango._harvested}`)
  mango._harvested = 0
} while (mango._healthy !== false)
console.log(`The tree has met its end. :sad:`)
// initialize apple tree
var apple = new AppleTree()
console.log(`The APPLE tree is alive! :smile:`)
do {
  apple.grow()
  apple.produce()
  apple.harvest()
  console.log(`[Year ${apple._umur} Report] Height = ${apple._tinggi} m | Fruits harvested = ${apple._harvested}`)
  apple._harvested = 0
} while (apple._healthy != false)
console.log(`The tree has met its end. :sad:`)
// initialize pear tree
var pear = new PearTree()
console.log(`The PEAR tree is alive! :smile:`)
do {
  pear.grow()
  pear.produce()
  pear.harvest()
  console.log(`[Year ${pear._umur} Report] Height = ${pear._tinggi} m | Fruits harvested = ${pear._harvested}`)
  pear._harvested = 0
} while (pear._healthy != false)
console.log(`The tree has met its end. :sad:`)


//Release 2
class TreeGrove {
  constructor(para={}){
    this._input = para;
    this._resut = []
  }
  inputTree(){
    console.log(this._input);
    this._result.push(this._input)
  }
}


var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)
// show trees age
grove.showAge()
//show trees
grove.showTrees()
// show trees
grove.mature_trees()
// show trees
grove.dead_trees()
// next year
grove.nextYear()
