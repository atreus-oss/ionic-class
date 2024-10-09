import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NoticiaService } from '../tab2/noticia.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.page.html',
  styleUrls: ['./detalle-noticia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DetalleNoticiaPage implements OnInit {
  noticia: any;

  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.noticia = this.noticiaService.getNoticia(id);
  }

}