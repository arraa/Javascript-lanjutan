// execution context, hoisting & scope
/* 
Creation phase pada global context

disini js ngecek ada ga keyword nya, klo ada dia bakal buat 
var nya undefined, kaya contoh dibawah

ini klo misalnya var
var nama = undefined
klo function
nama function = fn()

ini namanya konsep hoisting ^

window = global object
this = window

*/

// var nama = "salem";
// var umur = "5";

// console.log(nama);
// console.log(sayHello());

// function sayHello() {
//     return `halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// bisa akses ke window, arguments, hoisting

// var nama = "salem";
// var username = "salemudin_blackcat";

// function cetakURL(username) {
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + arguments[0];
// }

// console.log(cetakURL(username));

/**
 
    scoping di js

    var nama = "salem";
    var username = "salemudin_blackcat";

    function cetakURL() { 
        var instagramURL = "http://instagram.com/";
        return instagramURL + username; 
        // kalau kaya gini dia bakal ngereturn var yg udh di declare diatas (salemudin_blackcat)
        // karena di parameternya dia ga nerima apa apa ga kecuali di cetakURL nya itu ada parameternya
    }

    console.log(cetakURL('link_ig_salem'));

    tpi ini ttp bisa diakses di functionnya pakai 'arguments[0]'
 */

// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");

//         function c() {
//             console.log("ini c");
//         }

//         c(); // terus ternyata di b ada c() baru deh dia jalanin c
//     }

//     b(); //terus ternyata di function a ada b() baru dia jalanin b
// }

// a(); //ini dulu dijalanin baru dia bakal ngecek function A


