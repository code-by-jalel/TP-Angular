import { Component } from '@angular/core';

interface Produit {
  id: number;
  nom: string;
  prix: number;
  stock: number;
  description: string;
}

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent {
  produits: Produit[] = [
    {
      id: 1,
      nom: 'Laptop',
      prix: 999.99,
      stock: 75,
      description: 'Ordinateur portable haute performance'
    },
    {
      id: 2,
      nom: 'Souris Wireless',
      prix: 29.99,
      stock: 35,
      description: 'Souris sans fil ergonomique'
    },
    {
      id: 3,
      nom: 'Clavier Mécanique',
      prix: 129.99,
      stock: 15,
      description: 'Clavier mécanique RGB avec switches Cherry MX'
    },
    {
      id: 4,
      nom: 'Moniteur 4K',
      prix: 599.99,
      stock: 42,
      description: 'Moniteur Ultra HD 4K 27 pouces'
    },
    {
      id: 5,
      nom: 'Casque Bluetooth',
      prix: 199.99,
      stock: 8,
      description: 'Casque audio sans fil avec ANC'
    }
  ];

  // Méthode pour obtenir la couleur du stock
  getStockColor(stock: number): string {
    if (stock > 50) {
      return '#28a745'; // Vert
    } else if (stock >= 20 && stock <= 50) {
      return '#ffc107'; // Orange
    } else {
      return '#dc3545'; // Rouge
    }
  }

  // Méthode pour obtenir le statut du stock
  getStockStatus(stock: number): string {
    if (stock > 50) {
      return 'En stock';
    } else if (stock >= 20 && stock <= 50) {
      return 'Stock limité';
    } else {
      return 'Stock critique';
    }
  }

  // Augmenter le stock
  incrementStock(id: number): void {
    const produit = this.produits.find(p => p.id === id);
    if (produit) {
      produit.stock += 5;
    }
  }

  // Diminuer le stock
  decrementStock(id: number): void {
    const produit = this.produits.find(p => p.id === id);
    if (produit && produit.stock > 0) {
      produit.stock -= 5;
    }
  }

  // Acheter un produit (diminuer le stock de 1)
  buyProduct(id: number): void {
    const produit = this.produits.find(p => p.id === id);
    if (produit && produit.stock > 0) {
      produit.stock -= 1;
    }
  }
}
