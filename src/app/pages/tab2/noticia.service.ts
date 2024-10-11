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
        description: 'Descripción detallada de la tarjeta 1. Esta descripción contiene información relevante sobre el contenido de la tarjeta y proporciona contexto adicional para el usuario. Asegúrate de que sea lo suficientemente larga para mostrar la funcionalidad de truncamiento.',
      },
      {
        id: 2,
        titulo: 'Tarjeta 2',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/2.png',
        description: 'Descripción detallada de la tarjeta 2. Esta descripción contiene información relevante sobre el contenido de la tarjeta y proporciona contexto adicional para el usuario. Asegúrate de que sea lo suficientemente larga para mostrar la funcionalidad de truncamiento.',
      },
      {
        id: 3,
        titulo: 'Tarjeta 3',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/3.png',
        description: 'Descripción detallada de la tarjeta 3. Esta descripción contiene información relevante sobre el contenido de la tarjeta y proporciona contexto adicional para el usuario. Asegúrate de que sea lo suficientemente larga para mostrar la funcionalidad de truncamiento.',
      },
      {
        id: 4,
        titulo: 'Tarjeta 4',
        fecha: '2024-10-10',
        imageUrl: '../../assets/noticia/4.png',
        description: 'Descripción detallada de la tarjeta 4. Esta descripción contiene información relevante sobre el contenido de la tarjeta y proporciona contexto adicional para el usuario. Asegúrate de que sea lo suficientemente larga para mostrar la funcionalidad de truncamiento.',
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
