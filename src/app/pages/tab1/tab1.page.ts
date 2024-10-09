import { Component } from '@angular/core';
import {  AlertController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page {
  notes = [
    { title: 'Notas', content: ' ' }
  ];

  constructor(private alertCtrl: AlertController) {}

  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva Nota',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Título de la nota'
        },
        {
          name: 'content',
          type: 'textarea',
          placeholder: 'Contenido de la nota'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: data => {
            this.notes.push({
              title: data.title,
              content: data.content
            });
            // Llamar a viewNote para mostrar la nota inmediatamente después de agregarla
            this.viewNote({
              title: data.title,
              content: data.content
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async viewNote(note: { title: string; content: string }) {
    const alert = await this.alertCtrl.create({
      header: note.title,
      message: note.content,
      buttons: ['Cerrar']
    });

    await alert.present();
  }
}