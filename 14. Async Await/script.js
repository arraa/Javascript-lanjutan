// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("selesai");
//     }, 2000);
// });

//dia bakal pending krna dia bakal langsung nge console
// console.log(coba)

// klo gamau jd pending bsia pakai then
// coba.then(() => console.log(coba));

//untuk ngerapin asyn await hrus pakai function

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve("selesai");
            }, waktu);
        } else {
            reject("gagal");
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

// setelah itu buat function untuk nge async nya
// try catch untuk error nya di async await
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.log(error)
    }
}

cobaAsync();
