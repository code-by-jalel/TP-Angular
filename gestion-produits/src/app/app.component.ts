import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-produits';
  panierItems: string[] = [];
  
  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }
}
