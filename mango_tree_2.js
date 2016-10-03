"use strict"

// Release 0
class AppleTree {
  constructor(){
    this.umur = 0
    this.tinggi = 0,5
    this.sehat = true
    this.jumlah_buah = []
    this.panen = 0
  }
  grow(){
    this.tinggi += rand();
    this.umur += 1
    if (this.umur ===  20){
      this.sehat = false
    }
  }
  berbuah(){
    if (this.tinggi > 5){
      for (var i = 0; i < rand(); i++) {
        this.jumlah_buah.push(new Apple())
      }
    }
  }
  panen_buah(){
    this.panen = this.jumlah_buah.length;
    this.jumlah_buah = []
  }
}
class Apple {
  constructor(){
    this.quality = rand();
    this.weigth = rand()*100;
  }
}
var rand = () =>{
  return Math.floor(Math.random()*10)
}
// // Release 1
// class FruitTree {
//   constructor()
// }
// class Fruit {}
//
// // Release 2
// class TreeGrove {}

var apel = new AppleTree()
console.log("buah ditanam")
do {
  apel.grow();
  apel.berbuah();
  apel.panen_buah();
  console.log("status report tahun ke-"+ (apel.umur) + " tinggi= " +(apel.tinggi) + " petik= " + (apel.panen))
}while (apel.sehat != false)
