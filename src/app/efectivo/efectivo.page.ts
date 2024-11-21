import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-efectivo',
  templateUrl: './efectivo.page.html',
  styleUrls: ['./efectivo.page.scss'],
})
export class EfectivoPage {

  efectivo: number = 0;

  constructor(private navCtrl: NavController) {}
  continuar() {
    console.log('Monto en efectivo:', this.efectivo);
    this.navCtrl.navigateForward('/pedido-en-camino');
  }
}