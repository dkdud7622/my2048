document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = document.querySelector(".grid");
    const scoreDisplay = document.querySelector("#score");
    const resultDisplay = document.querySelector("#result");
    let width = 4;
    let squares = [];
    let move = [];
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
        document.addEventListener('keyup', control);
    }
    createBoard();

    function changeBlock() {
        for (let i = 0; i < width * width; i++) {
            if (squares[i].innerHTML === "") {
                squares[i].style.backgroundColor = "#CCC0B4";
            }
            if (squares[i].innerHTML === "2") {
                squares[i].style.backgroundColor = "#EEE4DA";
                squares[i].style.color = "#4E4E4E";
            }
            if (squares[i].innerHTML === "4") {
                squares[i].style.backgroundColor = "#EBDCC0";
                squares[i].style.color = "#4E4E4E";
            }
            if (squares[i].innerHTML === "8") {
                squares[i].style.backgroundColor = "#F3B27A";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "16") {
                squares[i].style.backgroundColor = "#EF9B50";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "32") {
                squares[i].style.backgroundColor = "#F28560";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "64") {
                squares[i].style.backgroundColor = "#FF7145";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "128") {
                squares[i].style.backgroundColor = "#F9D673";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "256") {
                squares[i].style.backgroundColor = "#FBD76A";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "512") {
                squares[i].style.backgroundColor = "#FACE4B";
                squares[i].style.color = "#ffffff";
            }
            if (squares[i].innerHTML === "1024") {
                squares[i].style.backgroundColor = "#F9C138";
                squares[i].style.color = "#ffffff";
            }

        }
    }

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
                let missing = width - filteredRow.length;
                let zeros = Array(missing).fill("");

                let newRow = zeros.concat(filteredRow);

                if ((squares[i].innerHTML === String(newRow[0])) && (squares[i + 1].innerHTML === String(newRow[1])) && (squares[i + 2].innerHTML === String(newRow[2])) && (squares[i + 3].innerHTML === String(newRow[3]))) {
                    //움직이지 않은 경우
                } else {
                    moveSuccess += 1; //움직인 경우
                }

                squares[i].innerHTML = newRow[0];
                squares[i + 1].innerHTML = newRow[1];
                squares[i + 2].innerHTML = newRow[2];
                squares[i + 3].innerHTML = newRow[3];
                changeBlock();

            }
        }
    }

    function moveLeft() {
        for (let i = 0; i < width * width; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i + 1].innerHTML;
                let totalThree = squares[i + 2].innerHTML;
                let totalFour = squares[i + 3].innerHTML;

                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                let filteredRow = row.filter(num => num);

                let missing = width - filteredRow.length;
                let zeros = Array(missing).fill("");

                let newRow = filteredRow.concat(zeros);

                if ((squares[i].innerHTML === String(newRow[0])) && (squares[i + 1].innerHTML === String(newRow[1])) && (squares[i + 2].innerHTML === String(newRow[2])) && (squares[i + 3].innerHTML === String(newRow[3]))) {
                    //움직이지 않은 경우
                } else {
                    moveSuccess += 1; //움직인 경우
                }

                squares[i].innerHTML = newRow[0];
                squares[i + 1].innerHTML = newRow[1];
                squares[i + 2].innerHTML = newRow[2];
                squares[i + 3].innerHTML = newRow[3];
                changeBlock();

            }
        }
    }

    function moveDown() {
        //가로줄을 기준으로 세로줄 추출. 한번 돌 때 마다 1 2 3 4 < 이 각각의 세로줄의 배열 추출
        for (let i = 0; i < width; i++) {
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i + width].innerHTML;
            let totalThree = squares[i + (width * 2)].innerHTML;
            let totalFour = squares[i + (width * 3)].innerHTML;
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

            let filteredColumn = column.filter(num => num);
            let missing = width - filteredColumn.length;
            let zeros = Array(missing).fill("");
            let newCoulmn = zeros.concat(filteredColumn);

            if ((squares[i].innerHTML === String(newCoulmn[0])) && (squares[i + width].innerHTML === String(newCoulmn[1])) && (squares[i + width * 2].innerHTML === String(newCoulmn[2])) && (squares[i + width * 3].innerHTML === String(newCoulmn[3]))) {
                //움직이지 않은 경우
            } else {
                moveSuccess += 1; //움직인 경우
            }

            squares[i].innerHTML = newCoulmn[0];
            squares[i + width].innerHTML = newCoulmn[1];
            squares[i + width * 2].innerHTML = newCoulmn[2];
            squares[i + width * 3].innerHTML = newCoulmn[3];
            changeBlock();
        }
    }

    function moveUp() {
        //가로줄을 기준으로 세로줄 추출. 한번 돌 때 마다 1 2 3 4 < 이 각각의 세로줄의 배열 추출
        for (let i = 0; i < width; i++) {
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i + width].innerHTML;
            let totalThree = squares[i + (width * 2)].innerHTML;
            let totalFour = squares[i + (width * 3)].innerHTML;
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

            let filteredColumn = column.filter(num => num);
            let missing = width - filteredColumn.length;
            let zeros = Array(missing).fill("");
            let newCoulmn = filteredColumn.concat(zeros);

            if ((squares[i].innerHTML === String(newCoulmn[0])) && (squares[i + width].innerHTML === String(newCoulmn[1])) && (squares[i + width * 2].innerHTML === String(newCoulmn[2])) && (squares[i + width * 3].innerHTML === String(newCoulmn[3]))) {
                //움직이지 않은 경우
            } else {
                moveSuccess += 1; //움직인 경우
            }

            squares[i].innerHTML = newCoulmn[0];
            squares[i + width].innerHTML = newCoulmn[1];
            squares[i + width * 2].innerHTML = newCoulmn[2];
            squares[i + width * 3].innerHTML = newCoulmn[3];
            changeBlock();
        }
    }


    function combineRowRight() {
        for (let i = 0; i < width * width - 1; i++) {
            let tm = (i + 1) % 4
            console.log(tm);
            if (squares[i].innerHTML === squares[i + 1].innerHTML && tm !== 0 && squares[i].innerHTML !== "") {
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
                squares[i].innerHTML = "";
                squares[i + 1].innerHTML = combineTotal;
                moveSuccess += 1;
            }
        }
    }

    function combineRowLeft() {
        for (let i = 0; i < width * width - 1; i++) {
            let tm = (i + 1) % 4
            if (squares[i].innerHTML === squares[i + 1].innerHTML && tm > 0 && squares[i].innerHTML !== "") {
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
                squares[i].innerHTML = combineTotal;;
                squares[i + 1].innerHTML = "";
                moveSuccess += 1;
            }
        }
    }

    function combineColumnUp() {
        for (let i = 0; i < (width * width) - width; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML && squares[i].innerHTML !== "") {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i + width].innerHTML = "";
                moveSuccess += 1;
            }
        }
    }

    function combineColumnDown() {
        for (let i = 0; i < (width * width) - width; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML && squares[i].innerHTML !== "") {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
                squares[i].innerHTML = "";
                squares[i + width].innerHTML = combinedTotal;
                moveSuccess += 1;
            }
        }
    }



    function control(e) {
        if (e.keyCode === 39) {
            keyRight();
        } else if (e.keyCode === 37) {
            keyLeft();
        } else if (e.keyCode === 38) {
            keyUp();
        } else if (e.keyCode === 40) {
            keyDown();
        }
    }


    function keyRight() {
        moveSuccess = 0;
        moveRight();
        combineRowRight();
        if (moveSuccess > 0) {
            generate();
        }
        moveRight();
        moveSuccess = 0;
    }

    function keyLeft() {
        moveSuccess = 0;
        moveLeft();
        combineRowLeft()
        if (moveSuccess > 0) {
            generate();
        }
        moveLeft();
        moveSuccess = 0;
    }

    function keyDown() {
        moveSuccess = 0;
        moveDown();
        combineColumnDown();
        if (moveSuccess > 0) {
            generate();
        }
        moveDown();
        moveSuccess = 0;
    }

    function keyUp() {
        moveSuccess = 0;
        moveUp();
        combineColumnUp();
        if (moveSuccess > 0) {
            generate();
        }
        moveUp();
        moveSuccess = 0;
    }


})