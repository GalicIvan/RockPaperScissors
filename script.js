let answer

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let radnomIndex = Math.floor(Math.random() * choices.length)
    let randomChoice = choices[radnomIndex]

    return randomChoice

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection){
        answer = "tie"
        return answer
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        answer = "you lose"
        return answer
    } 
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
        answer = "you win"
        return answer
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        answer = "you lose"
        return answer
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        answer = "you win"
        return answer
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
        answer = "you lose"
        return answer
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        answer = "you win"
        return answer
    }
  }

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input your answer: ")
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)

        if (answer == "you win") {
            score++
        } 
        let message = `You answered ${playerSelection} and computer answered ${computerSelection}. Score is ${score} and ${answer} this round!`
        console.log(message)
    }

}
console.log(game())