"use strict"

var tampung_pohon = [];
// tampung_pohon.push(mango_tree_two = new MangoTree(0, 0, 0, 0, true, "mango"));
// console.log(tampung_pohon);

// Release 0
class FruitTree {
  // Initialize a new MangoTree
  constructor(umur, tinggi, jumlah, status) {
    this.umur = umur;
    this.tinggi = tinggi;
    // this.kapasitas = 0;
    this.jumlah = jumlah;
    this.status = status;
    this.batas = 100;
    this.fruits = []
  }

  // set current states here

  // setUmur(x){
  //   this.umur = x;
  // }

  // Get current states here
  getNama() {
    return this.nama;
  }
  getAge() {
    return this.umur;
  }

  getHeight() {
    return this.tinggi;
  }

  getFruits() {
    return this.jumlah;
  }

  getHealthStatus() {
    return this.status;
  }

//  Grow the tree
grow() {
  this.umur = this.umur + 1;
  if(this.tinggi < this.batas) {
    this.tinggi = Math.floor(this.tinggi + getRandomNumber() / 2);
  }
  else {
    this.tinggi = this.tinggi;
  }

  console.log("umur: " + this.umur + " tinggi: " + this.tinggi + " harverst: " + this.fruits.length);
  this.harvest();

}

produceFruits() {

  if(this.tinggi < this.batas) {
    // this.kapasitas = this.kapasitas + getRandomNumber();

    for(var i=0; i<getRandomNumber(); i++) {
      this.fruits.push(new Fruit())
    }
    //butuh tau banyak buah nya.. this.fruits.length
  }
  // else {
  //   this.kapasitas = this.kapasitas;
  // }
}

  // Get some fruits
  harvest() {
    // this.jumlah = getRandomNumber();
    if(this.fruits.length > 0) {
      if(this.umur > 2) {
        this.fruits = []
      }
    }
    else if(this.fruits.length <= 0 && this.tinggi >= this.batas) {
      this.status = false;
    }
  } // end method harvest

} // end class

function getRandomNumber() {
  return Math.round((Math.random() * 10) + 1);
}


// class buah
class Fruit {
  constructor(){
    this.kualitas = getRandomNumber()
  }
}

// class mango
class MangoTree extends FruitTree{
  constructor(umur, tinggi, kapasitas, jumlah, status, nama){
    super(umur, tinggi, kapasitas, jumlah, status)
    this.nama = nama
    this.batas = 80;
  }

  grow() {
    this.umur = this.umur + 1;
    if(this.tinggi < this.batas) {
      this.tinggi = this.tinggi + getRandomNumber();
    }
    else {
      this.tinggi = this.tinggi;
    }

    console.log("nama : " + this.nama + " umur: " + this.umur + " tinggi: " + this.tinggi + " harverst: " + this.fruits.length);
    this.harvest();

  }

  produceFruits() {

    if(this.tinggi < this.batas) {
      // this.kapasitas = this.kapasitas + getRandomNumber();

      for(var i=0; i<getRandomNumber(); i++) {
        this.fruits.push(new Fruit())
      }
      //butuh tau banyak buah nya.. this.fruits.length
    }
    // else {
    //   this.kapasitas = this.kapasitas;
    // }
  }

}

class Mango extends Fruit{
  constructor(kualitas){
    super(kualitas)
  }
  kualitasmangga(){
    if(this.kualitas > 5){
      console.log("Mango Super");
    }else{
      console.log("Mango std");
    }
  }
}

// class AppleTree
class AppleTree extends FruitTree{
  constructor(umur, tinggi, kapasitas, jumlah, status, nama){
    super(nama, umur, tinggi, kapasitas, jumlah, status)
    this.nama = nama
    this.batas = 50;
  }

  grow() {
    this.umur = this.umur + 1;
    if(this.tinggi < this.batas) {
      this.tinggi = Math.floor(this.tinggi + getRandomNumber() / 2);
    }
    else {
      this.tinggi = this.tinggi;
    }

    console.log("nama : " + this.nama + " umur: " + this.umur + " tinggi: " + this.tinggi + " harverst: " + this.fruits.length);
    this.harvest();

  }

  produceFruits() {

    if(this.tinggi < this.batas) {
      // this.kapasitas = this.kapasitas + getRandomNumber();

      for(var i=0; i<getRandomNumber(); i++) {
        this.fruits.push(new Fruit())
      }
      //butuh tau banyak buah nya.. this.fruits.length
    }
    // else {
    //   this.kapasitas = this.kapasitas;
    // }
  }

}

class Apple extends Fruit{
  constructor(kualitas, diameter){
    super(kualitas)

  }
}



