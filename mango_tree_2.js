"use strict"


function random(){
  return Math.round(Math.random()*5)
}
//apple produce
class Fruit {
  constructor() {

  }
}

// buah.produceFruit()
// console.log(buah.produceFruit());
// Release 1
class FruitTree {
  constructor(condition){
    this._nama = condition['_nama']||"unknown"//nama pohon
    this._umur = condition['_umur']|| 0//usia pohon
    this._tinggi = condition['_tinggi']||0//tinggi pohon
    this._healthy = condition['_healthy']||true//healthy status
    this._maxAge =  condition['_maxAge']||20//maximum age
    this._fruits = []
    this.sumBuah = 0
    this.start = 0;
    this.fruit = new Fruit({});
    this._mature = condition['_mature']||10;//mulai dewasa
    this.harvest = false
  }
  get nama(){
    return this._nama
  }

  set nama(value){
    this._nama = value
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


  get maxAge(){
    return this._maxAge
  }

  set maxAge(value){
    this._maxAge = value
  }

  produceFruit(){
  if (this.harvest) {
    this.sumBuah += random()
    }
  }

  harvestStatus(){
    if (this.start >= this._mature) {
      return this.harvest = true
    }
    // console.log(false);
  }

  startForward(){
    this.start+=1
  }

  nextYear(){
    if (this._umur >= this._maxAge) {
      this._healthy = false
      console.log("-------------------------------------------------------");
      return console.log(`di usia ${this._umur} bulan, pohon ${this._nama} mati`);
      console.log("-------------------------------------------------------");
    }
    this.grow()
    var buah = new Fruit({})
    this._fruits.push(buah)
    this.startForward()
    this.produceFruit()
    this._umur+=1;
    // console.log(this.start+"test");
    this.harvestStatus()
    console.log(`buah ${this._nama}\nusia ${this._umur} bulan \nproduksi buah :${this.sumBuah}\nstatus produksi buah :${this.harvest}\ntinngi pohon : ${this._tinggi} m`);

    console.log("-------------------------------");
  }
  grow(){
      this._tinggi+=random();
  }

}
//
// var test =  new FruitTree({});
// test.umur =0
// test.nama = "apple"
// test.maxAge=14
// test.grow()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
// test.nextYear()
class Apple extends Fruit {
  constructor() {
    super()
  }
}

class Pear extends Fruit {
  constructor() {
    super()
  }
}
class AppleTree extends FruitTree{
  constructor(condition){
    super(condition)
    this._nama = 'apple'
    this._maxAge = 20
    this._mature = 4
    this.fruit = new Apple({})
  }
}

class PearTree extends FruitTree{
  constructor(condition){
    super(condition)
    this._nama = 'pear'
    this._mature = 6
    this._maxAge = 18
    this.fruit = new Pear({})
  }
}

// let coba = new PearTree({})
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// coba.nextYear()
// console.log(coba.fruit);

//Release 2
class TreeGrove {
  constructor(para={}){
    this._input = para;
    this._result = []
  }
  inputTree(){
    console.log(this._input);
    this._result.push(this._input)
  }
}
//
var grove = new TreeGrove()
// // input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true)
// grove.inputTree("MangoTree", 5, 2.4, 12,true)
// grove.inputTree("AppleTree", 4, 1.2, 5,true)
// grove.inputTree("PearTree", 7, 2, 15,true)
// // show trees age
// grove.showAge()
// //show trees
// grove.showTrees()
// // show trees
// grove.mature_trees()
// // show trees
// grove.dead_trees()
// // next year
// grove.nextYear()
