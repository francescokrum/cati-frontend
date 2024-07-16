import { Component } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';
import { ProdutoService } from '../../../services/produto.service';
import { ProdutoDTO } from '../../../models/produtoDTO';

@Component({
  selector: 'app-form-cadastro-produto',
  templateUrl: './form-cadastro-produto.component.html',
  styleUrls: ['./form-cadastro-produto.component.css']
})
export class FormCadastroProdutoComponent {
  produtoDTO: ProdutoDTO = new ProdutoDTO(); // Use ProdutoDTO em vez de Produto
  unidades: Unidade[] = [];

  constructor(private unidadeService: UnidadeService, private produtoService: ProdutoService) {}

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
    const unidadeSelecionada = this.unidades.find(u => u.id === this.produtoDTO.unidadeDeNegocio.id);
    if (unidadeSelecionada) {
      this.produtoDTO.unidadeDeNegocio = unidadeSelecionada;
    }

    this.produtoService.cadastrarProduto(this.produtoDTO).subscribe({
      next: mensagem => {
        console.log('Produto cadastrado com sucesso:', mensagem);
        this.produtoDTO = new ProdutoDTO(); // Limpa o formulário após o cadastro
      },
      error: (error: any) => {
        alert('Erro ao cadastrar produto');
        console.error('Erro ao cadastrar produto:', error);
      }
    });
  }

  onUnidadeChange(event: Unidade): void {
    this.produtoDTO.unidadeDeNegocio = event;
  }
}
