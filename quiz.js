// quiz.js
export class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  }
  
  // Sample questions
  const sampleQuestions = [
    {
      questionText: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      questionText: "Which planet is closest to the sun?",
      options: ["Earth", "Venus", "Mars", "Mercury"],
      correctAnswer: "Mercury"
    },
    // Add more sample questions
  ];
  
  export const quiz = new Quiz(sampleQuestions);
  