// Destructuring

// function PenjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }
// const jumlah = PenjumlahanPerkalian(2, 3)[0];
// console.log(jumlah)

// ini klo pakai Destructuring
// const [penjumlahan, perkalian] = PenjumlahanPerkalian(2, 3);
// console.log(penjumlahan)
// console.log(perkalian)

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// //posisinya harus bener klo salah ya dia bakal ngikutin index arraynya
// const [penjumlahan,perkurangan, perkalian, bagi = null] = kalkulasi(2, 3);
// console.log(penjumlahan);
// console.log(perkalian);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return  {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi:  a / b
//     }
// }
// //posisinya harus bener klo salah ya dia bakal ngikutin index arraynya
// const {tambah,kurang, kali,bagi} = kalkulasi(2, 3);
// //    ^^ inget klo pakai object variablenya di declare pake [] tpi klo object {}

// console.log(bagi);

//Destructuring function arguments

const mhs = {
    nama: "salem",
    umur: 6,
    email: "salemudinmeowmeow@gadaEmail.com",
    ciriCiri: {
        bulu: "hitam",
        mata: "oren",
        hobi: "ngeong ngeong",
    },
};

//cara 1 tpi ga pake Destructuring
// function cetakMhs(nama, umur) {
//     return `halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs.nama, mhs.umur));

//cara 2 tpi ga pake Destructuring
// function cetakMhs(mhs) {
//     return `halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs));

// cara klo pake Destructuring
function cetakMhs({ nama, umur, ciriCiri: {hobi} }) {
    return `halo, nama saya ${nama}, saya berumur ${umur} tahun, 
    dan hobi saya adalah  ${hobi}`;
}
console.log(cetakMhs(mhs));
