
const reset = document.getElementById('reset')
const guess = document.getElementById('guess')
const input = document.getElementById('num')
const guesses = document.getElementById('guesses')
const gameHead = document.getElementById('gameHead')
const subHead = document.getElementById('subHead')
let guessCount=0
let hiddenNum=0

function startGame() {
    hiddenNum= Math.floor(Math.random()*100) +1
    console.log("hiddenNum", hiddenNum)
}

function checkGuess() {
    let guessIn = input.value
    console.log("Test",guessIn)
    // guesses.firstElementChild.innerHTML= guessIn
    guesses.children[guessCount].innerHTML=guessIn
    guessCount+=1

    if (guessCount>=5) {
        gameHead.innerHTML='You Lose'
        subHead.innerHTML='Press Reset to try again'
    }
    else {
        if(guessIn===hiddenNum){
            gameHead.innerHTML='You Win'
            subHead.innerHTML='Press Reset to try again'
        }
        if(guessIn<hiddenNum){
            gameHead.innerHTML='Too Low'
            if(hiddenNum-guessIn>30){
                subHead.innerHTML='Your Cold'
            }
            if (hiddenNum-guessIn>10 && hiddenNum-guessIn<30){
                subHead.innerHTML='Your Warm'
            }
            if (hiddenNum-guessIn<10){
                subHead.innerHTML='Your Hot'
            }
        }
        if(guessIn>hiddenNum){
            gameHead.innerHTML='Too High'
            if(guessIn-hiddenNum>30){
                subHead.innerHTML='Your Cold'
            }
            if (guessIn-hiddenNum>10 && guessIn-hiddenNum<30){
                subHead.innerHTML='Your Warm'
            }
            if (guessIn-hiddenNum<10){
                subHead.innerHTML='Your Hot'
            }
        }
    }
    
}

function resetGame () {
    guessCount=0
    for (let i=0; i<5;i++) {
        guesses.children[i].innerHTML = '-'
    }
    startGame()
}

reset.addEventListener('click', resetGame)
guess.addEventListener('click', checkGuess)

window.onload= function() {
    startGame()
}

