import { Component, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit, AfterViewInit {
  @Input() book: Book | null = null;
  @Input() categories: string[] = [];
  @Output() saveBook = new EventEmitter<Book>();
  @Output() cancelForm = new EventEmitter<void>();
  @ViewChild('bookForm') bookForm!: NgForm;

  formData: Book = new Book(0, '', '', '', '', '', '', true);

  ngOnInit(): void {
    if (this.book) {
      this.formData = { ...this.book };
    } else {
      this.formData = new Book(0, '', '', '', '', '', '', true);
    }
  }

  ngAfterViewInit(): void {
    if (this.bookForm && this.book) {
      this.bookForm.resetForm(this.formData);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.saveBook.emit(this.formData);
      form.resetForm();
    }
  }

  onCancel(): void {
    this.cancelForm.emit();
  }

  isOnlyNumbers(str: string): boolean {
    return /^\d+$/.test(str);
  }
}
