import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VoltarInicioComponent } from '../voltar-inicio/voltar-inicio.component';

@Component({
  selector: 'app-analises',
  imports: [
    CommonModule,
    RouterLink,
    VoltarInicioComponent
  ],
  templateUrl: './analises.component.html',
  styleUrl: './analises.component.scss',
  standalone: true
})
export class AnalisesComponent {
  
  analyses = [
    {
      id: 'aposentadorias-pensoes',
      title: 'Aposentadorias e Pensões',
      description: 'Análise detalhada dos gastos da União com aposentadorias e pensões, incluindo RGPS, BPC, militares e servidores civis públicos.',
      route: '/aposentadorias-pensoes'
    },
    {
      id: 'custo-juros-divida',
      title: 'Custo Juros da Dívida Pública Federal',
      description: 'Análise dos custos com juros da dívida pública federal e seu impacto no orçamento da União.',
      route: '/custo-juros-divida'
    },
    {
      id: 'gastos-defesa-aposentadoria',
      title: 'Gastos no Ministério da Defesa - Aposentadoria',
      description: 'Análise detalhada dos gastos com aposentadorias militares no Ministério da Defesa.',
      route: '/gastos-defesa-aposentadoria'
    },
    {
      id: 'gastos-bolsa-familia',
      title: 'Gasto com Bolsa Família',
      description: 'Análise dos gastos com o programa Bolsa Família e seu impacto social e orçamentário.',
      route: '/gastos-bolsa-familia'
    },
    {
      id: 'gastos-seguranca',
      title: 'Segurança',
      description: 'Análise dos gastos federais com seguranca.',
      route: '/gastos-seguranca'
    },
    {
      id: 'gastos-educacao',
      title: 'Educação',
      description: 'Análise dos investimentos federais em educação e seus programas prioritários.',
      route: '/gastos-educacao'
    }
  ];

  navigateToAnalysis(analysisId: string): void {
    // Navigation will be handled by Angular Router in the template
  }
}
