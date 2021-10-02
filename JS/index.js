// getting all required element 
let startBtn =document.querySelector(".start-btn button");
let infoBox =document.querySelector(".info-box");
let infoBoxQuitBtn =infoBox.querySelector(".buttons .quit");
let infoBoxContinueBtn =infoBox.querySelector(".buttons .Continue");
let quizBox =document.querySelector(".quiz-box");
let timerSec=quizBox.querySelector("header .timer .timer-sec");
let questionsText =quizBox.querySelector("section .questions-text span");
let options =quizBox.querySelectorAll ("section .option-list .option");
let optionIcon =quizBox.querySelectorAll ("section .option-list .option .icon");
let nextBtn =quizBox.querySelector ("footer .next-btn button");
let QueNumber =quizBox.querySelector (" footer .total-questions span p");
let resultBox =document.querySelector (".result-box");
let score = resultBox.querySelector("score-text span p");
// start and Quit Quiz :
startBtn.onclick = () => {
    infoBox.classList.add("active");
}
infoBoxQuitBtn.onclick = () => {
    infoBox.classList.remove("active");
}
// start quiz :
infoBoxContinueBtn.onclick =() => {
    infoBox.classList.remove("active");
    quizBox.classList.add("active");
}