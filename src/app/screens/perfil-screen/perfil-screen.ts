import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss',
})
export class PerfilScreen implements OnInit{
  perfil = {
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    nacimiento: ''
  };
  ngOnInit() {
    this.perfil = {
      nombre: 'Alan Kenath Sodi Hernández',
      email: 'sh202473505@alm.buap.mx',
      telefono: '222 222 2222',
      direccion: 'Calzada Zavaleta 72150',
      nacimiento: '03/02/2006',
    }
  }

}
