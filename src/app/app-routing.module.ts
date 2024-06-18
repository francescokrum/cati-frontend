import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaCadastroClienteComponent } from './pages/pagina-cadastro-cliente/pagina-cadastro-cliente.component';
import { PaginaInicialAdminComponent } from './pages/pagina-inicial-admin/pagina-inicial-admin.component';
import { PaginaCadastroDevComponent } from './pages/pagina-cadastro-dev/pagina-cadastro-dev.component';
import { PaginaCadastroUnidadeComponent } from './pages/pagina-cadastro-unidade/pagina-cadastro-unidade.component';
import { PaginaListaDevComponent } from './pages/pagina-lista-dev/pagina-lista-dev.component';
import { PaginaListaUnidadeComponent } from './pages/pagina-lista-unidade/pagina-lista-unidade.component';

const routes: Routes = [
  { path: '', component: PaginaInicialAdminComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'cadastrarCliente', component: PaginaCadastroClienteComponent },
  { path: 'cadastrarDev', component: PaginaCadastroDevComponent },
  { path: 'paginaInicialAdmin', component: PaginaInicialAdminComponent },
  { path: 'paginaCadastroUnidade', component: PaginaCadastroUnidadeComponent },
  { path: 'listaDev', component: PaginaListaDevComponent },
  { path: 'listaUnidade', component: PaginaListaUnidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
