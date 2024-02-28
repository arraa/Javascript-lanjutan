const angka = [-1, 3, 4, 6, 10, -3, 0, 1, 5, -5];

// mencari angka >= 3

// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

//filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

//kalikan 2

//map
// const newAngka = angka.map((a) => a *2);
// console.log(newAngka);

//reduce

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

/**
bentuk aslinya sebnenrnya gini
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
0 + -1 + 3 + 4 + 6 + 10 + -3 + 0 + 1 + 5 + -5

jd dia awalnya 0 tpi klo misalnya kita ubah jd
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
5 + -1 + 3 + 4 + 6 + 10 + -3 + 0 + 1 + 5 + -5

totalnya ga 20 lg tpi jd 25
 */

//method chaining

// cari angka > 5
// kalikan 3
// jumlahkan

/*
const newAngka = angka.filter((a) => a >= 5);
console.log(newAngka);

const KaliAngka = newAngka.map((a) => a * 3);
console.log(KaliAngka);

const jmlAngka = KaliAngka.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(jmlAngka);
*/

//^^ ini jdinya kan panjang bgt yaaa jdi bisa pake method chaning kaya dibawha ini


const newAngka = angka.filter((a) => a >= 5)
    .map((a) => a * 3)
    .reduce(
        (acc, curr) => acc + curr
    );

console.log(newAngka);
