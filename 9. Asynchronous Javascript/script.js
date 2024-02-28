// console.log("satu");
// setTimeout(() => {
//     console.log("dua");
// }, 0);
// console.log("tiga");

// jd ini yg bakal di jalanin deluan yg tiga baru yg 2 walaupun settimeoutnya 0

const button = document.querySelector("button");

button.addEventListener("click", function onClick() {
    setTimeout(function timer() {
        console.log("You clicked the button!");
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
