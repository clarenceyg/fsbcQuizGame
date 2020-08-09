const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarfull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which of the following is FALSE about arrays on Java',
        choice1: 'A java array is always an object',
        choice2: 'Length of array can be changed after creation of array',
        choice3: 'Arrays in Java are always allocated on heap',
        choice4: 'A and B but not C',
        answer: 2,
    },
    {
        question: 'What is the HTML tag under which one can write the JavaScript code?',
        choice1: '<javascript>',
        choice2: '<scripted>',
        choice3: '<script>',
        choice4: '<js>',
        answer: 3,
    },
    {
        question: 'Which of the following is the correct syntax to display “Keep On Swimming” in an alert box using JavaScript?',
        choice1: 'alertbox(“Keep On Swimming”);',
        choice2: 'msg(“Keep On Swimming”);',
        choice3: 'msgbox(“Keep On Swimming”);',
        choice4: 'alert(“Keep On Swimming”);',
        answer: 4,
    },
    {
        question: 'What is the correct syntax for referring to an external script called “quizgame.js”?',
        choice1: '<script src=”geek.js”>',
        choice2: '<script href=”geek.js”>',
        choice3: '<script ref=”geek.js”>',
        choice4: '<script name=”geek.js”>',
        answer: 1,
    },
]