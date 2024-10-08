import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NoticiaService } from '../tab2/noticia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.page.html',
  styleUrls: ['./detalle-noticia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalleNoticiaPage implements OnInit {
  cardData: any;
  id!: string;

  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.obt_noticia();
  }

  obt_noticia() {
    this.cardData = this.noticiaService.getCardData().find(noticia => noticia.id === this.id);
  }
}