import { Component, OnInit, Query } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { cliente } from './cliente';
import { ClienteService } from '../cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro implements OnInit {
  constructor(private service: ClienteService, private route: ActivatedRoute) { }

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
  }

  cliente: cliente = cliente.newCliente();
  atualizar : boolean = false;

  salvar() {
    this.cliente.id = cliente.newId();
    this.service.salvar(this.cliente);
  }
}
