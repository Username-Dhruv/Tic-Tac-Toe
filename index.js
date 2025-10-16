let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let message = document.querySelector(".winMsg");
let newGameBttn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");

let player0 = true;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    player0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0) {
            box.innerText = "O";
            player0 = false;
        }
        else {
            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const disableBoxes = () => {
    for(let box in boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box in boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    message.innerText = "Congratulations " + winner + " has won!!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWin = () => {
    for(let pattern of winningCombos) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("WINNER", pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameBttn.addEventListener("Click", resetGame);
resetBtn.addEventListener("Click", resetGame);