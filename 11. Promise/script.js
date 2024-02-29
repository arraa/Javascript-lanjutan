// const mhs = {
//     nama: "salem",
//     umur: 6,
//     email: "salemudinmeowmeow@gadaEmail.com",
// };

// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//     success: (Response) => console.log(Response),
// });

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

const movies = fetch("http://www.omdbapi.com/?apikey=cdf801c6&s=avengers")
    .then((response) => response.json())
    .then((response) => console.log(response));

// promise
// object yg mempresentasikan keberhasilan / kegagalan sebuah event yg
// asynchronous di masa yg akan datang
// janji (terpenuhi(fullfilled) / ingkar(rejected) / pending)
// callback (resolve / reject / finally)
// aksi (.then (klo terpenuhi) / catch (klo rejected))

// //contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, rejected) => {
//     if (ditepati) {
//         resolve("janji telah di tepati");
//     } else {
//         rejected("ingkar janji");
//     }
// });

// console.log(janji1);

// janji1
//     .then((response) => console.log("oke : " + response))
//     .catch((response) => console.log("not oke : " + response));

//contoh 2
// let ditepati = true;
// const janji1 = new Promise((resolve, rejected) => {
//     if (ditepati) {
//        setTimeout(() => {
//          resolve("janji telah di tepati setelah beberapa waktu");
//        }, 2000);
//     } else {
//        setTimeout(() => {
//             rejected("ingkar janji");
//        }, 2000);
//     }
// });

// console.log('mulai');
// console.log(janji1.then((response) => console.log("oke : " + response)));
// janji1
//     .finally(()=> console.log('selesai menunggu'))
//     .then((response) => console.log("oke : " + response))
//     .catch((response) => console.log("not oke : " + response))

// console.log('selesai');

// promise.all()

// const film = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([
//             {
//                 judul: "avengers",
//                 sutradara: "salem",
//                 pemeran: "milo, cemong",
//             },
//         ]);
//     }, 3000);
// });

// const cuaca = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([
//             {
//                 kota: "Jakarta",
//                 derajat: "20",
//                 Kondisi: "hujan",
//             },
//         ]);
//     }, 500);
// });

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// Promise.all([film, cuaca])
//     // .then((response) => console.log(response))
//     .then((response) => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     });
