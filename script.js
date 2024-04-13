let player1Score = 0;
let player2Score = 0;
const player1Score_span = document.getElementById('player1-score');
const player2Score_span = document.getElementById('player2-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
// const reset_div = document.getElementById('re');

function getPlayer1Choice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random( ) * 3);
    return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
     return "Scissors";
}

function win(player2Choice, player1Choice) {
    const smallPlayer2Word = "player2".fontsize(3).sub();
    const smallPlayer1Word = "player1".fontsize(3).sub();
    const player2Choice_div = document.getElementById(player2Choice);
    player2Score++;
    player2Score_span.innerHTML = player2Score;
    player1Score_span.innerHTML = player1Score;
    result_p.innerHTML =` ${convertToWord(player2Choice)}${smallPlayer2Word}   beats  ${convertToWord (player1Choice)}${smallPlayer1Word}. You win!`;
    player2Choice_div.classList.add('green-glow');
    setTimeout(() => player2Choice_div.classList.remove('green-glow'), 300)
}

function lose(player2Choice, player1Choice) {
    const smallPlayer2Word = "player2".fontsize(3);
    const smallPlayer1Word = "player1".fontsize(3);
    const player2Choice_div = document.getElementById(player2Choice);
    player1Score++;
    player2Score_span.innerHTML = player2Score;
    player1Score_span.innerHTML = player1Score;
    result_p.innerHTML =` ${convertToWord(player2Choice)}${smallPlayer2Word}  loses to  ${convertToWord (player1Choice)}${smallPlayer1Word}. You lost!`;
    player2Choice_div.classList.add('red-glow');
    setTimeout(() => player2Choice_div.classList.remove('red-glow'), 300)
}

function draw(player2Choice, player1Choice) {
    const smallPlayer2Word = "player2".fontsize(3);
    const smallPlayer1Word = "player1".fontsize(3);
    const player2Choice_div = document.getElementById(player2Choice);
    result_p.innerHTML =` ${convertToWord(player2Choice)}${smallPlayer2Word}   equals  ${convertToWord (player1Choice)}${smallPlayer1Word}. It's a draw`;
    player2Choice_div.classList.add('grey-glow');
    setTimeout(() => player2Choice_div.classList.remove('grey-glow'), 300)
}

function game(player2Choice) {
    const player1Choice = getPlayer1Choice();
    switch (player2Choice + player1Choice) {
   
        case "rs":
        case "pr":
        case "sp":
            win(player2Choice, player1Choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(player2Choice, player1Choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(player2Choice, player1Choice);
            break;
        case "re":
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
  
    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;
}
console.log('resetScores')

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));

    // reset_div.addEventListener('click', () => game("re"));
}

main()

