document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = document.querySelector(".grid");
    const scocreDisplay = document.querySelector("#score");
    const resultDisplay = document.querySelector("#result");
    let width = 4;
    console.log(width);
    let squares = [];
    let score = 0;

    const BLOCK_NONE = "block-none";
    const TWO = "two";
    const FOUR = "four"


    function createBoard() {
        gridDisplay.style.display = "flex"
        for (let i = 0; i < width * width; i++) {
            square = document.createElement("div");
            square.classList.add(BLOCK_NONE);
            square.innerHTML = "";

            gridDisplay.appendChild(square);
            squares.push(square);
        }
        generate();
        generate();
    }
    createBoard();

    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length);
        if (squares[randomNumber].innerHTML === "") {
            let ran = Math.floor(Math.random() * 10)
            if (ran < 2) {
                squares[randomNumber].classList.remove(BLOCK_NONE);
                squares[randomNumber].classList.add(FOUR)
                squares[randomNumber].innerHTML = 4;
            } else {
                squares[randomNumber].classList.remove(BLOCK_NONE);
                squares[randomNumber].classList.add(TWO)
                squares[randomNumber].innerHTML = 2;
            }
        } else {
            generate()
        }
    }
})