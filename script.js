let userScore = 0
let computerScore = 0
const rock = document.getElementById('rockInput')
const paper = document.getElementById('paperInput')
const scissors = document.getElementById('scissorsInput')
const score = document.getElementById('scoreNumbers')
const computerChoice = document.getElementById('computerChoice')
const end = document.getElementById('end')
rock.onclick = () => playRound(getComputerChoice(), 'ROCK');
paper.onclick = () => playRound(getComputerChoice(), 'PAPER');
scissors.onclick = () => playRound(getComputerChoice(), 'SCISSORS');
let result;
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    if(randomNumber == 0){
        return 'ROCK'
    }else if(randomNumber == 1){
        return 'PAPER'
    }else{
        return 'SCISSORS'
    }
}
function playRound (computerSelection, playerSelection){
    if(userScore == 5 || computerScore == 5){
        userScore = 0
        computerScore = 0
        end.style.visibility = 'hidden'
    }
    let roundText;
    let computer = computerSelection
    let player = playerSelection
    if(computer == player){
        roundText = 'Draw!'
    }else if(computer == 'PAPER' && player == 'SCISSORS'){
        userScore++;
        roundText = 'Player wins!'
    }else if(computer == 'ROCK' && player == 'PAPER'){
        userScore++;
        roundText = 'Player wins!'
    }else if(computer == 'SCISSORS' && player == 'ROCK'){
        userScore++;
        roundText = 'Player wins!'
    }else{
        computerScore++;
        roundText = 'Computer wins!'
    }
    if(userScore == 5 || computerScore == 5){
        end.style.visibility = 'visible'
    }
    computerChoice.innerText = `Computer's choice: ${computer}`
    score.innerText = `${userScore} - ${computerScore}. ${roundText}`   
}

