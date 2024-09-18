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
            console.log("It's a tie!");
            return 'It\'s a tie!';
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            this.humanScore++;
            console.log("Human wins this round!");
            return 'Human wins this round!';
        } else {
            this.computerScore++;
            console.log("Computer wins this round!");
            return 'Computer wins this round!';
        }
    }
}

const game = new Game();

function startGame(choice) {
    const result = game.startRound(choice);
    alert(result);
    console.log(`Human Score: ${game.humanScore}, Computer Score: ${game.computerScore}`);
}