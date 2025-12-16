import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carregando-dados',
  imports: [],
  templateUrl: './carregando-dados.html',
  styleUrl: './carregando-dados.scss'
})
export class CarregandoDados {
  @Input() skeletonCount = 10;

  range(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}
