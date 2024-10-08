import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRouterLink, IonButton } from '@ionic/angular/standalone';
import { NoticiaService } from './noticia.service';
import { Router, RouterModule } from '@angular/router';

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
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    CommonModule,
    FormsModule,
    IonRouterLink,
    RouterModule,
    IonButton
  ],
})
export class Tab2Page implements OnInit {
  cardData: any[] = [];

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  ngOnInit() {
    this.obt_noticia();
  }

  obt_noticia() {
    this.cardData = this.noticiaService.getCardData();
  }

  trackById(index: number, item: any): string {
    return item.id;
  }

  abrirDetalleNoticia(id: string) {
    this.router.navigate(['detalle-noticia', id]);
  }
}
