let answer
let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let divAnswer = document.createElement('div')
const container = document.querySelector('.container')

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let radnomIndex = Math.floor(Math.random() * choices.length)
    let randomChoice = choices[radnomIndex]

    return randomChoice

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        answer = "tie"
        return answer
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        answer = "you lose"
        return answer
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        answer = "you win"
        return answer
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        answer = "you lose"
        return answer
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        answer = "you win"
        return answer
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        answer = "you lose"
        return answer
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        answer = "you win"
        return answer
    }
  }

const buttonRock = document.querySelector('.btn__rock')
const buttonPaper = document.querySelector('.btn__paper')
const buttonScissors = document.querySelector('.btn__scissors')

buttonRock.addEventListener('click', () => {
    playerSelection = 'rock'
    game()
})

buttonPaper.addEventListener('click', () => {
    playerSelection = 'paper'
    game()
})

buttonScissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    game()
})

function game() {
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)

    if (answer == "you win") {
        playerScore++
    } else if (answer == "you lose") {
        computerScore++
    }
    let message = `You answered ${playerSelection} and computer answered ${computerSelection}. Score is ${playerScore} and ${answer} this round!`
    divAnswer.textContent = message
    container.appendChild(divAnswer)

    if (playerScore == 5) {
        divAnswer.textContent = `You Win this round!!! You had 5 and computer had ${computerScore}`
    } else if (computerScore == 5) {
        divAnswer.textContent = `you lose this round... Computer had 5, and you had ${playerScore} `
    }
}