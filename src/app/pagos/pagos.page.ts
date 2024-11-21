import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage {

  constructor(private alertController: AlertController, private router: Router) {}

  /**
   * Maneja la selección de un método de pago
   * @param metodo - El método seleccionado: 'efectivo' o 'transferencia'
   */
  async seleccionarMetodo(metodo: string) {
    const mensaje =
      metodo === 'efectivo'
        ? 'Has seleccionado pagar en efectivo.'
        : 'Has seleccionado pagar mediante transferencia.';

    // Muestra un alert con la confirmación del método seleccionado
    const alert = await this.alertController.create({
      header: 'Método seleccionado',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();

    // Aquí puedes agregar la lógica adicional, como redirigir o guardar la selección
    console.log(`Método seleccionado: ${metodo}`);
  }
  efectivo() {
    this.router.navigate(['/efectivo']);
  }
  tranferencia() {
    this.router.navigate(['/transferencia']);
  }
}