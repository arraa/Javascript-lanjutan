// function expression

/*
    let tampilPesanExpression = function (nama) {
        console.log(`halo ${nama}`);
    };

    tampilPesanExpression("salem");
*/

//arrow function
/*
    let tampilPesanArrow = (nama) => {
        console.log(`halo ${nama}`);
    };

    tampilPesanArrow("salem");
*/

//// implisit return, tpi ini cuman 1 parameter dan return doang

// let tampilPesan = (nama) => `halo ${nama}`;

// console.log(tampilPesan("salem"));

////tpi klo misalnya gaada parameter dan gada return

// let tampilPesan = () => `halo`;
// console.log(tampilPesan("salem"));

// let kucing = ["cemong", "salem", "milo"];

// let jumlahhuruf = kucing.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahhuruf);

// let jumlahhuruf = kucing.map(nama => nama.length)

// console.log(jumlahhuruf);

//// klo mau ngereturn object di arrow function, {} harud dibungkus pakai () jdi nnti ({})

// let jumlahhuruf = kucing.map((nama) => ({
//     nama, //klo mau ngereturn object yg propertinya sm kaya nilainya gaperlu di declare kaya nama:nama cukup gini aja
//     jmlHuruf: nama.length,
// }));

// console.log(jumlahhuruf);

//konsep this pada arrow function

// constructor function

// const Mahasiswa = function () {
//     this.nama = "salem";
//     this.umur = 6;
//     this.sayHello = function () {
//         console.log(`haii ${this.nama}`);
//     };

//     // console.log(this);
// };

// const salem = new Mahasiswa();

// salem.sayHello();

// arrow function
// sebenernya ga bisa buat constructor function
// diubah langsung jd arrow fn, tpi klo method bisa jd klo ini dijalanin bakal error

// const Mahasiswa =  () => {
//     this.nama = "salem";
//     this.umur = 6;
//     this.sayHello = () => {
//         console.log(`haii ${this.nama}`);
//     };

// };

// const salem = new Mahasiswa();

// salem.sayHello();

//object literal

// const mahasiswa = {
//     nama: "salem",
//     umur: 6,
//     sayHello:  () => {
//         console.log(`haii ${this.nama}`);
//jdinya undifined krna arrow function ga pake konsep this dia bakal jdi ke global krna ini kan object ya jdi ga nemu gitu nama nya
//     },
// };

// const salem = mahasiswa

// salem.sayHello();

//contoh lain

// const Mahasiswa = function () {
//     this.nama = "salem";
//     this.umur = 6;
//     this.sayHello = function () {
//         console.log(`haii ${this.nama}`);
//     };

//     // setInterval(function () {
//     //     console.log(this.umur++) //dia bakal ngecheck secara window atau global nya krna dia bakal ngehoisting
//     // }, 500);

//     // setInterval( () => {
//     //     console.log(this.umur++) //arrow function ga punya konsep this jdi dia bakal cari ke lexical scope nya yaitu ke mahasiswa
//     // }, 500);
// };

// const salem = new Mahasiswa();

const box = document.querySelector(".box");

box.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }
    
    this.classList.toggle(satu);

    // setTimeout(function () {
    //     this.classList.toggle("caption"); //ini gajalan klo pake function ini dia bakal ngecek diluarnya tpi krna set timeout ini dijalanin ketika hoisting jd dia bakal ngecek di window ato global
    // }, 500);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 500);
});
