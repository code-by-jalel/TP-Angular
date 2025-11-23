import { Component } from '@angular/core';

interface Tache {
  id: number;
  description: string;
  statut: boolean; // true = complétée, false = non complétée
  priorite: 'haute' | 'moyenne' | 'basse';
  dateCreation: Date;
}

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html'
})
export class TachesComponent {
  taches: Tache[] = [
    {
      id: 1,
      description: 'Terminer le projet Angular',
      statut: false,
      priorite: 'haute',
      dateCreation: new Date('2024-11-15')
    },
    {
      id: 2,
      description: 'Revoir le code TypeScript',
      statut: true,
      priorite: 'moyenne',
      dateCreation: new Date('2024-11-14')
    },
    {
      id: 3,
      description: 'Mettre à jour la documentation',
      statut: false,
      priorite: 'basse',
      dateCreation: new Date('2024-11-13')
    },
    {
      id: 4,
      description: 'Tester les directives Angular',
      statut: false,
      priorite: 'haute',
      dateCreation: new Date('2024-11-16')
    },
    {
      id: 5,
      description: 'Apprendre les pipes Angular',
      statut: true,
      priorite: 'moyenne',
      dateCreation: new Date('2024-11-10')
    }
  ];

  nouvelleDescription: string = '';
  nouvellePriorite: 'haute' | 'moyenne' | 'basse' = 'moyenne';

  // Obtenir la couleur en fonction de la priorité
  getPrioriteColor(priorite: string): string {
    switch (priorite) {
      case 'haute':
        return '#dc3545'; // Rouge
      case 'moyenne':
        return '#ffc107'; // Orange
      case 'basse':
        return '#28a745'; // Vert
      default:
        return '#333';
    }
  }

  // Basculer le statut d'une tâche
  toggleTache(id: number): void {
    const tache = this.taches.find(t => t.id === id);
    if (tache) {
      tache.statut = !tache.statut;
    }
  }

  // Ajouter une nouvelle tâche
  addTache(): void {
    if (this.nouvelleDescription.trim()) {
      const newId = this.taches.length > 0 ? Math.max(...this.taches.map(t => t.id)) + 1 : 1;
      this.taches.push({
        id: newId,
        description: this.nouvelleDescription,
        statut: false,
        priorite: this.nouvellePriorite,
        dateCreation: new Date()
      });
      this.nouvelleDescription = '';
      this.nouvellePriorite = 'moyenne';
    }
  }

  // Supprimer une tâche
  deleteTache(id: number): void {
    this.taches = this.taches.filter(t => t.id !== id);
  }

  // Compter les tâches complétées
  getTachesCompleted(): number {
    return this.taches.filter(t => t.statut).length;
  }

  // Obtenir le pourcentage de tâches complétées
  getProgressPercentage(): number {
    if (this.taches.length === 0) return 0;
    return Math.round((this.getTachesCompleted() / this.taches.length) * 100);
  }
}
