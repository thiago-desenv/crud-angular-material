import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente';
import { cliente } from '../cadastro/cliente';

@Component({
  selector: 'app-consulta',
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule
],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta {
  listaClientes: cliente[] = [];

  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.listaClientes = this.service.pesquisarCleintes('');
  }
}
