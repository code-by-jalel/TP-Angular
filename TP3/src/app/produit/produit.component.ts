import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html'
})
export class ProduitComponent {
  imageUrl: string = '/assets/download.jpeg';
  enStock: boolean = true;

  @Input() nomProduit: string = 'Produit Premium';
  @Input() prix: number = 99.99;
  @Output() ajoutAuPanier = new EventEmitter<string>();

  afficherAlerte(): void {
    this.ajoutAuPanier.emit(this.nomProduit);
    alert('Produit ajouté au panier');
  }

  basculerStock(): void {
    this.enStock = !this.enStock;
  }
}
