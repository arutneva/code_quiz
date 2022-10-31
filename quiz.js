/*
1. display start page
    a. title
    b. paragraph
    c. start button

2. timer starts when start button is clicked, 
2a. initial page will be hidden, 
2b. quiz page starts and shows question plus four answer buttons, 
2c. when you click one show correct or wrong, deduct time based on answer by fifteen seconds when wrong

3. once all questions are answered, timer stops and the time left becomes your score, you'll be presented with a score page and input initials + submit button

4. show scoreboard of all high scores



*/

var introductionEL = document.querySelector("#introduction")
var questionsEL = document.querySelector("#questions")
var timerEL = document.querySelector("#timer")
var titleEl = document.querySelector("#title")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var answer5El = document.querySelector("#answer5")
var beginBtn = document.querySelector("#begin")

var question = [
    {
        title: "What language is used to style HTML?",
        answers: ["Javascript", "Roller", "Express", "CSS"],
        solution: "CSS"
    },
    {
        title: "Which of the following is a common CSS library?",
        answers: ["Roller", "Bootstrap", "Submarine", "Tireswing"],
        solution: "Bootstrap"
    },
    {
        title: "We arrived at intermission, here's a correct answer!",
        answers: ["Correct", "Wrong", "Wrong", "Wrong"],
        solution: "Correct"
    },
    {
        title: "What does CDN stand for?",
        answers: ["Comfy Date Night", "Content Drive Network", "Crossover Desktop Network", "Content Delivery Network"],
        solution: "Content Delivery Network"
    },
    {
        title: "Last one is easy, click the first answer.",
        answers: ["You made it!", "Quizzes suck", "I had fun", "Let's do it again!"],
        solution: "You made it!"
    },
]



var timeLeft = 75
var clock


function count() {
    timerEL.textContent = timeLeft
    timeLeft--
}


function startQuestions() {
    questionsEL.classList.remove("hidden")
    introductionEL.classList.add("hidden")
    clock = setInterval(count, 1000)
    displayQuestion()
}

function displayQuestion() {
    titleEl.textContent = question[i].title
    answer1El.textContent = question[i].answers[0]
    answer2El.textContent = question[i].answers[1]
    answer3El.textContent = question[i].answers[2]
    answer4El.textContent = question[i].answers[3]
    answer5El.textContent = question[i].answers[4]
}

function next() {
    index++
}

answer1El.addEventListener("click", next)
answer2El.addEventListener("click", next)
answer3El.addEventListener("click", next)
answer4El.addEventListener("click", next)
answer5El.addEventListener("click", next)


beginBtn.addEventListener("click", startQuestions)