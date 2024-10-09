import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NoticiaService } from './noticia.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, RouterModule],
})
export class Tab2Page implements OnInit {
  noticias: any[] = [];

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  ngOnInit() {
    this.noticias = this.noticiaService.getNoticias();
  }
}
