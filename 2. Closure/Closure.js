// lexical scope

// function init() {
//     // let nama = "salem"; // local variable
//     return function (nama) {
//         // inner function (closure*) ini bisa ngeakses parent variablenya
//         console.log(nama); //akses ke parent variable
//     };
// }

// let panggil = init();

// panggil("salem"); // function factory

function ucapakanSalam(waktu) {
    return function (nama) {
        console.log(
            `halo ${nama}, selamat ${waktu}, semoga hari mu menyenangkan`
        );
    };
}

//factory function
let selamatPagi = ucapakanSalam("Pagi");
let selamatSiang = ucapakanSalam("Siang");
let selamatMalam = ucapakanSalam("Malam");

selamatPagi("tia");
selamatSiang("salem");
selamatMalam("cemong");

let add = (function () {
    let counter = 0;
    return function(){
        return ++counter;
    }
})(); 

// "Immediately Invoked Function mendefinisikan dan menjalankan sebuah fungsi segera setelah dideklarasikannya

console.log(add())
console.log(add())
console.log(add())
