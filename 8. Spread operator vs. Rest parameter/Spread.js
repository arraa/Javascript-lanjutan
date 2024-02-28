// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

// Spread Operator
// digunakan untuk memecah iterables menjadi single element

const mhs = ["cemong", "salem", "milo"];
const kucing = ["pedi", "bulbeng", "sasuke"];

// klo ga pakai ... dia bakal jd array tpi klo pake spread (...) dia bakal jd 1 string
// console.log(mhs);
// console.log(...mhs);
// console.log(...mhs[0]);
//string juga termasuk iterables jd klo misalnya di ambil index keberapa dia bakal mecahin semua stringnya jd perhuruf terpisah

//tujuan spread biasanya dipakai untuk menggabungkan 2 array
// const majikan = [...mhs, ...kucing];
// console.log(majikan);

// mirip kaya concat, klo concat
// penggunaan spread bisa lebih fleksible krna bisa aja nambahin 3 array atau lebih klo diconcat jdinya agak ribet
// const majikanConcat = mhs.concat(kucing);
// console.log(majikanConcat)

// untuk mengcopy array klo kaya gini 1 ke ubah semuanya ke ubah, jdi klo nama cemong diubah jdi mongce jdi nya mhs 1 jga ikutan keubah
// const mhs1 = mhs;
// mhs[0] = 'mongce';
// console.log(mhs1)

// notes -> klo dia diubah sebelum di spread yaa dia bakal ambil yg data setelah diubah
// makanya pakai spread, dia bener" ngecopy tnpa bakal ngereferensiin jd klo mhs berubah datanya mhs1 gabakal berubah
// const mhsSpread = [...mhs];
// mhs[0] = 'mongce';
// console.log(mhsSpread)

// const nama = document.querySelectorAll("ul li");
// const mhsNama = [];
// for (let i = 0; i < nama.length; i++) {
//     mhsNama.push(nama[i].textContent);
// }

//lebih simple
// const mhsNama = [...nama].map((m) => m.textContent);
// console.log(mhsNama);

const nama = document.querySelector(".nama");

const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

console.log(huruf);

nama.innerHTML = huruf;
