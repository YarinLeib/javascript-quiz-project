class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions; // should receive array
    this.timeLimit = timeLimit; // should receive mumber
    this.timeRemaining = timeRemaining; //should receive number
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      this.currentQuestionIndex === this.questions;
      return true;
    }
  }
  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3)
      return;
    this.questions = this.questions.filter(
      (questions) => questions.difficulty === difficulty
    );
  }

  averageDifficulty() {
    if (this.questions.length === 0) return null;
    const totalDifficulty = this.questions.reduce((acc, question) => {
      if (typeof question.difficulty === "number") {
        return acc + question.difficulty;
      }
      return acc;
    }, 0);
    return totalDifficulty / this.questions.length;
  }
}

