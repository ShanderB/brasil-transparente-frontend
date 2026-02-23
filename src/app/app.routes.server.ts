import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'gastos-detalhados',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'sobre',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'metodologia',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'origem',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'aposentadorias-pensoes',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'custo-juros-divida',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises/aposentadorias-pensoes',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises/custo-juros-divida',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'gastos-defesa-aposentadoria',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises/gastos-defesa-aposentadoria',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'gastos-bolsa-familia',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises/gastos-bolsa-familia',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'gastos-seguranca',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises/gastos-seguranca',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'gastos-educacao',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'analises/gastos-educacao',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

