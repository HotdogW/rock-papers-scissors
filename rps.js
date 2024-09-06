function playerChoice() {
    if (document.getElementById('winCount').innerHTML === "69") {
        document.getElementById('title').innerHTML = "𝓯𝓻𝓮𝓪𝓴𝔂 Rock Paper Scisors";
    }
    else {
        document.getElementById('title').innerHTML = "Rock Paper Scisors";
    }
document.getElementById('rockButton').onclick= function () 
{
   lowerCasePlayerChoice = "rock"
   rps();
}
document.getElementById('paperButton').onclick= function () 
{
   lowerCasePlayerChoice = "paper"
   rps();
}
document.getElementById('scissorsButton').onclick= function () 
{
   lowerCasePlayerChoice = "scissors"
   rps();
}
}
function rps () {
let aiChoice = Math.ceil(Math.random() * 3);
const log = document.getElementById('log');

if (aiChoice === 1) {
    aiChoice = "rock";
}
else if (aiChoice === 2) {
    aiChoice = "paper";
}
else if (aiChoice === 3) {
    aiChoice = "scissors";
}

if (lowerCasePlayerChoice === aiChoice) {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `Draw.`;
    playerChoice();
}
else if (lowerCasePlayerChoice === "rock" && aiChoice === "paper") {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `You Lose!`;
    document.getElementById('winCount').innerHTML = 0;
    playerChoice();
}
else if (lowerCasePlayerChoice === "paper" && aiChoice === "scissors") {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `You Lose!`;
    document.getElementById('winCount').innerHTML = 0;
    playerChoice();
}
else if (lowerCasePlayerChoice === "scissors" && aiChoice === "rock") {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `You Lose!`;
    document.getElementById('winCount').innerHTML = 0;
    playerChoice();
}
else if (lowerCasePlayerChoice === "rock" && aiChoice === "scissors") {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `You Win!`;
    document.getElementById('winCount').innerHTML ++;
    playerChoice();
}
else if (lowerCasePlayerChoice === "paper" && aiChoice === "rock") {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `You Win!`;
    document.getElementById('winCount').innerHTML ++;
    playerChoice();
}
else if (lowerCasePlayerChoice === "scissors" && aiChoice === "paper") {
    document.getElementById('you').innerHTML = `YOU: ${lowerCasePlayerChoice} `
    document.getElementById('ai').innerHTML = `AI: ${aiChoice} `
    document.getElementById('victor').innerHTML = `You Win!`;
    document.getElementById('winCount').innerHTML ++;
    playerChoice();
}
else {
    document.getElementById('you').innerHTML = `error`
    document.getElementById('ai').innerHTML = ``
    document.getElementById('victor').innerHTML = ``;
    playerChoice();
}
if( document.getElementById('victor').innerHTML === `You Win!`) {
    document.getElementById('UX').innerHTML = `>`
}
else if( document.getElementById('victor').innerHTML === `You Lose!`) {
    document.getElementById('UX').innerHTML = `<`
}
else if( document.getElementById('victor').innerHTML === `Draw.`) {
    document.getElementById('UX').innerHTML = `=`
}
};

playerChoice()