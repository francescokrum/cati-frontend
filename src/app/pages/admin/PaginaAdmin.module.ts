import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { AppModule } from '../../app.module';
import { PaginaAdminComponent } from './PaginaAdmin.component';
import { PaginaListaUsuariosComponent } from './pagina-lista-usuarios/pagina-lista-usuarios.component';


@NgModule({
  declarations: [PaginaAdminComponent, PaginaListaUsuariosComponent],
  providers: [],
  imports: [ AppModule , AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PaginaAdminComponent],
})
export class PaginaAdminModule {}
