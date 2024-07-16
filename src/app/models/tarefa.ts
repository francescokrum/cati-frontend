import { Desenvolvedor } from "./desenvolvedor";

export class Tarefa{

  id?: number;
  titulo!: string;
  descricao!: string;
  status!: string;
  desenvolvedor!: Desenvolvedor;

}
