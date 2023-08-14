// ui.js

import { quiz } from './quiz.js';

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('timer');
let timerInterval;

function displayQuestion() {
  const currentQuestion = quiz.getCurrentQuestion();
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.addEventListener('click', () => handleAnswerClick(index));
    optionsElement.appendChild(optionButton);
  });

  startTimer(30); // Start a new timer for each question
}

function startTimer(seconds) {
  let timeLeft = seconds;
  timerInterval = setInterval(() => {
    timerElement.textContent = `Time: ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      handleAnswerClick(-1); // Mark question as unanswered
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerElement.textContent = '';
}

function handleAnswerClick(selectedIndex) {
  resetTimer(); // Reset the timer for the next question

  const currentQuestion = quiz.getCurrentQuestion();

  if (selectedIndex === -1) {
    // User ran out of time
    // Show timeout feedback
  } else if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
    quiz.score++;
    // Show correct feedback
  } else {
    // Show incorrect feedback
  }

  quiz.currentQuestionIndex++;
  if (quiz.currentQuestionIndex < quiz.questions.length) {
    displayQuestion();
  } else {
    // Call a function to display final score and restart option
  }
}

// Call displayQuestion() to show the first question
displayQuestion();
