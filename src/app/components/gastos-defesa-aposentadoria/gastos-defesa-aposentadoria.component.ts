import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltarAnalisesComponent } from '../voltar-analises/voltar-analises.component';
import { ApiService } from '../../services/api/api.service';
import { DataService } from '../../services/data/data.service';
import { StorageService } from '../../services/storage/storage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gastos-defesa-aposentadoria',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VoltarAnalisesComponent
  ],
  templateUrl: './gastos-defesa-aposentadoria.component.html',
  styleUrl: './gastos-defesa-aposentadoria.component.scss',
  standalone: true
})
export class GastosDefesaAposentadoriaComponent implements OnInit {
  private readonly apiService: ApiService = inject(ApiService);
  private readonly dataService: DataService = inject(DataService);
  private readonly storageService: StorageService = inject(StorageService);
  private readonly titleService: Title = inject(Title);
  private readonly metaService: Meta = inject(Meta);

  federalEntityId = '1';
  isLoading = signal(true);
  dados: any[] = [];
  showRawTotal = signal(false);

  ngOnInit(): void {
    this.setupSEO();
    this.storageService.federalEntityId$
      .subscribe(id => {
        this.federalEntityId = id;
        this.loadData();
      });
  }

  setupSEO(): void {
    // Configuração de SEO para a página
    this.titleService.setTitle('Gastos no Ministério da Defesa - Aposentadorias Militares: Análise Completa 2025 | Brasil Transparente');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Veja a análise detalhada dos gastos do Brasil com aposentadorias e pensões militares em 2025. Entenda o impacto de R$ 64,0 bilhões no orçamento federal e PIB.' 
    });
    
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'gastos defesa aposentadorias 2025, aposentadorias militares, orçamento ministério da defesa 2025, gastos militares PIB, reforma previdência militar, pensões militares forças armadas' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Gastos no Ministério da Defesa - Aposentadorias Militares: Análise Completa 2025' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Análise detalhada dos R$ 64,0 bilhões gastos com aposentadorias e pensões militares em 2025. Impacto de 2,18% no orçamento federal.' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:type', 
      content: 'article' 
    });
    
    this.metaService.updateTag({ 
      name: 'robots', 
      content: 'index, follow' 
    });
    
    this.metaService.updateTag({ 
      name: 'author', 
      content: 'Brasil Transparente' 
    });
  }

  loadData(): void {
    this.isLoading.set(true);
    // Simular dados para demonstração
    this.dados = [
      {
        componente: 'Orçamento Total Ministério da Defesa',
        valor: 13157730187303,
        percentual: 4.49
      },
      {
        componente: 'Despesas Operacionais',
        valor: 6758231963153,
        percentual: 2.31
      },
      {
        componente: 'Aposentadorias e Pensões Militares',
        valor: 6399498224150,
        percentual: 2.18
      }
    ];
    this.isLoading.set(false);
  }

  formatLargeCurrency(value: number): string {
    return this.dataService.formatLargeCurrency(value);
  }

  formatCurrency(value: number): string {
    return this.dataService.formatCurrency(value);
  }
}
