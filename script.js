let check = document.querySelector(".check");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let inre = document.querySelector(".inre");
let k = document.querySelector("#k");
let j = document.querySelector("#j");

let count = 0;
const rnd = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let rndn = rnd(1, 100);
const showalert = () => {
    result.style.display = "flex";
};

const bt = () => {
    let ok = inre.querySelector(".ok");
    ok.addEventListener("click", () => {
        result.style.display = "none";
        input.value = "";
    });
};

check.addEventListener("click", () => {

    let num = Number(input.value);

    if (num > 100 || num < 1) {
        inre.innerHTML = `<p class="warning">Enter number between 1–100</p><button class="ok">Ok</button>`;
        bt();
        showalert();
        return;
    }

    count++;
    j.textContent = count;

    if (num > rndn) {
        k.textContent = "Smaller";
    } 
    else if (num < rndn) {
        k.textContent = "Greater";
    } 
    else {
        inre.innerHTML = `<p class="warning">Congrats! You win</p><button class="ok">New Game</button>`;
        bt();
        showalert();
        j.textContent=0;
        k.textContent="";
        rndn=rnd(1,100)
    }
});
