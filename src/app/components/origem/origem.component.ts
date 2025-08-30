import { Component } from '@angular/core';
import { VoltarInicioComponent } from '../voltar-inicio/voltar-inicio.component';
import { environmentData } from '../../../environments/environment.data';

@Component({
  selector: 'app-origem',
  imports: [VoltarInicioComponent],
  templateUrl: './origem.component.html',
  styleUrl: './origem.component.scss',
  standalone: true
})
export class OrigemComponent {
  fontesDados = environmentData.fontesDadosOrigem;
}
