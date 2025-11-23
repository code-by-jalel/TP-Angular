import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html'
})
export class PanierComponent {
  nombreArticles: number = 0;
  articlesPanier: string[] = [];

  ajouterAuPanier(nomProduit: string): void {
    this.articlesPanier.push(nomProduit);
    this.nombreArticles++;
  }

  retirerDuPanier(index: number): void {
    this.articlesPanier.splice(index, 1);
    this.nombreArticles--;
  }

  viderPanier(): void {
    this.articlesPanier = [];
    this.nombreArticles = 0;
  }
}
