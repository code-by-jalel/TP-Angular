import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() deleteBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<Book>();

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }

  onDelete(bookId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre?')) {
      this.deleteBook.emit(bookId);
    }
  }

  getAvailabilityText(isAvailable: boolean): string {
    return isAvailable ? 'Disponible' : 'Non disponible';
  }
}
