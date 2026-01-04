import { Component, input, InputSignal } from '@angular/core';
import { ReportType } from 'app/models/tipos-relatorios.model';

@Component({
  selector: 'app-carregando-dados',
  imports: [],
  templateUrl: './carregando-dados.html',
  styleUrl: './carregando-dados.scss'
})
export class CarregandoDados {
  skeletonCount: InputSignal<number> = input.required();
  activeReport: InputSignal<ReportType> = input.required();
  reportTypeWithShort: ReportType = ReportType.Simplificado;

  range(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}
