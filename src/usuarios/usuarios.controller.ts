import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosModel } from './usuarios.model';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() newUser: UsuariosModel) {
    return this.usuariosService.addUsuario(newUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.getUsuarioById(+id);
  }

  @Get()
  findAll() {
    return this.usuariosService.getUsuarios();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: UsuariosModel) {
    return this.usuariosService.updateUsuario(+id, updateUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.deleteUsuario(+id);
  }
}
