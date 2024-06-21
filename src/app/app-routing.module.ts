import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaCadastroClienteComponent } from './pages/cliente/pagina-cadastro-cliente/pagina-cadastro-cliente.component';
import { PaginaInicialAdminComponent } from './pages/pagina-inicial-admin/pagina-inicial-admin.component';
import { PaginaCadastroDevComponent } from './pages/dev/pagina-cadastro-dev/pagina-cadastro-dev.component';
import { PaginaCadastroUnidadeComponent } from './pages/unidade/pagina-cadastro-unidade/pagina-cadastro-unidade.component';
import { PaginaListaDevComponent } from './pages/dev/pagina-lista-dev/pagina-lista-dev.component';
import { PaginaListaUnidadeComponent } from './pages/unidade/pagina-lista-unidade/pagina-lista-unidade.component';
import { PaginaCadastroProdutoComponent } from './pages/produto/pagina-cadastro-produto/pagina-cadastro-produto.component';
import { PaginaListaProdutoComponent } from './pages/produto/pagina-lista-produto/pagina-lista-produto.component';

const routes: Routes = [
  { path: '', component: PaginaInicialAdminComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'cadastrarCliente', component: PaginaCadastroClienteComponent },
  { path: 'cadastrarDev', component: PaginaCadastroDevComponent },
  { path: 'paginaInicialAdmin', component: PaginaInicialAdminComponent },
  { path: 'paginaCadastroUnidade', component: PaginaCadastroUnidadeComponent },
  { path: 'listaDev', component: PaginaListaDevComponent },
  { path: 'listaUnidade', component: PaginaListaUnidadeComponent },
  { path: 'cadastrarProduto', component: PaginaCadastroProdutoComponent },
  { path: 'listaProduto', component: PaginaListaProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
