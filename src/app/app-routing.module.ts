import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaCadastroClienteComponent } from './pages/cliente/pagina-cadastro-cliente/pagina-cadastro-cliente.component';
import { PaginaInicialAdminComponent } from './pages/admin/pagina-inicial-admin/pagina-inicial-admin.component';
import { PaginaCadastroDevComponent } from './pages/dev/pagina-cadastro-dev/pagina-cadastro-dev.component';
import { PaginaCadastroUnidadeComponent } from './pages/unidade/pagina-cadastro-unidade/pagina-cadastro-unidade.component';
import { PaginaListaDevComponent } from './pages/dev/pagina-lista-dev/pagina-lista-dev.component';
import { PaginaListaUnidadeComponent } from './pages/unidade/pagina-lista-unidade/pagina-lista-unidade.component';
import { PaginaCadastroProdutoComponent } from './pages/produto/pagina-cadastro-produto/pagina-cadastro-produto.component';
import { PaginaListaProdutoComponent } from './pages/produto/pagina-lista-produto/pagina-lista-produto.component';
import { loginGuard } from './auth/login.guard';
import { PaginaInicialClienteComponent } from './pages/cliente/pagina-inicial-cliente/pagina-inicial-cliente.component';
import { PaginaInicialDevComponent } from './pages/dev/pagina-inicial-dev/pagina-inicial-dev.component';
import { SolicitarChamadoComponent } from './pages/cliente/solicitar-chamado/solicitar-chamado.component';
import { HistoricoChamadosComponent } from './pages/cliente/historico-chamados/historico-chamados.component';
import { PerfilClienteComponent } from './pages/cliente/perfil-cliente/perfil-cliente.component';
import { PaginaClienteComponent } from './pages/cliente/PaginaCliente.component';
import { PaginaAdminComponent } from './pages/admin/PaginaAdmin.component';
import { PaginaDevComponent } from './pages/dev/PaginaDev.component';
import { PerfilDevComponent } from './pages/dev/perfil-dev/perfil-dev.component';
import { PaginaListaUsuariosComponent } from './pages/admin/pagina-lista-usuarios/pagina-lista-usuarios.component';
import { PaginaCadastroTarefaComponent } from './pages/tarefa/pagina-cadastro-tarefa/pagina-cadastro-tarefa.component';
import { PaginaListaTarefaComponent } from './pages/tarefa/pagina-lista-tarefa/pagina-lista-tarefa.component';
import { PaginaListaChamadoComponent } from './pages/chamado/pagina-lista-chamado/pagina-lista-chamado.component';
import { PaginaEditarUnidadeComponent } from './pages/unidade/pagina-editar-unidade/pagina-editar-unidade.component';
import { PaginaEditarProdutoComponent } from './pages/produto/pagina-editar-produto/pagina-editar-produto.component';

const routes: Routes = [
  { path: '', component: PaginaLoginComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'cadastrarCliente', component: PaginaCadastroClienteComponent },

  {
    path: 'admin',
    component: PaginaAdminComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: PaginaInicialAdminComponent },
      { path: 'paginaCadastroUnidade', component: PaginaCadastroUnidadeComponent },
      { path: 'listaDev', component: PaginaListaDevComponent },
      { path: 'listaUnidade', component: PaginaListaUnidadeComponent },
      { path: 'listaProduto', component: PaginaListaProdutoComponent },
      { path: 'cadastrarDev', component: PaginaCadastroDevComponent },
      { path: 'cadastrarProduto', component: PaginaCadastroProdutoComponent },
      { path: 'listaUsuarios', component: PaginaListaUsuariosComponent },
      { path: 'cadastrarTarefa', component: PaginaCadastroTarefaComponent },
      { path: 'listarTarefa', component: PaginaListaTarefaComponent },
      { path: 'listarChamado', component: PaginaListaChamadoComponent },
      { path: 'editarUnidade/:id', component: PaginaEditarUnidadeComponent },
      { path: 'editarProduto', component: PaginaEditarProdutoComponent },
    ]
  },

  {
    path: 'cliente',
    component: PaginaClienteComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: PaginaInicialClienteComponent},
      { path: 'solicitarChamado', component: SolicitarChamadoComponent},
      { path: 'historicoChamados', component: HistoricoChamadosComponent},
      { path: 'perfilCliente', component: PerfilClienteComponent},
    ]
  },
  {
    path: 'dev',
    component: PaginaDevComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: PaginaInicialDevComponent},
      { path: 'perfilDev', component: PerfilDevComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
