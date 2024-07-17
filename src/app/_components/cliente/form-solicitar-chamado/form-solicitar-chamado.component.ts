import { Component } from '@angular/core';
import { Chamado } from '../../../models/chamado';
import { Produto } from '../../../models/produto';
import { ChamadoService } from '../../../services/chamado.service';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-form-solicitar-chamado',
  templateUrl: './form-solicitar-chamado.component.html',
  styleUrl: './form-solicitar-chamado.component.css'
})
export class FormSolicitarChamadoComponent {

  chamado: Chamado = new Chamado();
  produtos: Produto[] = [];

  constructor(private chamadoService: ChamadoService, private produtoService: ProdutoService){}

  ngOnInit(): void{
    this.produtoService.buscarProdutosPorCliente().subscribe(
      (data: Produto[]) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao buscar produtos', error);
      }
    )
  }

  cadastrarChamado(): void{
    const produtoSelecionado = this.produtos.find(p => p.id === this.chamado.produto.id);
    if(produtoSelecionado){
      this.chamado.produto = produtoSelecionado;
    }

    this.chamadoService.cadastrarChamado(this.chamado).subscribe({
      next: mensagem => {
        alert('Chamado solicitado com sucesso:');
        this.chamado = new Chamado();
      },
      error: (error: any) => {
        alert('Erro ao cadastrar produto');
        console.error('Erro ao solicitar chamado:', error);
      }
    })
  }

  onProdutoChange(event: Produto): void {
    this.chamado.produto = event;
  }


}
