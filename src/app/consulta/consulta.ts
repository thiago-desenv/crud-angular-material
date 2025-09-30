import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente';
import { cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    CommonModule
],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {
  nomeBusca: string = '';
  listaClientes: cliente[] = [];
  columnsTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "acoes"];

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  editar(id: string) {
    this.router.navigate(['/cadastro'], { queryParams: { "id": id } })
  }

  deletar(cliente: cliente) {
    cliente.deletar = true;
  }

  confirmarDelecao(cliente: cliente) {
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
    this.service.mensagemSucesso("Deletado com sucesso!");
  }
}
