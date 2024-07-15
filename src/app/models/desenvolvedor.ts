import * as Big from 'big.js'
import { Usuario } from './usuario'

export class Desenvolvedor extends Usuario{

  dataNasc!: Date
  salario!: Big
  cargo!: string

}
