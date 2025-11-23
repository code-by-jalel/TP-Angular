import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  reponse: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  @Input() question: Question | null = null;
  @Input() selectedAnswer: string = '';
  @Input() answered: boolean = false;

  @Output() optionSelected = new EventEmitter<string>();

  selectOption(option: string): void {
    if (!this.answered) {
      this.optionSelected.emit(option);
    }
  }

}
