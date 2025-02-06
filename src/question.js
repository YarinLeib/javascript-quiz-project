class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text; //should receive string
    this.choices = choices; // should receive array of strings
    this.answer = answer; // should receice stirng
    this.difficulty = difficulty; // should receive number
  }
  shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
    }
  }
}
