import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.component.html'
})
export class BookContainerComponent {
  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  books: Book[] = [
    new Book(
      1,
      'Angular Mastery',
      'Jaleleddine ben romdhane',
      'benromdhanejaleleddine@gmail.com',
      '21234567',
      '2023-01-15',
      'Informatique',
      true,
      25
    ),
    new Book(
      2,
      'TypeScript Guide',
      'Bayrem kahna',
      'bayremkahna@gmail.com',
      '21234568',
      '2022-06-20',
      'Informatique',
      true,
      30
    ),
    new Book(
      3,
      'World History',
      'Zayd hefyen',
      'zaydhefyen@gmail.com',
      '21234569',
      '2024-03-10',
      'Histoire',
      false,
      0
    )
  ];

  selectedBook: Book | null = null;
  isFormVisible: boolean = false;
  searchTerm: string = '';
  sortBy: string = 'none';

  onAddBook(): void {
    this.selectedBook = null;
    this.isFormVisible = true;
  }

  onEditBook(book: Book): void {
    this.selectedBook = book;
    this.isFormVisible = true;
  }

  onDeleteBook(bookId: number): void {
    this.books = this.books.filter(book => book.id !== bookId);
  }

  onSaveBook(book: Book): void {
    if (this.selectedBook) {
      const index = this.books.findIndex(b => b.id === book.id);
      if (index !== -1) {
        this.books[index] = book;
      }
    } else {
      if (this.books.length > 0) {
        book.id = Math.max(...this.books.map(b => b.id)) + 1;
      } else {
        book.id = 1;
      }
      this.books.push(book);
    }
    this.isFormVisible = false;
    this.selectedBook = null;
  }

  onCancelForm(): void {
    this.isFormVisible = false;
    this.selectedBook = null;
  }

  getFilteredBooks(): Book[] {
    let filtered = this.books;

    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower)
      );
    }

    if (this.sortBy === 'category') {
      filtered = [...filtered].sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'availability') {
      filtered = [...filtered].sort((a, b) => (b.isAvailable ? 1 : 0) - (a.isAvailable ? 1 : 0));
    }
    return filtered;
  }

  getTotalBooks(): number {
    return this.books.length;
  }
}
