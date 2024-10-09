import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule],
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
