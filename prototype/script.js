// 1. object literal
// let mahasiswa = {
//     nama: "salem",
//     NIM: 2540134243,
//     energi: 100,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// };

// 2. function declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     },

//     tidur: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     },
// };
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let salem = Mahasiswa("salem", 20);

// 3. constructor Function (new)

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     };

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     };
// }

// let salem = new Mahasiswa("salem", 20);

// 4. Object Create

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     },

//     tidur: function (jam) {
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     },
// };
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let salem = Mahasiswa("salem", 20);

//prototype

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi +=  jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
// };

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -=  jam;
//     return `Halo ${this.nama}, selamat main`;
// };

// let salem = new Mahasiswa("salem", 20);

// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main`;
    }
}

let salem = new Mahasiswa("salem", 20);