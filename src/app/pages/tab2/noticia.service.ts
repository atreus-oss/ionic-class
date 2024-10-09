import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

    private noticias = [
      {
        id: 1,
        titulo: 'Tarjeta 1',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/1.png',
        description: 'Descripción de la tarjeta 1',
      },
      {
        id: 2,
        titulo: 'Tarjeta 2',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/2.png',
        description: 'Descripción de la tarjeta 2',
      },
      {
        id: 3,
        titulo: 'Tarjeta 3',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/3.png',
        description: 'Descripción de la tarjeta 3',
      },
      {
        id: 4,
        titulo: 'Tarjeta 4',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/4.png',
        description: 'Descripción de la tarjeta 4',
      }
    ];

  constructor() { }

  getNoticias(){
    return this.noticias;
  }

  getNoticia(id: number){
    return this.noticias.find(noticia => noticia.id === id);
  }
}
