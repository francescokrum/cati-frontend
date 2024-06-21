import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './_components/form-login/form-login.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaCadastroClienteComponent } from './pages/cliente/pagina-cadastro-cliente/pagina-cadastro-cliente.component';
import { FormCadastroClienteComponent } from './_components/cliente/form-cadastro-cliente/form-cadastro-cliente.component';
import { PaginaInicialAdminComponent } from './pages/pagina-inicial-admin/pagina-inicial-admin.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaCadastroDevComponent } from './pages/dev/pagina-cadastro-dev/pagina-cadastro-dev.component';
import { FormCadastroDevComponent } from './_components/dev/form-cadastro-dev/form-cadastro-dev.component';
import { PaginaCadastroUnidadeComponent } from './pages/unidade/pagina-cadastro-unidade/pagina-cadastro-unidade.component';
import { FormCadastroUnidadeComponent } from './_components/unidade/form-cadastro-unidade/form-cadastro-unidade.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ListaDevComponent } from './_components/dev/lista-dev/lista-dev.component';
import { PaginaListaDevComponent } from './pages/dev/pagina-lista-dev/pagina-lista-dev.component';
import { FormsModule } from '@angular/forms';
import { PaginaListaUnidadeComponent } from './pages/unidade/pagina-lista-unidade/pagina-lista-unidade.component';
import { ListaUnidadeComponent } from './_components/unidade/lista-unidade/lista-unidade.component';
import { PaginaCadastroProdutoComponent } from './pages/produto/pagina-cadastro-produto/pagina-cadastro-produto.component';
import { ButtonVoltarComponent } from './_components/_ui/button-voltar/button-voltar.component';
import { FormCadastroProdutoComponent } from './_components/produto/form-cadastro-produto/form-cadastro-produto.component';
import { RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './_components/produto/lista-produto/lista-produto.component';
import { PaginaListaProdutoComponent } from './pages/produto/pagina-lista-produto/pagina-lista-produto.component';

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
    ButtonVoltarComponent,
    FormCadastroProdutoComponent,
    ListaProdutoComponent,
    PaginaListaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [ provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
