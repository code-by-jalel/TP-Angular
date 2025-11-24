import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Output() ajouterAuPanier = new EventEmitter<string>();
  enStock: boolean = true;
  
  toggleStock(): void {
    this.enStock = !this.enStock;
  }
  
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
