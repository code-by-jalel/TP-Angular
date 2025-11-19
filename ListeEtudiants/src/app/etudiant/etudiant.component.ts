import { Component } from '@angular/core';
import {Student} from './TypeStudent' ;

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etudiant :Student ={
    id:1,
    name:"jalel",
    lastname:"ben romdhane",
    average: 18.5,
    attendance: 0.95,
    scholarshipAmount: 1500,
    enrollmentDate: new Date('2023-09-15')
  };
  /*l'affichage n'est plus visible car on doit afficher les attributs de l'objet pas l'objet elle meme */
}
