import { Component } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';
import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../../services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent {
  idUnidade: number | null = null;
  unidades: Unidade[] = [];
  lista: Produto[] = [];

  constructor(private unidadeService: UnidadeService, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(): void{
    this.produtoService.buscarProdutos().subscribe({
      next: (lista: Produto[]) => {
        this.lista = lista;
      },
      error: (error: any) => {
        alert('Erro ao buscar desenvolvedores');
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    })
  }

  removerProduto(produto: Produto): void {
    if (produto.id !== undefined) {
      this.produtoService.removerProduto(produto.id).subscribe({
        next: mensagem => {
          this.lista = this.lista.filter(prod => prod.id !== produto.id);
          Swal.fire({
            icon: "success",
            title: "Produto excluído!"
          });
        },
        error: (error: any) => {
          Swal.fire({
            icon: "error",
            title: "Não pode excluir o produto!"
          });
        }
      });
    } else {
      alert('ID do desenvolvedor não está definido');
    }
  }
}
