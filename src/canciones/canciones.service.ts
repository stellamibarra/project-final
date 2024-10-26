import { Injectable } from '@nestjs/common';
import { CancionesModel } from './canciones.model';

@Injectable()
export class CancionesService {
  private canciones: CancionesModel[] = [];

  constructor() {
    let cancion = {
      id: 1,
      nombre: "Despacito",
      artista: "Luis Fonsi",
      album: "Vida",
      anio: 2017
    };
    this.canciones.push(cancion);

    cancion = {
      id: 2,
      nombre: "Shape of You",
      artista: "Ed Sheeran",
      album: "÷ (Divide)",
      anio: 2017
    };
    this.canciones.push(cancion);
    cancion = {
      id: 3,
      nombre: "Rolling in the Deep",
      artista: "Adele",
      album: "21",
      anio: 2011
    };
    this.canciones.push(cancion);
    cancion = {
      id: 4,
      nombre: "Blinding Lights",
      artista: "The Weeknd",
      album: "After Hours",
      anio: 2020
    };
    this.canciones.push(cancion);
  }

  addCancion(cancion: CancionesModel) {
    this.canciones.push(cancion);
    return cancion;
  }

  getCanciones() {
    return this.canciones;
  }

  getCancionByName(nombre: string) {
    return this.canciones.find(cancion => cancion.nombre === nombre) || null;
  }

  getCancionesByArtista(artista: string) {
    return this.canciones.filter(cancion => cancion.artista === artista);
  }

  updateCancion(id: number, updatedCancion: CancionesModel) {
    const index = this.canciones.findIndex(cancion => cancion.id === id);
    if (index !== -1) {
      this.canciones[index] = updatedCancion;
      return updatedCancion;
    }
    return null;
  }

  deleteCancion(id: number) {
    const index = this.canciones.findIndex(cancion => cancion.id === id);
    if (index !== -1) {
      this.canciones.splice(index, 1);
      return `Canción con id ${id} eliminada.`;
    }
    return `Canción con id ${id} no encontrada.`;
  }
  getCancionById(id:number){
    return this.canciones.find(cancion => cancion.id === id) || null;
  }
  
}
