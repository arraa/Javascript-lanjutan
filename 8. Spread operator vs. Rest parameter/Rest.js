// Rest Parameter

// function myFunc(...values) {
//     // return `a  : ${a}, b : ${b}, values : ${values}`;

//     return values;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// klo ga dideclare di paramternya otomatis dia bakal jd args tpi dia bukan array tpi args
// klo args mau di ubah jd array bisa tambahin ... kaya dibawha ini

// function myFunc() {
//     return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlah(...angka) {
//     // let total = 0;
//     // for (const n of angka) {
//     //     total += n;
//     // }
//     // return total;

//     //simple nya pake ini drpd pake for of :)
//     return angka.reduce((a, b) => (a += b));
// }

// console.log(jumlah(1, 2, 3, 4, 5, 6));

// array destructuring

// const kucing = ["cemong", "salem", "milo", "pedi", "bulbeng", "sasuke"];
// const [ketua, wakil, ...anggota] = kucing;
// console.log(ketua);
// console.log(anggota);

// object destructuring

// const team = {
//     penguasa: "cemong",
//     siManja: "salem",
//     siAnteng: "milo",
//     AnakMilo: ["pedi", "bulbeng", "sasuke"],
// };

// const {penguasa, ...kucing} = team
// console.log(kucing)

//filtering

function filterBy(type, ...values) {
    return values.filter((v) => typeof v === type);
}
console.log(filterBy("string", '12', 1, 2, "cemong", false, 10, true, "Doddy"));
