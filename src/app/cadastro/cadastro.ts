import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { cliente } from './cliente';
import { ClienteService } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { EnderecoApi } from '../endereco-api';
import { Estado, Municipio } from '../endereco-api.models';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective
  ], providers: [
    provideNgxMask()
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro implements OnInit {
  constructor(
    private enderecoApi: EnderecoApi,
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((q: any) => {
      const params = q['params'];
      const id = params['id'];
      if(id) {
        let clienteEncontrado = this.service.pesquisarClientePorId(id) || cliente.newCliente();
        if(clienteEncontrado) {
          this.atualizar = true;
          this.cliente = clienteEncontrado;
        }
      }
    })

    this.getUfs();
  }

  cliente: cliente = cliente.newCliente();
  atualizar : boolean = false;
  estados: Estado[] = [];
  municipio: Municipio[] = [];

  salvar() {
    if(!this.atualizar) {
      this.service.salvar(this.cliente);
      this.cliente = cliente.newCliente();
      this.service.mensagemSucesso("Salvo com sucesso!");
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta']);
      this.service.mensagemSucesso("Atualizado com sucesso!")
    }
  }

  getUfs() {
    this.enderecoApi.getUfs().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: erro => console.log('Ocorreu um erro na chamada da Api de endereçco: ', erro)
    });
  }
}
