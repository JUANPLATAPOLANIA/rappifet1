import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  password: string = '';
  confirmarPassword: string = '';

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  async registrar() {
    if (!this.nombre || !this.correo || !this.password || !this.confirmarPassword) {
      await this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (!this.validarCorreo(this.correo)) {
      await this.mostrarAlerta('Error', 'El correo no es válido');
      return;
    }

    if (this.password.length < 4 || this.password.length > 8) {
      await this.mostrarAlerta(
        'Error',
        'La contraseña debe tener entre 4 y 8 caracteres'
      );
      return;
    }

    if (this.password !== this.confirmarPassword) {
      await this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
      return;
    }

    const datos = {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
    };

    this.http.post('http://localhost:3000/registro', datos).subscribe(
      async (res) => {
        await this.mostrarAlerta('Éxito', 'Usuario registrado correctamente');
      },
      async (err) => {
        await this.mostrarAlerta('Error', 'Ocurrió un error al registrar el usuario');
      }
    );
  }

  private validarCorreo(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
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
