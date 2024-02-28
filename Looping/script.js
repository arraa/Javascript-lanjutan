// const mhs = ["cemong", "salem", "milo"];

//for loop
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// foreach khusus untuk array
// mhs.forEach((element) => {
//     console.log(element);
// });

// for...of
// for (const m of mhs) {
//     console.log(m);
// }

//for each ga bisa dipakai untuk looping string tpi klo for of bisa

// const nama = "Salem";

// for (const m of nama) {
//     console.log(m);
// }

// klo foreach dia ada indexnya tpi klo for of gaada
// mhs.forEach((element, i) => {
//     console.log(`${element} adalah urutan kucing ternakal yang ke-${i+1}`);
// });

// tpi klo emng mau ada indexnya hrus pakai entries, nnti dia bakal ngereturn array jd harus di desctucring
// for (const [i, m]of mhs.entries()) {
//     console.log(`${m} adalah urutan kucing ternakal yang ke-${i+1}`);
// }

//node list

// const nama = document.querySelectorAll(".nama");

// console.log(nama);

// nama.forEach((element) => {
//     console.log(element.textContent);
// });

// for( n of nama){
//     console.log(n.textContent);
// }

// arguments
// function jumlahkanAngka() {
// gabisa pake ini krna dia jdinya bikin array baru bukan yg dri parameter
// return [1, 2, 3, 4, 5].reduce((a, i) => a + i);

//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }

//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4,5));

// for..in
const mhs = {
    nama: "salem",
    umur: 6,
    email: "salemudinmeowmeow@gadaEmail.com",
};

for (m in mhs) {
    console.log(mhs[m]);
    // klo mhs[m] dia bakal ngereturn value klo m nya aja dia index/key nya yg di return
}
