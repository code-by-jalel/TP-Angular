import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
/*Analyse: si on efface FormsModules, Angular ne reconnait 
pas la directive [(ngModel)] et ne peut pas creer les bindings 
bidirectionnels entre le template et le composant 

-AppModule définit les dépendances globales et configure 
l'injection de dépendances, permettant à Angular de 
savoir quelles fonctionnalités sont disponibles dans 
toute l'application.
*/



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ProfilComponent } from './profil/profil.component';
import { AdresseComponent} from './adresse/adresse.component';
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ProfilComponent,
    AdresseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
