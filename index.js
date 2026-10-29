
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");
const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset-btn");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === null) {
        msg.innerText = `Draw! Both chose ${userChoice}`;
        msg.style.backgroundColor = "#d97706";
    } else if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#15803d";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#dc2626";
    }
};

const playGame = (userChoice) => {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        showWinner(null, userChoice, compChoice);
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }

        showWinner(userWin, userChoice, compChoice);
    }

    choices.forEach((choice) => {
        choice.classList.remove("selected");
    });

    document.getElementById(userChoice).classList.add("selected");
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    msg.innerText = "Play Your Move!";
    msg.style.backgroundColor = "#081b31";

    choices.forEach((choice) => {
        choice.classList.remove("selected");
    });
});
