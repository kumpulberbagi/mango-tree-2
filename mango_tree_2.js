"use strict"
class FruitTree {
  constructor(start_tanam){
    this.umur = start_tanam || 0
    this.tinggi = 0
    this.sehat = true
    this.jumlah_buah = []
    this.panen = 0
    this.tumbuh = 0;
    this.max_umur = 0;
    this.first_buah = 0;
    this.berbuah_pertahun = 0;
    this.buah = new Fruit();
  }
    grow(){
      this.tinggi += this.tumbuh*rand();
      if (this.sehat === true){
        this.umur += 1
      }
      if (this.umur ===  this.max_umur){
        this.sehat = false
      }
    }
    berbuah(){
      if (this.tinggi > this.first_buah){
        for (var i = 0; i < this.berbuah_pertahun*rand(); i++) {
          this.jumlah_buah.push(this.buah)
        }
      }
    }
    panen_buah(){
      if (this.sehat === true){
        this.panen = this.jumlah_buah.length;
        this.jumlah_buah = []
      }else{
        this.panen = 0
      }
    }
}
class Fruit {
  constructor(buah){
    this.buah = buah
  }
}

// Release 0
class AppleTree extends FruitTree{
  constructor(umur, tinggi, sehat, jumlah_buah, panen){
    super(umur, tinggi, sehat, jumlah_buah, panen)
    this.tumbuh = 0.5;
    this.max_umur = 20;
    this.first_buah = 5;
    this.berbuah_pertahun = 12;
    this.buah = new Apple();
  }

  grow(){
    super.grow()
  }
  berbuah(){
    super.berbuah()
  }
  panen_buah(){
    super.panen_buah()
  }

}

class Apple {
  constructor(){
    this.quality = rand();
    this.weigth = rand()*100;
    this.name = "Apple"
  }
}
var rand = () =>{
  return Math.floor(Math.random()*5)+1
}
// var apel = new AppleTree()
// console.log(apel)
// do {
//   apel.grow();
//   apel.berbuah();
//   apel.panen_buah();
//   console.log("status apel report tahun ke-"+ (apel.umur) + " tinggi= " +(apel.tinggi) + " petik= " + (apel.panen))
// }while (apel.sehat != false)

class MangoTree extends FruitTree{
  constructor(umur, tinggi, sehat, jumlah_buah, panen){
    super(umur, tinggi, sehat, jumlah_buah, panen)
    this.tumbuh = 1;
    this.max_umur = 30;
    this.first_buah = 10;
    this.berbuah_pertahun = 10;
    this.buah = new Mango();
  }

  grow(){
    super.grow()
  }
  berbuah(){
    super.berbuah()
  }
  panen_buah(){
    super.panen_buah()
  }

}
class Mango {
  constructor(){
    this.quality = rand();
    this.weigth = rand()*300;
    this.name = "Mango"
  }
}
// var mangga = new MangoTree()
// console.log(mangga)
// do {
//   mangga.grow();
//   mangga.berbuah();
//   mangga.panen_buah();
//   console.log("status mangga report tahun ke-"+ (mangga.umur) + " tinggi= " +(mangga.tinggi) + " petik= " + (mangga.panen))
// }while (mangga.sehat != false)

class PearTree extends FruitTree{
  constructor(umur, tinggi, sehat, jumlah_buah, panen){
    super(umur, tinggi, sehat, jumlah_buah, panen)
    this.tumbuh = 1.5;
    this.max_umur = 25;
    this.first_buah = 12;
    this.berbuah_pertahun = 5;
    this.buah = new Pear();
  }

  grow(){
    super.grow()
  }
  berbuah(){
    super.berbuah()
  }
  panen_buah(){
    super.panen_buah()
  }

}
class Pear {
  constructor(){
    this.quality = rand();
    this.weigth = rand()*180;
    this.name = "Pear"
  }
}
// var pir = new PearTree()
// console.log(pir)
// do {
//   pir.grow();
//   pir.berbuah();
//   pir.panen_buah();
//   console.log("status pir report tahun ke-"+ (pir.umur) + " tinggi= " +(pir.tinggi) + " petik= " + (pir.panen))
// }while (pir.sehat != false)
// Release 1

// // Release 2
class TreeGrove {
  constructor(groove){
    this.groove = groove
  }
  age(){
    var result = [];
    for (var i = 0; i < this.groove.length; i++){
      // result[this.groove[i]['umur']] = this.groove[i]['buah']['name']
      // console.log(result)
      if(this.groove[i]['sehat'] === true){
        result.push("Pohon " + this.groove[i]['buah']['name'] + " umurnya " + this.groove[i]['umur'] )
      }
    }
    if (result.length === 0){
      return "Pohon sudah mati semua :("
    }else {
      return result
    }
  }

  trees(){
    var trees = []
    console.log("Nama Pohon di dalam Array : ")
    for(var i = 0 ; i < this.groove.length ; i++){
      trees.push("Pohon " + this.groove[i]['buah']['name'])
    }
    return trees
  }
  mature_trees(){
    var trees = []
    console.log("Pohon yang sedang berbuah : ")
    for(var i = 0 ; i < this.groove.length ; i++){
      if(this.groove[i]['panen'] > 0){
        trees.push("Pohon " + this.groove[i]['buah']['name'])
      }
    }
    if (trees.length === 0){
      return "Semua pohon sudah tidak berbuah :("
    }else {
      return trees
    }
  }
  dead_trees(){
    var trees = []
    console.log("Pohon yang sudah mati : ")
    for (var i = 0; i<this.groove.length; i++){
      if (this.groove[i]['sehat'] === false){
        trees.push("Pohon " + this.groove[i]['buah']['name'])
      }
    }
    if (trees.length === 0){
      return "Pohon masih pada hidup XD"
    }else {
      return trees
    }
  }
}

var arr = []
arr.push(new AppleTree(5))//array ke 0
arr.push(new PearTree(3))//array ke 1
arr.push(new MangoTree(8))//array ke 2
arr.push(new MangoTree(7))//array ke 3
// console.log(arr[1])

var groove = new TreeGrove(arr)
console.log(groove.trees())
do{
  for (var i = 0; i<arr.length; i++){
    arr[i].grow()
    arr[i].berbuah();
    arr[i].panen_buah();
  }
  console.log(groove.age())

  console.log(groove.mature_trees())

  console.log(groove.dead_trees());

  console.log("<------------------------------------->")
}while (arr[0].sehat != false || arr[1].sehat != false || arr[2].sehat != false || arr[3].sehat != false)
