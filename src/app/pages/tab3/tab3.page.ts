import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonAvatar,
  IonItem, IonLabel, IonButton,
  IonInput
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle,
    IonContent, ExploreContainerComponent, IonAvatar,
    IonList, IonItem, IonLabel,
    IonButton, IonInput
  ],
})
export class Tab3Page {
  constructor() {}
}
