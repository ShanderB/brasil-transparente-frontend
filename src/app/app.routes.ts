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
  { path: '', component: HomeComponent },
  { path: 'gastos-detalhados', component: GastosDetalhadosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'origem', component: OrigemComponent },
  { path: 'aposentadorias-pensoes', component: AposentadoriasPensoesComponent },
  { path: 'custo-juros-divida', component: CustoJurosDividaComponent },
  { path: 'analises', component: AnalisesComponent },
  { path: 'analises/aposentadorias-pensoes', component: AposentadoriasPensoesComponent },
  { path: 'analises/custo-juros-divida', component: CustoJurosDividaComponent },
  { path: 'gastos-defesa-aposentadoria', component: GastosDefesaAposentadoriaComponent },
  { path: 'analises/gastos-defesa-aposentadoria', component: GastosDefesaAposentadoriaComponent },
  { path: 'gastos-bolsa-familia', component: GastosBolsaFamiliaComponent },
  { path: 'analises/gastos-bolsa-familia', component: GastosBolsaFamiliaComponent },
  { path: 'gastos-seguranca', component: GastosSegurancaComponent },
  { path: 'analises/gastos-seguranca', component: GastosSegurancaComponent },
  { path: 'gastos-educacao', component: GastosEducacaoComponent },
  { path: 'analises/gastos-educacao', component: GastosEducacaoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
