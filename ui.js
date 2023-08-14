// ui.js
import { quiz } from './quiz.js';

const questionContainer = document.getElementById('question-container');
const feedbackElement = document.getElementById('feedback');
const timerElement = document.getElementById('timer');

function displayQuestion() {
  const currentQuestion = quiz.getCurrentQuestion();
  questionContainer.innerHTML = '';

  const questionElement = document.createElement('h2');
  questionElement.textContent = currentQuestion.questionText;
  questionContainer.appendChild(questionElement);

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('button');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => handleAnswer(option));
    questionContainer.appendChild(optionElement);
  });
}

function handleAnswer(selectedAnswer) {
  const currentQuestion = quiz.getCurrentQuestion();

  if (selectedAnswer === currentQuestion.correctAnswer) {
    quiz.score++;
    displayFeedback(true);
  } else {
    displayFeedback(false);
  }

  quiz.currentQuestionIndex++;

  if (quiz.currentQuestionIndex < quiz.questions.length) {
    displayQuestion();
  } else {
    displayFinalScore();
  }
}

function displayFeedback(isCorrect) {
  feedbackElement.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
}

function displayFinalScore() {
  questionContainer.innerHTML = '';
  const scoreElement = document.createElement('h2');
  scoreElement.textContent = `Your Score: ${quiz.score} / ${quiz.questions.length}`;
  questionContainer.appendChild(scoreElement);
}

// Call the initial display
displayQuestion();
