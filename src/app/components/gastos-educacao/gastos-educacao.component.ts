import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltarAnalisesComponent } from '../voltar-analises/voltar-analises.component';
import { ApiService } from '../../services/api/api.service';
import { DataService } from '../../services/data/data.service';
import { StorageService } from '../../services/storage/storage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gastos-educacao',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VoltarAnalisesComponent
  ],
  templateUrl: './gastos-educacao.component.html',
  styleUrl: './gastos-educacao.component.scss',
  standalone: true
})
export class GastosEducacaoComponent implements OnInit {
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
    this.titleService.setTitle('Investimentos Federais em Educação: Análise Completa 2025 | Brasil Transparente');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Veja a análise detalhada dos investimentos do Brasil em educação em 2025. Entenda os R$ 125,8 bilhões destinados ao ensino básico, superior e profissional.' 
    });
    
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'investimentos educação 2025, orçamento educação federal, gastos MEC 2025, programas educacionais Brasil, universidades federais, ensino básico federal, FNDE' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Investimentos Federais em Educação: Análise Completa 2025' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Análise detalhada dos R$ 125,8 bilhões investidos em educação federal em 2025. Programas educacionais e impacto no desenvolvimento do país.' 
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
        componente: 'Ensino Básico',
        valor: 6820000000000,
        percentual: 2.33
      },
      {
        componente: 'Ensino Superior',
        valor: 4560000000000,
        percentual: 1.56
      },
      {
        componente: 'Educação Profissional',
        valor: 870000000000,
        percentual: 0.30
      },
      {
        componente: 'Programas de Assistência',
        valor: 330000000000,
        percentual: 0.11
      },
      {
        componente: 'Despesa Total com Educação',
        valor: 12580000000000,
        percentual: 4.29
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
