/*
    Export: rend l'interface accessible depuis d'autres fichiers
    Interface: contrat qui d"finit la structure et les types des propriétés qu'un objet doit avoir
    
    
    a.)name : string: proptiété obligatoire
    b.)name !: string: propriété obligatoire avec assertions non-null
    c.)name ?: string: propriété optionelle
*/

export interface Student {
 id: number;
 name: string;
 lastname: string;
 average: number;
 attendance: number;
 scholarshipAmount: number;
 enrollmentDate: Date;
 classe ?:string
}