class PeerTree extends FruitTree{
  constructor(umur, tinggi, kapasitas, jumlah, status, nama){
    super(umur, tinggi, kapasitas, jumlah, status)
    this.nama = nama
    this.batas = 70;
  }

  grow() {
    this.umur = this.umur + 1;
    if(this.tinggi < this.batas) {
      this.tinggi = Math.floor(this.tinggi + getRandomNumber() * 0.4);
    }
    else {
      this.tinggi = this.tinggi;
    }

    console.log("nama : " + this.nama + " umur: " + this.umur + " tinggi: " + this.tinggi + " harverst: " + this.fruits.length);
    this.harvest();

  }

  produceFruits() {

    if(this.tinggi < this.batas) {
      // this.kapasitas = this.kapasitas + getRandomNumber();

      for(var i=0; i<getRandomNumber(); i++) {
        this.fruits.push(new Fruit())
      }
      //butuh tau banyak buah nya.. this.fruits.length
    }
    // else {
    //   this.kapasitas = this.kapasitas;
    // }
  }

}

class Peer extends Fruit{
  constructor(kualitas){
    super(kualitas)
  }
  kualitasmangga(){
    if(this.kualitas > 5){
      console.log("Mango Super");
    }else{
      console.log("Mango std");
    }
  }
}



class TreeGrove {
  constructor(pohon){
    this.pohon = [];
  }

  inputTree(nama, umur, tinggi, jumlah, status){
    // if(nama == "MangoTree"){
    //   var objTree = new MangoTree(umur, tinggi, jumlah, status, nama);
    // }else if(nama == "PeerTree"){
    //   var objTree = new PeerTree(umur, tinggi, jumlah, status, nama);
    // }else if(nama == "AppleTree"){
    //   var objTree = new AppleTree(umur, tinggi, jumlah, status, nama);
    // }

    switch (nama) {
      case 'MangoTree':
        var objTree = new MangoTree(umur, tinggi, jumlah, status, nama);
        break;

      case 'PeerTree':
        var objTree = new PeerTree(umur, tinggi, jumlah, status, nama);
        break;

      case 'AppleTree':
        var objTree = new AppleTree(umur, tinggi, jumlah, status, nama);
        break;
      default:
      console.log("booooo")
    }

    this.pohon.push(objTree)
  }

  age() {
    for(var i = 0; i < this.pohon.length; i++){
      console.log(this.pohon[i]["umur"])
    }

  }

  tress() {
    for(var i = 0; i < this.pohon.length; i++){
      console.log(this.pohon[i]["nama"])
    }
  }

  mature_tress() {
    for(var i = 0; i < this.pohon.length; i++){
      if(this.pohon[i]["fruits"].length > 0) {
        console.log(this.pohon[i]["fruits"].length)
      }
    }
  }

  dead_tress() {
    for(var i = 0; i < this.pohon.length; i++){
      if(this.pohon[i]["status"] == false) {
        console.log(this.pohon[i]["nama"])
      }
    }
  }

  nextYear() {
    // do {
    //   mango_tree_one.grow();
    //   mango_tree_one.produceFruits();
    //
    //
    // }while (mango_tree_one.status != false);
    // for(var i = 0; i < 4; i++){
    //   this.objTree
    //   this.pohon.push(this.objTree)
    // }

  }
}


var groove = new TreeGrove();
groove.inputTree("MangoTree", 3, 7, 7,true)
groove.inputTree("PeerTree", 4, 8, 8,true)
groove.age()
groove.nextYear()
console.log(groove.pohon);


// jalanin proses dari class
// var mango_tree_one = new MangoTree(0, 0, 0, 0, true, "mango")
// var apel_tree_one = new AppleTree(0, 0, 0, 0, true, "apel")
// var peer_tree_one = new PeerTree(0, 0, 0, 0, true, "peer")
// console.log("The tree is alive");



// do {
//   mango_tree_one.grow();
//   mango_tree_one.produceFruits();
//
//
// }while (mango_tree_one.status != false);

// console.log("=====================================================================")

// do {
//
//   apel_tree_one.grow();
//   apel_tree_one.produceFruits();
//
// }while (apel_tree_one.status != false);

// console.log("=====================================================================")
//
// do {
//
//   peer_tree_one.grow();
//   peer_tree_one.produceFruits();
//
// }while (peer_tree_one.status != false);
//
// console.log("The tree dead");




// // Release 1
// class FruitTree {
//   constructor(){
//
//   }
// }
//
// class Fruit {
//
// }
//
// // Release 2
// class TreeGrove {
//
// }
