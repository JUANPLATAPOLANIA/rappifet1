import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage {

  titular: string = 'Juan Pérez';
  cuenta: string = '1234567890';
  monto: number = 500;

  constructor(private router: Router) {}

  /**
   * Navega a la página de Transferencia2
   */
  continuar() {
    this.router.navigate(['/transferencia2']);
  }
}
