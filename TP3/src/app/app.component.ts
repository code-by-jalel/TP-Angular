import { Component, ViewChild } from '@angular/core';
import { PanierComponent } from './panier/panier.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'TP3';
  @ViewChild(PanierComponent) panier!: PanierComponent;

  gererAjoutAuPanier(nomProduit: string): void {
    if (this.panier) {
      this.panier.ajouterAuPanier(nomProduit);
    }
  }
}
