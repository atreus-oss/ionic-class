import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonAvatar,
  IonItem, IonLabel, IonButton,
  IonInput, IonItemGroup, IonItemDivider
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle,
    IonContent, IonAvatar,
    IonList, IonItem, IonLabel,
    IonButton, IonInput, IonItemGroup,
    IonItemDivider
  ],
})
export class Tab3Page {
  user = {
    name: 'Arthur Morgan',
    avatarUrl: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728067582/mi-cara-cuando-version-kanye-wes_dmsspd.jpg',
  };

  get welcomeMessage(): string{
    return `Bienvenido, ${this.user.name}!`
  }
  constructor() {}
}
