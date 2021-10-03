// getting all required element 
let startBtn =document.querySelector(".start-btn button");
let infoBox =document.querySelector(".info-box");
let infoBoxQuitBtn =infoBox.querySelector(".buttons .quit");
let infoBoxContinueBtn =infoBox.querySelector(".buttons .Continue");
let quizBox =document.querySelector(".quiz-box");
let timerSec=quizBox.querySelector("header .timer .timer-sec");
let questionsText =quizBox.querySelector("section .questions-text");
let options =quizBox.querySelector ("section .option-list");
let optionIcon =quizBox.querySelectorAll ("section .option-list .option .icon");
let nextBtn =quizBox.querySelector ("footer .next-btn");
let QueNumber =quizBox.querySelector (" footer .total-questions");
let resultBox =document.querySelector (".result-box");
let score = resultBox.querySelector("score-text span p");
let crossIcon ='<div class="icon cross"><i class="fas fa-times"></i></div>';
let tickIcon ='<div class="icon tick"><i class="fas fa-check"></i></div>';
// start and Quit Quiz :
startBtn.onclick = () => {
    infoBox.classList.add("active");
}
infoBoxQuitBtn.onclick = () => {
    infoBox.classList.remove("active");
}
let queCounter = 0 ;
// start quiz :
infoBoxContinueBtn.onclick =() => {
    infoBox.classList.remove("active");
    quizBox.classList.add("active");
    showQuistions(queCounter);
}
// next button :
nextBtn.onclick = () => {
    if (queCounter<questions.length-1){
    queCounter++;
    showQuistions(queCounter);
    }
}
function showQuistions(index) {
    let quistionTag ="<span>"+questions[index].num + " ."+ questions[index].ques +"</span>";
    let optionTag ="<div class='option'><span>"+ questions[index].quesOptions[0] +"</span></div>"
                 + "<div class='option'><span>"+ questions[index].quesOptions[1] +"</span></div>"
                 + "<div class='option'><span>"+ questions[index].quesOptions[2] +"</span></div>"
                 + "<div class='option'><span>"+ questions[index].quesOptions[3] +"</span></div>";
    let quistionNumberTag = "<span>"+questions[index].num + " of "+ questions.length + " questions" +"</span>";
    questionsText.innerHTML = quistionTag ;
    options.innerHTML = optionTag ;
    QueNumber.innerHTML =quistionNumberTag;
    // adding atttibute to all option :
    let opt = options.querySelectorAll(".option");
    for (let i=0 ;i<opt.length; i++) {
        opt[i].setAttribute("onclick","optionSellected(this)");
    }
}
function optionSellected (answer) {
    let uerAns = answer.textContent;
    let correctAns = questions[queCounter].answer;
    if (uerAns===correctAns){
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else {
        answer.classList.add("wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);
    }
    // once user selescted disabled all options and  show the right answer :
    let opt = options.querySelectorAll(".option");
    for (let i=0 ; i<opt.length ; i++) {
        opt[i].classList.add("disabled");
        if (opt[i].textContent == correctAns && uerAns!==correctAns ){
            opt[i].classList.add("correct");
            opt[i].insertAdjacentHTML("beforeend",tickIcon);
        }
    }
}
