const getComputerChoice = function () {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let playerWon = false

    if (playerSelection === computerSelection) {
        return `Tie: both picked ${playerSelection}.`
    }

    switch (playerSelection) {
        case 'rock':
            playerWon = computerSelection === 'scissors'
            break

        case 'paper':
            playerWon = computerSelection === 'rock'
            break

        case 'scissors':
            playerWon = computerSelection === 'paper'
            break
    }

    return playerWon
}

const game = function (playerSelection) {
    let playerScore = 0

    for (let i = 0; i < 5; i++) {
        const result = playRound(playerSelection, getComputerChoice())

        if (result) {
            playerScore++
        }
    }

    document.write(`Your score: ${playerScore}`)
}

game(prompt('Rock, paper, or scissors?'))
