document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = document.querySelector(".grid");
    const scoreDisplay = document.querySelector("#score");
    const resultDisplay = document.querySelector("#result");
    let width = 4;
    let squares = [];
    let score = 0;

    const BLOCK = "block";

    let moveSuccess = 0;


    function createBoard() {
        gridDisplay.style.display = "flex"
        for (let i = 0; i < width * width; i++) {
            square = document.createElement("div");
            square.classList.add(BLOCK);
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
                squares[randomNumber].innerHTML = 4;
            } else {
                squares[randomNumber].innerHTML = 2;
            }
            changeBlock();

        } else {
            generate();
        }
    }


    function moveRight() {
        for (let i = 0; i < width * width; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i + 1].innerHTML;
                let totalThree = squares[i + 2].innerHTML;
                let totalFour = squares[i + 3].innerHTML;

                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                let filteredRow = row.filter(num => num);
                console.log(row);
                console.log(filteredRow);

                let missing = width - filteredRow.length;
                let zeros = Array(missing).fill("");

                let newRow = zeros.concat(filteredRow);
                console.log(newRow);

                if ((squares[i].innerHTML === newRow[0]) && (squares[i + 1].innerHTML === newRow[1]) && (squares[i + 2].innerHTML === newRow[2]) && (squares[i + 3].innerHTML === newRow[3])) {
                    moveSuccess = 0; //움직이지 않은 경우
                } else {
                    moveSuccess = 1; //움직인 경우
                }

                squares[i].innerHTML = newRow[0];
                squares[i + 1].innerHTML = newRow[1];
                squares[i + 2].innerHTML = newRow[2];
                squares[i + 3].innerHTML = newRow[3];
                changeBlock();

            }
        }
    }

    function control(e) {
        if (e.keyCode === 39) {
            keyRight();
        }
    }
    document.addEventListener('keyup', control);

    function keyRight() {
        moveRight();
    }

})