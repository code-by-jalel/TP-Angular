import { Component, OnInit } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  reponse: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  questions: Question[] = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique'
    },
    {
      question: 'Quelle est la capitale de l\'Algérie ?',
      options: ['Alger', 'Tunis', 'Tanja'],
      reponse: 'Alger'
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu'
    }
  ];

  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  answered: boolean = false;
  score: number = 0;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption(option: string): void {
    if (!this.answered) {
      this.selectedAnswer = option;
    }
  }

  submitAnswer(): void {
    if (this.selectedAnswer === '') {
      return;
    }

    this.answered = true;

    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].reponse) {
      this.score += 10;
      this.correctAnswers++;
    } else {
      this.score -= 5;
      this.incorrectAnswers++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = '';
      this.answered = false;
    }
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get isQuizComplete(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1 && this.answered;
  }

}
