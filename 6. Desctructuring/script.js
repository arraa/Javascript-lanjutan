// Destructuring variable / assignment

// Destructuring  Array

// const perkenalan = ["halo", "nama", "saya", "Salem"];

//skipping items
// const [salam , , ,nama] = perkenalan;
// console.log(nama)

//swap items klo pakai ini ga perlu pake temp lg
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(b);

//return value pada function
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);

// Destructuring  Object
// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

//notes : klo array namanya bebas tpi klo object hrus sm kaya propertinya
// const { nama, umur } = mhs;
// console.log(umur);

//Assignment tanpa deklarasi object

//klo objectnya simple pake ini tpi klo bnyak pake yg diatas aja
// ({ nama, umur } = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// });
// console.log(nama);

// klo mau ganti nama propertinya / assign ke variable baru

// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// memberikan nilai default value

// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };
// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// memberikan nilai default dan assign ke variable baru

// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

// const { nama : n, umur : u, email :e = "email@default.com" } = mhs;
// console.log(e);

//rest parameter
// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// klo mau ambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs = {
    id: 123,
    nama: "salem",
    umur: 6,
    email: "salemudinmeowmeow@gadaEmail.com",
};

// ini dia cuman ambil id nya doang key yg lain ga diambil
function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));
