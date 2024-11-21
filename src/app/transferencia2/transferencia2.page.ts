import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transferencia2',
  templateUrl: './transferencia2.page.html',
  styleUrls: ['./transferencia2.page.scss'],
})
export class Transferencia2Page {

  imagen: string | ArrayBuffer | null = null;

  constructor(private alertController: AlertController) {}

  /**
   * Maneja la carga de la imagen
   */
  cargarImagen(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagen = reader.result;
      };
      reader.readAsDataURL(archivo);
    }
  }

  /**
   * Confirma el pago y la imagen subida
   */
  async confirmarPago() {
    if (!this.imagen) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, sube una imagen como evidencia de pago.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Pago Confirmado',
      message: 'Tu evidencia de pago ha sido recibida con éxito.',
      buttons: ['OK'],
    });

    await alert.present();

    console.log('Evidencia de pago enviada:', this.imagen);
  }
}