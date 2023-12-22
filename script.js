let answer
let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0

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
    
//    for (let i = 0; i < 5; i++) {
//        let playerSelection = prompt("Input your answer: ")
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)

        if (answer == "you win") {
            playerScore++
        } else if (answer == "you lose") {
            computerScore++
        }
        let message = `You answered ${playerSelection} and computer answered ${computerSelection}. Score is ${playerScore} and ${answer} this round!`
        console.log(message)
    }

//}
console.log(game()) 