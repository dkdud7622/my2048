const startDisplay = document.getElementById("start-display")
const playDisplay = document.getElementById("play-display")
const buttonFour = document.getElementById("four");
const buttonEight = document.getElementById("eight");

let num = 0;

buttonFour.addEventListener('click', (event) => {
    startDisplay.style.display = "none"
    startDisplay.classList.add("hidden");
    playDisplay.classList.remove("hidden");
    num = 4;
})

buttonEight.addEventListener('click', (event) => {
    startDisplay.style.display = "none"
    startDisplay.classList.add("hidden");
    playDisplay.classList.remove("hidden");
    num = 8;
})