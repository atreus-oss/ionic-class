import { Component, Input } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-content',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalle de Imagen {{ imageId }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <img [src]="'../../../assets/noticia/' + imageId + '.png'" alt="Noticia Detalle" />
      <p>Aquí va más información sobre la noticia con la imagen {{ imageId }}.</p>
    </ion-content>
  `,
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton]
})
export class ModalContentComponent {
  @Input() imageId!: string;

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}