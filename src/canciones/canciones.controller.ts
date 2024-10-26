import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesModel } from './canciones.model';

@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  create(@Body() NewCancion:CancionesModel) {
    return this.cancionesService.addCancion(NewCancion);
  }

  @Get()
  findAll() {
    return this.cancionesService.getCanciones();
  }

   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.cancionesService.getCancionById(+id);
   }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancion:CancionesModel) {
    return this.cancionesService.updateCancion(+id, updateCancion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionesService.deleteCancion(+id);
  }

  @Get('artista/:artista')
  findByArtista(@Param('artista') artista: string) {
    return this.cancionesService.getCancionesByArtista(artista);
  }

  @Get('titulo/:titulo')
  findByTitulo(@Param('titulo') titulo: string) {
    return this.cancionesService.getCancionByName(titulo);
  }
}

