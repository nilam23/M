var pl1Button = document.querySelector("#p1");
var pl2Button = document.querySelector("#p2");
var reset = document.querySelector("#res");
var input = document.getElementsByTagName("input")[0];
var totalGames = document.querySelector("h4 span");
var pl1Score = document.querySelector("#p1Score");
var pl2Score = document.querySelector("#p2Score");

var score1 = 0;
var score2 = 0;

var isOver = false;
var totalScore = 5;

input.addEventListener("change", function(){
    totalGames.textContent = Number(input.value);
    totalScore = Number(input.value);
    resetAll();
})

pl1Button.addEventListener("click", function(){
    if(!isOver){
        score1++;
        pl1Score.innerHTML = score1;
        if(score1 === totalScore){
            isOver = true;
            pl1Score.classList.add("change-color");
            setTimeout(function(){
                alert("Player 1 won. Congrats!");
            }, 200);
        }
    }
});

pl2Button.addEventListener("click", function(){
    if(!isOver){
        score2++;
        pl2Score.innerHTML = score2;
        if(score2 === totalScore){
            isOver = true;
            pl2Score.classList.add("change-color");
            setTimeout(function(){
                alert("Player 2 won. Congrats!");
            }, 200);
        }
    }
});

reset.addEventListener("click", function(){
    resetAll();
});

function resetAll(){
    score1 = 0;
    score2 = 0;
    isOver = false;
    pl1Score.innerHTML = score1;
    pl2Score.innerHTML = score2;
    pl1Score.classList.remove("change-color");
    pl2Score.classList.remove("change-color");
}