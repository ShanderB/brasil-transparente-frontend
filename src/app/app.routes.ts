import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { OrigemComponent } from './components/origem/origem.component';
import { GastosDetalhadosComponent } from './components/gastos-detalhados/gastos-detalhados.component';
import { AnalisesComponent } from './components/analises/analises.component';
import { AposentadoriasPensoesComponent } from './components/aposentadorias-pensoes/aposentadorias-pensoes.component';
import { CustoJurosDividaComponent } from './components/custo-juros-divida/custo-juros-divida.component';
import { GastosDefesaAposentadoriaComponent } from './components/gastos-defesa-aposentadoria/gastos-defesa-aposentadoria.component';
import { GastosBolsaFamiliaComponent } from './components/gastos-bolsa-familia/gastos-bolsa-familia.component';
import { GastosSegurancaComponent } from './components/gastos-seguranca/gastos-seguranca.component';
import { GastosEducacaoComponent } from './components/gastos-educacao/gastos-educacao.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'gastos-detalhados',
    loadComponent: () =>
      import('./components/gastos-detalhados/gastos-detalhados.component').then(
        m => m.GastosDetalhadosComponent
      )
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./components/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'metodologia',
    loadComponent: () =>
      import('./components/metodologia/metodologia.component').then(
        m => m.MetodologiaComponent
      )
  },
  {
    path: 'origem',
    loadComponent: () =>
      import('./components/origem/origem.component').then(
        m => m.OrigemComponent
      )
  },
  {
    path: 'analises',
    loadComponent: () =>
      import('./components/analises/analises.component').then(
        m => m.AnalisesComponent
      ),
    children: [
      {
        path: 'aposentadorias-pensoes',
        loadComponent: () =>
          import('./components/aposentadorias-pensoes/aposentadorias-pensoes.component').then(
            m => m.AposentadoriasPensoesComponent
          )
      },
      {
        path: 'custo-juros-divida',
        loadComponent: () =>
          import('./components/custo-juros-divida/custo-juros-divida.component').then(
            m => m.CustoJurosDividaComponent
          )
      },
      {
        path: 'gastos-defesa-aposentadoria',
        loadComponent: () =>
          import('./components/gastos-defesa-aposentadoria/gastos-defesa-aposentadoria.component').then(
            m => m.GastosDefesaAposentadoriaComponent
          )
      },
      {
        path: 'gastos-bolsa-familia',
        loadComponent: () =>
          import('./components/gastos-bolsa-familia/gastos-bolsa-familia.component').then(
            m => m.GastosBolsaFamiliaComponent
          )
      },
      {
        path: 'gastos-seguranca',
        loadComponent: () =>
          import('./components/gastos-seguranca/gastos-seguranca.component').then(
            m => m.GastosSegurancaComponent
          )
      },
      {
        path: 'gastos-educacao',
        loadComponent: () =>
          import('./components/gastos-educacao/gastos-educacao.component').then(
            m => m.GastosEducacaoComponent
          )
      }
    ]
  },
  // Rotas standalone das análises
  {
    path: 'aposentadorias-pensoes',
    loadComponent: () =>
      import('./components/aposentadorias-pensoes/aposentadorias-pensoes.component').then(
        m => m.AposentadoriasPensoesComponent
      )
  },
  {
    path: 'custo-juros-divida',
    loadComponent: () =>
      import('./components/custo-juros-divida/custo-juros-divida.component').then(
        m => m.CustoJurosDividaComponent
      )
  },
  {
    path: 'gastos-defesa-aposentadoria',
    loadComponent: () =>
      import('./components/gastos-defesa-aposentadoria/gastos-defesa-aposentadoria.component').then(
        m => m.GastosDefesaAposentadoriaComponent
      )
  },
  {
    path: 'gastos-bolsa-familia',
    loadComponent: () =>
      import('./components/gastos-bolsa-familia/gastos-bolsa-familia.component').then(
        m => m.GastosBolsaFamiliaComponent
      )
  },
  {
    path: 'gastos-seguranca',
    loadComponent: () =>
      import('./components/gastos-seguranca/gastos-seguranca.component').then(
        m => m.GastosSegurancaComponent
      )
  },
  {
    path: 'gastos-educacao',
    loadComponent: () =>
      import('./components/gastos-educacao/gastos-educacao.component').then(
        m => m.GastosEducacaoComponent
      )
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        m => m.NotFoundComponent
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
