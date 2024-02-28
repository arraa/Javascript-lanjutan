// template literals / string

// const nama = "salem";
// const umur = 6;
// console.log(`halo nama saya ${nama}, dan umur saya ${umur} tahun`);
// console.log("halo nama saya " + nama + ", dan umur saya " + umur + " tahun");

//embedded expression

// console.log(`${1 + 1}`);
// console.log(`${alert("hai")}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"} `);

//html fragment

// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span>${mhs.email}</span>
// </div>`;

//looping

// const mhs = [
//     {
//         nama: "Salem",
//         email: "Salemudinmeowmeow@gadaEmail.com",
//     },
//     {
//         nama: "Memong",
//         email: "MemongKucingnakal@gadaEmail.com",
//     },
//     {
//         nama: "Milo",
//         email: "MiloSicantik@gadaEmail.com",
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs
//         .map(
//             (m) => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`
//         )
//         .join("")}
// </div>`; // ^^supaya komanya ilang

//conditionals

// const lagu = {
//     judul: "Semua orang pernah sakit hati",
//     penyanyi: "lomba sihir",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat ${lagu.feat})` : ''}</li>

//     </ul>
// </div>`

//nested
//html fragment bersarang

// const mhs = {
//     nama: "salem",
//     smt: 5,
//     mataKuliah: ["Keliling Kampung", "Berantem", "Mijet", "Ngeong ngeong"],
// };
// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//         ${mataKuliah.map((matkul) => `<li>${matkul}</li>`).join("")}
//     </ol>`;
// }
// const el = `<div class="lagu">
//     <h2>${mhs.nama}</h2>
//     <span>semester :  ${mhs.smt}</span>
//     <h4>Mata Kuliah : </h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;

//tagged templates

// const nama = "salem";
// const umur = 6;

// function coba(string, ...values) {
//     // let result = '';

//     // string.forEach((str, index ) => {
//     //     result += `${str} ${values[index] || ''}`
//     // });

//     // return result;

//     return string.reduce(
//         (result, str, index) => ` ${result} ${str} ${values[index] || ""}`,
//         ""
//     );
// }
// const str = coba`halo nama kucing ${nama}, umurnya ${umur} tahun.`;
// // string diatas dipecah jd array dipisah dengan expression

// console.log(str);


//contoh


const nama = "salem";
const umur = 6;

function highlight(string, ...values) {
    return string.reduce(
        (result, str, index) => ` ${result} ${str} <span class="hl"> ${values[index] || ""}</span>`,
        ""
    );
}
const str = highlight`halo nama kucing ${nama}, umurnya ${umur} tahun.`;
// string diatas dipecah jd array dipisah dengan expression


document.body.innerHTML = str;