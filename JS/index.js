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
let score = resultBox.querySelector(".score-text");
let restartBtn =resultBox.querySelector(".buttons .restart");
let quitBtn =resultBox.querySelector(".buttons .quit");
let crossIcon ='<div class="icon cross"><i class="fas fa-times"></i></div>';
let tickIcon ='<div class="icon tick"><i class="fas fa-check"></i></div>';
let queDownCounter =document.querySelector (".timer-sec");
// start and Quit Quiz :
let userMark = 0 ;
let counter=15;
startBtn.onclick = () => {
    userMark = 0 ;
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
    counter=16;
}
// next button :
nextBtn.onclick = () => {
    if (queCounter<questions.length-1){
    queCounter++;
    showQuistions(queCounter);
    counter=16;
    }else if (queCounter==questions.length-1){
       showResult(); 
    }
}
// restart button :
restartBtn.onclick = () => {
    userMark = 0 ;
    infoBox.classList.add("active");
    resultBox.classList.remove('active');
    queCounter=0;
}
// quit button :
quitBtn.onclick = () => {
    userMark = 0 ;
    resultBox.classList.remove('active');
    queCounter=0;
}
var downCounter;
startCounter( );
function startCounter( ) {
    downCounter =setInterval(() => {
        counter-- ;
        if (counter>-1){
            queDownCounter.innerHTML = counter ;
        }if (counter==0) {
            nextBtn.classList.add("active");
            let correctAns = questions[queCounter].answer;
            let opt = options.querySelectorAll(".option");
            for (let i=0 ; i<opt.length ; i++) {
                opt[i].classList.add("disabled");
                if (opt[i].textContent == correctAns ){
                    if ( !opt[i].classList.contains("correct")){
                        opt[i].classList.add("correct");
                        opt[i].insertAdjacentHTML("beforeend",tickIcon);
                    }
                }
            }
        }
    }, 1000);
}
function showResult () {
    resultBox.classList.add('active');
    quizBox.classList.remove('active');
    let scoreTextTag="";
    if ( userMark<5 ){
        scoreTextTag = "<span> Sorry you got only <p>"+userMark +"</p> out of <p>"+questions.length +"</p></span>"
    }else if (userMark<7){
        scoreTextTag = "<span> Good! , you got <p>"+userMark +"</p> out of <p>"+questions.length +"</p></span>"
    }else {
        scoreTextTag = "<span> Very Good! , you got <p>"+userMark +"</p> out of <p>"+questions.length +"</p></span>"
    }
    score.innerHTML=scoreTextTag;
}
function showQuistions(index) {
    nextBtn.classList.remove("active");
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
    counter=0;
    let uerAns = answer.textContent;
    let correctAns = questions[queCounter].answer;
    if (uerAns===correctAns){
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
        userMark++;
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
    nextBtn.classList.add("active");
}
// no one can reload the page ! 
window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = '';
  });