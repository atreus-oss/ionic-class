import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { ModalContentComponent } from './modal-content.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    ModalContentComponent,
  ],
})
export class Tab2Page {
  constructor(private modalCtrl: ModalController) {}

  async openModal(imageId: string) {
    const modal = await this.modalCtrl.create({
      component: ModalContentComponent,
      componentProps: { imageId: imageId } // Pasar el imageId al modal
    });
    return await modal.present(); // Presentar el modal
  }
}
