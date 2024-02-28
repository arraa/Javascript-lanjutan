//ambil semua element video
const video = Array.from(document.querySelectorAll("[data-duration]"));

// filter yg javascript lanjutan
// ambil durasi masing" video
// ubah durasi menjadi int, ubah menit jd detik
// jumlahin semua detik
// menggunakan metode chaining
let jsLanjutan = video
    .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
    .map((data) => data.dataset.duration)
    .map((waktu) => {
        const split = waktu.split(":").map((split) => parseInt(split));
        return split[0] * 60 + split[1];
    })
    .reduce((acc, curr) => acc + curr);

// ubah ke menit
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan ke dom buat di tampilin
const pDurasi = document.querySelector(".total-durasi");

pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlhVideo = video.filter((video) =>
    video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pTotalVideo = document.querySelector(".jumlah-video");

pTotalVideo.textContent = `${jmlhVideo} Video`;

