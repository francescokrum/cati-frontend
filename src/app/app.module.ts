import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './_components/form-login/form-login.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaCadastroClienteComponent } from './pages/cliente/pagina-cadastro-cliente/pagina-cadastro-cliente.component';
import { FormCadastroClienteComponent } from './_components/cliente/form-cadastro-cliente/form-cadastro-cliente.component';
import { PaginaInicialAdminComponent } from './pages/admin/pagina-inicial-admin/pagina-inicial-admin.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaCadastroDevComponent } from './pages/dev/pagina-cadastro-dev/pagina-cadastro-dev.component';
import { FormCadastroDevComponent } from './_components/dev/form-cadastro-dev/form-cadastro-dev.component';
import { PaginaCadastroUnidadeComponent } from './pages/unidade/pagina-cadastro-unidade/pagina-cadastro-unidade.component';
import { FormCadastroUnidadeComponent } from './_components/unidade/form-cadastro-unidade/form-cadastro-unidade.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ListaDevComponent } from './_components/dev/lista-dev/lista-dev.component';
import { PaginaListaDevComponent } from './pages/dev/pagina-lista-dev/pagina-lista-dev.component';
import { FormsModule } from '@angular/forms';
import { PaginaListaUnidadeComponent } from './pages/unidade/pagina-lista-unidade/pagina-lista-unidade.component';
import { ListaUnidadeComponent } from './_components/unidade/lista-unidade/lista-unidade.component';
import { PaginaCadastroProdutoComponent } from './pages/produto/pagina-cadastro-produto/pagina-cadastro-produto.component';
import { ButtonVoltarAdminComponent } from './_components/_ui/button-voltar-admin/button-voltar-admin.component';
import { FormCadastroProdutoComponent } from './_components/produto/form-cadastro-produto/form-cadastro-produto.component';
import { RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './_components/produto/lista-produto/lista-produto.component';
import { PaginaListaProdutoComponent } from './pages/produto/pagina-lista-produto/pagina-lista-produto.component';
import { meuhttpInterceptor } from './auth/http-interceptor.service';
import { PaginaInicialClienteComponent } from './pages/cliente/pagina-inicial-cliente/pagina-inicial-cliente.component';
import { PaginaInicialDevComponent } from './pages/dev/pagina-inicial-dev/pagina-inicial-dev.component';
import { BotaoPerfilComponent } from './_components/_ui/button-perfil/botao-perfil.component';
import { PerfilClienteComponent } from './pages/cliente/perfil-cliente/perfil-cliente.component';
import { SolicitarChamadoComponent } from './pages/cliente/solicitar-chamado/solicitar-chamado.component';
import { HistoricoChamadosComponent } from './pages/cliente/historico-chamados/historico-chamados.component';
import { NavegacaoClienteComponent } from './_components/cliente/navegacao-cliente/navegacao-cliente.component';
import { PaginaClienteComponent } from './pages/cliente/PaginaCliente.component';
import { PaginaAdminComponent } from './pages/admin/PaginaAdmin.component';
import { FormSolicitarChamadoComponent } from './_components/cliente/form-solicitar-chamado/form-solicitar-chamado.component';
import { FormEditarClienteComponent } from './_components/cliente/form-editar-cliente/form-editar-cliente.component';
import { ListaChamadoClienteComponent } from './_components/cliente/lista-chamado-cliente/lista-chamado-cliente.component';
import { SidebarModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { ButtonVoltarClienteComponent } from './_components/_ui/button-voltar-cliente/button-voltar-cliente.component';
import { ListaTarefaDevComponent } from './_components/dev/lista-tarefa-dev/lista-tarefa-dev.component';
import { ButtonLogoutComponent } from './_components/_ui/button-logout/button-logout.component';
import { ButtonPerfilDevComponent } from './_components/_ui/button-perfil-dev/button-perfil-dev.component';
import { PaginaDevComponent } from './pages/dev/PaginaDev.component';
import { FormEditarDevComponent } from './_components/dev/form-editar-dev/form-editar-dev.component';
import { PerfilDevComponent } from './pages/dev/perfil-dev/perfil-dev.component';
import { ButtonVoltarDevComponent } from './_components/_ui/button-voltar-dev/button-voltar-dev.component';
import { ListaUsuariosComponent } from './_components/cliente/lista-usuarios/lista-usuarios.component';
import { PaginaListaUsuariosComponent } from './pages/admin/pagina-lista-usuarios/pagina-lista-usuarios.component';
import { CadastrarTarefaComponent } from './_components/tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListaTarefaComponent } from './_components/tarefa/lista-tarefa/lista-tarefa.component';
import { PaginaCadastroTarefaComponent } from './pages/tarefa/pagina-cadastro-tarefa/pagina-cadastro-tarefa.component';
import { PaginaListaTarefaComponent } from './pages/tarefa/pagina-lista-tarefa/pagina-lista-tarefa.component';
import { ListaChamadoComponent } from './_components/chamado/lista-chamado/lista-chamado.component';
import { PaginaListaChamadoComponent } from './pages/chamado/pagina-lista-chamado/pagina-lista-chamado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    PaginaLoginComponent,
    PaginaCadastroClienteComponent,
    FormCadastroClienteComponent,
    PaginaInicialAdminComponent,
    SidebarComponent,
    PaginaCadastroDevComponent,
    FormCadastroDevComponent,
    PaginaCadastroUnidadeComponent,
    FormCadastroUnidadeComponent,
    ListaDevComponent,
    PaginaListaDevComponent,
    PaginaListaUnidadeComponent,
    ListaUnidadeComponent,
    PaginaCadastroProdutoComponent,
    ButtonVoltarAdminComponent,
    FormCadastroProdutoComponent,
    ListaProdutoComponent,
    PaginaListaProdutoComponent,
    PaginaInicialClienteComponent,
    PaginaInicialDevComponent,
    BotaoPerfilComponent,
    PerfilClienteComponent,
    SolicitarChamadoComponent,
    HistoricoChamadosComponent,
    NavegacaoClienteComponent,
    PaginaClienteComponent,
    PaginaAdminComponent,
    FormSolicitarChamadoComponent,
    FormEditarClienteComponent,
    ListaChamadoClienteComponent,
    ButtonVoltarClienteComponent,
    ListaTarefaDevComponent,
    ButtonLogoutComponent,
    ButtonPerfilDevComponent,
    PaginaDevComponent,
    FormEditarDevComponent,
    PerfilDevComponent,
    ButtonVoltarDevComponent,
    ListaUsuariosComponent,
    PaginaListaUsuariosComponent,
    CadastrarTarefaComponent,
    ListaTarefaComponent,
    PaginaCadastroTarefaComponent,
    PaginaListaTarefaComponent,
    ListaChamadoComponent,
    PaginaListaChamadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    SidebarModule,
    CommonModule
  ],
  providers: [ provideHttpClient(withInterceptors([meuhttpInterceptor])) ],
  bootstrap: [AppComponent]
})
export class AppModule { }
