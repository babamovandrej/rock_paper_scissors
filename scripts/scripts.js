class Game {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors'];
        this.computerScore = 0;
        this.humanScore = 0;
    }

    getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        return this.choices[randomNumber];
    }

    getHumanChoice(choice) {
        if (this.choices.includes(choice)) {
            return choice;
        } else {
            return this.choices[0];
        }
    }

    startRound(choice) {
        const computerChoice = this.getComputerChoice();
        const humanChoice = this.getHumanChoice(choice);

        if (computerChoice === humanChoice) {
            return 'It\'s a tie!';
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            this.humanScore++;
            return 'You win!';
        } else {
            this.computerScore++;
            return 'Computer wins!';
        }
    }

    restartGame() {
        this.computerScore = 0;
        this.humanScore = 0;
    }

    isGameOver() {
        return this.humanScore === 5 || this.computerScore === 5;
    }

    getWinner() {
        return this.humanScore === 5 ? 'You Win!' : 'Computer Wins!';
    }
}

const game = new Game();

function startGame(choice) {
    const result = game.startRound(choice);
    updateScores();
    if (game.isGameOver()) {
        showModal();
    }
    return result;
}

function restartGame() {
    game.restartGame();
    updateScores();
    hideModal();
}

function updateScores() {
    document.getElementsByClassName('user-score')[0].innerHTML = game.humanScore;
    document.getElementsByClassName('computer-score')[0].innerHTML = game.computerScore;
}

function showModal() {
    document.getElementsByClassName('game-over-modal')[0].style.display = 'block';
    document.getElementsByClassName('backdrop')[0].style.display = 'block';
    document.getElementsByClassName('winner')[0].innerHTML = game.getWinner();
    disableButtons();
}

function hideModal() {
    document.getElementsByClassName('game-over-modal')[0].style.display = 'none';
    document.getElementsByClassName('backdrop')[0].style.display = 'none';
    enableButtons();
}

function disableButtons() {
    document.querySelectorAll('.btn').forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    document.querySelectorAll('.btn').forEach(button => {
        button.disabled = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('one')[0].addEventListener('click', () => {
        let result = startGame('rock');
        document.getElementsByClassName('round-result')[0].innerHTML = result;
    });

    document.getElementsByClassName('two')[0].addEventListener('click', () => {
        let result = startGame('paper');
        document.getElementsByClassName('round-result')[0].innerHTML = result;
    });

    document.getElementsByClassName('three')[0].addEventListener('click', () => {
        let result = startGame('scissors');
        document.getElementsByClassName('round-result')[0].innerHTML = result;
    });

    document.getElementsByClassName('play-again')[0].addEventListener('click', () => {
        restartGame();
    });

    updateScores();
});