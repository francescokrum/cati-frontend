import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PaginaClienteComponent } from './PaginaCliente.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AppModule } from '../../app.module';


@NgModule({
  declarations: [PaginaClienteComponent],
  providers: [],
  imports: [ AppModule , AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PaginaClienteComponent],
})
export class PaginaClienteModule {}
