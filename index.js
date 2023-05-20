let rock_div = document.querySelector('.rock')
let paper_div = document.querySelector('.paper')
let scissor_div = document.querySelector('.scissor')
let playerScore_div = document.querySelector('.playerScore')
let compScore_div = document.querySelector('.compScore')
let playerVal = ''
let compVal = ''
let userScore = 0
let compScore = 0

// for displaying result
let winner = document.querySelector('.winner')

// for pop up
let displayer = document.querySelector('.displayer')

function reset(){
    window.location.reload();
    displayer.style.transform = ' translate(-50%,-50%) scale(0)';
}

function win(){
    console.log('player won')
    winner.innerHTML = "Player won"
    userScore++;
    console.log(userScore)
    playerScore_div.innerHTML = userScore;
    if(userScore == 5 || compScore == 5){
        document.querySelector('.matchWinner').innerHTML = "Player Won"
        displayer.style.transform = ' translate(-50%,-50%) scale(1)'
    }
}

function lose(){
    console.log('comp won')
    winner.innerHTML = "Comp won"
    compScore++;
    console.log(compScore)
    compScore_div.innerHTML = compScore;  
    if(compScore == 5 || userScore == 5){
        document.querySelector('.matchWinner').innerHTML = "Comp Won"
        displayer.style.transform = ' translate(-50%,-50%) scale(1)'
    }
}

function game(playerVal){
    if(playerVal == compVal){
        winner.innerHTML = "Match Tied"
    }

    else if(playerVal =='rock' && compVal =='scissor' || playerVal == 'paper' && compVal == 'rock' || playerVal == 'scissor' && compVal == 'paper'){
         win()
    }

    else{
        lose()
    }
}

function compSelection(){
    let num = Math.floor(Math.random()*4)

    if (num == 1 || num == 0) {
        compVal = "rock"
    }

    else if(num == 2){
        compVal = "paper"
    }

     else if(num == 3 || num == 4){
        compVal = "scissor"
     } 
}

 rock_div.addEventListener('click',()=>{
    game('rock')
    compSelection()
 })

 paper_div.addEventListener('click',()=>{
    game('paper')
    compSelection()
 })

 scissor_div.addEventListener('click',()=>{
    game('scissor')
    compSelection()
 })

