import { Injectable } from '@nestjs/common';
import { UsuariosModel } from './usuarios.model';

@Injectable()
export class UsuariosService {
  private usuarios: UsuariosModel[] = [];

  constructor() {
     let usuario = {
      id: 1,
      nombre: "Juan",
      email: "juan@example.com"
    };
    this.usuarios.push(usuario);

    usuario = {
      id: 2,
      nombre: "Josefa",
      email: "josefa@example.com"
    };
    this.usuarios.push(usuario);

    usuario = {
      id: 3,
      nombre: "María",
      email: "maria@example.com"
    };
    this.usuarios.push(usuario);
  }


  addUsuario(usuario: UsuariosModel) {
    this.usuarios.push(usuario);
    return usuario;
  }

  getUsuarioById(id: number) {
    return this.usuarios.find(usuario => usuario.id === id) || null;
  }

  updateUsuario(id: number, updatedUsuario: UsuariosModel) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      this.usuarios[index] = updatedUsuario;
      return updatedUsuario;
    }
    return null;
  }

  deleteUsuario(id: number) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      return `Usuario con id ${id} eliminado.`;
    }
    return `Usuario con id ${id} no encontrado.`;
  }

  getUsuarios() {
    return this.usuarios;
  }
}
