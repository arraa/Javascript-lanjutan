// synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function TampilkanPesan(callback) {
//     const nama = prompt("masukkan nama: ");
//     callback(nama);
// }

// TampilkanPesan(nama =>  alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         nama: "salem",
//         umur: 6,
//         email: "salemudinmeowmeow@gadaEmail.com",
//     },
//     {
//         nama: "Cemong",
//         umur: 2,
//         email: "Cemong@gadaEmail.com",
//     },
//     {
//         nama: "Milo",
//         umur: 6,
//         email: "milowow@gadaEmail.com",
//     },
// ];

// console.log("mulai");
// mhs.forEach((m) => console.log(m.nama));
// console.log("huehuehue");

// Asynchronous callback

// function getData(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     };

//     xhr.open("get", url);
//     xhr.send();
// }

// console.log("mulai");
// getData(
//     "data.json",
//     (result) => {
//         const mhs = JSON.parse(result);
//         mhs.forEach(el => console.log(el.nama));
//     },
//     () => {
//         console.log("error");
//     }
// );
// console.log("huehuehue")

// ini menggunakan ajax
// console.log("mulai");
// $.ajax({
//     url: "daata.json",
//     success: (result) => {
//         result.forEach((el) => console.log(el.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     },
// });
// console.log("huehuehue");


