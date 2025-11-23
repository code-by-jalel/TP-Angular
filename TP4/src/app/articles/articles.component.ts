import { Component } from '@angular/core';

interface Article {
  id: number;
  titre: string;
  contenu: string;
  importance: 'élevée' | 'moyenne' | 'faible';
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent {
  articles: Article[] = [
    {
      id: 1,
      titre: 'Angular Basics',
      contenu: 'Découvrez les fondamentaux de Angular et comment créer des applications web modernes.',
      importance: 'élevée'
    },
    {
      id: 2,
      titre: 'TypeScript Guide',
      contenu: 'Apprenez TypeScript, le langage de programmation utilisé dans Angular.',
      importance: 'moyenne'
    },
    {
      id: 3,
      titre: 'Components et Templates',
      contenu: 'Explorez comment créer et gérer les composants Angular avec des templates.',
      importance: 'faible'
    }
  ];

  nouveauTitre: string = '';
  nouveauContenu: string = '';
  nouvelleImportance: 'élevée' | 'moyenne' | 'faible' = 'moyenne';

  addArticle(): void {
    if (this.nouveauTitre.trim() && this.nouveauContenu.trim()) {
      const newId = this.articles.length > 0 ? Math.max(...this.articles.map(a => a.id)) + 1 : 1;
      this.articles.push({
        id: newId,
        titre: this.nouveauTitre,
        contenu: this.nouveauContenu,
        importance: this.nouvelleImportance
      });
      this.nouveauTitre = '';
      this.nouveauContenu = '';
      this.nouvelleImportance = 'moyenne';
    }
  }

  deleteArticle(id: number): void {
    this.articles = this.articles.filter(article => article.id !== id);
  }
}
