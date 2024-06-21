import { Component } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';
import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-form-cadastro-produto',
  templateUrl: './form-cadastro-produto.component.html',
  styleUrl: './form-cadastro-produto.component.css'
})
export class FormCadastroProdutoComponent {
  produto: Produto = new Produto();
  unidades: Unidade[] = [];

  constructor(private unidadeService: UnidadeService, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.unidadeService.buscarUnidades().subscribe(
      (data: Unidade[]) => {
        this.unidades = data;
      },
      (error) => {
        console.error('Erro ao buscar unidades', error);
      }
    );
  }

  cadastrarProduto(): void {
    // Encontrar a unidade selecionada com base no idUnidade
    const unidadeSelecionada = this.unidades.find(u => u.id === this.produto.unidade.id);
    if (unidadeSelecionada) {
      this.produto.unidade = unidadeSelecionada;
    }

    this.produtoService.cadastrarProduto(this.produto).subscribe({
      next: mensagem => {
        console.log('Produto cadastrado com sucesso:', mensagem);
        this.produto = new Produto();
      },
      error: (error: any) => {
        alert('Erro ao cadastrar produto');
        console.error('Erro ao cadastrar produto:', error);
      }
    });
  }

  onUnidadeChange(event: Unidade): void {
    this.produto.unidade = event;
  }
}
