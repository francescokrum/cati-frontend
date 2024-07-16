import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PaginaDevComponent } from './PaginaDev.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [PaginaDevComponent],
  providers: [],
  imports: [ AppModule , AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PaginaDevComponent],
})
export class PaginaDevModule {}
