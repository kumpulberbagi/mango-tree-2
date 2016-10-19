class AppleTree {
  constructor() {
      allTree.allFruits.push(this)
        this.height = 10
        this.age = 10
        this.fruits = "Apel"
        this.deadFruit = true;
  }
}
class Apple extends AppleTree{
  constructor()
  {
    super()
  }
}

// Release 1
class FruitTree {
  constructor()
  {
    allTree.allFruits.push(this)
    this.height = 10;
    this.age = 4
    this.fruits = "Fruit"

  }
}
class Fruit extends FruitTree{
  constructor()
  {

    super()
  }
}
class PearTree{
  constructor()
  {
    allTree.allFruits.push(this)
    this.height = 100
    this.age = 20
    this.fruits = "Pear"
    this.berbuah = true;
  }
}
class Pear extends PearTree
{
  constructor()
  {
    super()

  }
}



class TreeGrove {
    constructor()
    {
      this.allFruits = []
    }

    age()
    {
        console.log("Apple's age : "+apple.age+" Pear's age : "+ pear.age)
    }

    trees()
    {
        console.log("Jenis Pohon : "+apple.fruits+" "+pear.fruits)
    }

    mature_trees()
    {
      if(pear.berbuah)
      {
        console.log("Pohon yang berbuah "+pear.fruits)
      }
    }


    dead_trees()
    {
      if(apple.deadFruit)
      {
        console.log("Pohon yang mati "+apple.fruits)
      }
    }
}



var allTree = new TreeGrove()
var apple = new AppleTree()
var pear = new PearTree()
console.log(allTree)
allTree.age()
allTree.trees()
allTree.mature_trees()
allTree.dead_trees()
