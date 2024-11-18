import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class  LoginPage {
  nombre: string = '';
  password: string = '';

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  async ingresar() {
    if (!this.nombre || !this.password) {
      await this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return;
    }

    const datos = {
      nombre: this.nombre,
      password: this.password,
    };

    this.http.post('http://localhost:3000/login', datos).subscribe(
      async (res) => {
        await this.mostrarAlerta('Éxito', 'Inicio de sesión exitoso');
      },
      async (err) => {
        await this.mostrarAlerta('Error', 'Nombre o contraseña incorrectos');
      }
    );
  }

  private async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
