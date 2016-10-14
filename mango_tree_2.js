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
    this._healthy = true//healthy status
    this._maxAge =  condition['_maxAge']||20//maximum age
    this._fruits = [new Fruit({})]
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

  growing(){
    while (true) {
      if (this._umur >= this._maxAge) {
        this._healthy = false
        console.log("-------------------------------------------------------");
        console.log(`di usia ${this._umur} bulan, pohon ${this._nama} mati`);
        console.log("-------------------------------------------------------");
        return false
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
  }

}
//
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
class Mango extends Fruit {
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

class MangoTree extends FruitTree{
  constructor(condition){
    super(condition)
    this._nama = 'Mango'
    this._mature = 6
    this._maxAge = 8
    this.fruit = new Mango({})
  }
}


let pear = new PearTree({})
pear.growing()
let apple = new AppleTree({})
apple.growing()

//Release 2
class TreeGrove {
  constructor(){
    this.input = []
  }
  inputTree(jenis,usia,tinggi,harvest){
    if (jenis === "MangoTree") {
      let mango = new MangoTree({})
      mango._umur = usia
      mango._tinggi = tinggi
      mango.harvest = harvest
      this.input.push(mango)
    }else if (jenis === "AppleTree") {
      let apple = new AppleTree({})
      apple._umur = usia
      apple._tinggi = tinggi
      apple.harvest = harvest
      this.input.push(apple)
    }else if (jenis === "PearTree") {
      let Pear = new PearTree({})
      Pear._umur = usia
      Pear._tinggi = tinggi
      Pear.harvest = harvest
      this.input.push(Pear)
    }else {
      console.log("pohon tidak ada");
    }
    // console.log(this._input);
  }
  //umur setiap pohon yang ada
  showAge(){

    for (var i = 0; i < this.input.length; i++) {
      console.log("-----------info--------------");
      console.log(`jenis pohon : ${this.input[i]._nama}\nusia : ${this.input[i]._umur}\nharvest status : ${this.input[i].harvest}\ntinggi pohon ${this.input[i]._tinggi}  `);
      // console.log(this.input[i]);
      console.log("----------------------------");
    }

  }
  //trees yang mulai produksi
  matureTrees(){
    console.log("--------pohon yang sudah bisa dipanen-----------");
    for (var i = 0; i < this.input.length; i++) {
      if (this.input[i].harvest) {
        console.log(this.input[i]._nama);
      }
    }
  }
  //next year
  nextYear(){
    for (var i = 0; i < this.input.length; i++) {
      this.input[i]._umur+=1
      this.input[i].grow()
    }
  }
  //mereturn semua pohon yang mati
  dead_trees(){
    console.log("-----pohon yang sudah tiada :( --------");
    for (var i = 0; i < this.input.length; i++) {
      // console.log(this.input[i]._maxAge);
      if (this.input[i]._umur >= this.input[i]._maxAge ) {
        console.log(this.input[i]._nama);
      }
    }
    console.log("---------------------------------------");
  }

  showTrees(){
    console.log("Nama pohon ");
    for (var i = 0; i < this.input.length; i++) {
      console.log(this.input[i]._nama);
    }
    console.log("------------------------- +");
    console.log(`Total pohon sebanyak ${i}`);
  }



}
//
// var grove = new TreeGrove()
// // // input your trees data !
// grove.inputTree("MangoTree", 5,1.2,true)
// grove.inputTree("MangoTree", 3,1.2,true)
// grove.inputTree("AppleTree", 4,1.2,true)
// grove.inputTree("PearTree", 7,1.2,true)
// grove.showAge()
// grove.showTrees()
// grove.matureTrees()
// grove.dead_trees()
// console.log("yang lain ");
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.showAge()
// grove.dead_trees()
// //
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
