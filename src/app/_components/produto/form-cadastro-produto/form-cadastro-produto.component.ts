import { Component } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';
import { ProdutoService } from '../../../services/produto.service';
import { ProdutoDTO } from '../../../models/produtoDTO';
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: "success",
          title: "Produto cadastrado!"
        });
        this.produtoDTO = new ProdutoDTO();
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Dados invalidos ao cadastrar produto!"
        });
      }
    });
  }

  onUnidadeChange(event: Unidade): void {
    this.produtoDTO.unidadeDeNegocio = event;
  }
}
