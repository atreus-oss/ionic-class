import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  constructor() { }

  getCardData(){
    return[
      {
        id: '1',
        title: 'Tarjeta 1',
        fecha: '2024-10-10',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Descripción de la tarjeta 1',
      },
      {
        id: '2',
        title: 'Tarjeta 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Descripción de la tarjeta 2',
      }
    ];
  }
}
