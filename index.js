function getComputerChoice(array){
    var randomComputerChoice = [Math.floor(Math.random()*array.length)];
    var computerSelect = array[randomComputerChoice];
    return computerSelect;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Tie!!")
    }

    else if(playerSelection == "rock" && computerSelection=="paper"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    }

    else if(playerSelection == "rock" && computerSelection=="scissors"){
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
    }

    else if(playerSelection == "paper" && computerSelection=="rock"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    }

    else if(playerSelection == "paper" && computerSelection=="scissors"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    }

    else if(playerSelection == "scissors" && computerSelection=="paper"){
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
    }

    else if(playerSelection == "scissors" && computerSelection=="rock"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    }

    else{
        console.log("Error!")
    }
}

var computerChoiceList = ["rock", "paper", "scissors"];
var computerChoice = getComputerChoice(computerChoiceList)

const playerChoice = "rock"; 

console.log(playRound(playerChoice, computerChoice))