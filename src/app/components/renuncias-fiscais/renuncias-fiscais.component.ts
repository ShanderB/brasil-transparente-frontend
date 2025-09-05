import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltarInicioComponent } from '../voltar-inicio/voltar-inicio.component';
import { ApiService } from '../../services/api/api.service';
import { DataService } from '../../services/data/data.service';
import { RenunciaFiscal } from '../../models/renuncia-fiscal.model';

@Component({
  selector: 'app-renuncias-fiscais',
  standalone: true,
  imports: [CommonModule, VoltarInicioComponent],
  templateUrl: './renuncias-fiscais.component.html',
  styleUrl: './renuncias-fiscais.component.scss'
})
export class RenunciasFiscaisComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly dataService = inject(DataService);

  valorTotal = signal(0);
  isLoading = signal(true);
  renunciasPaginadas = signal<RenunciaFiscal[]>([]);
  paginaAtual = signal(1);
  totalPaginas = signal(0);
  readonly itensPorPagina = 30;

  ngOnInit(): void {
    this.loadTotalValue();
    this.loadRenunciasDaPagina(this.paginaAtual());
  }

  loadTotalValue(): void {
    this.apiService.getTotalRenuncias('1').subscribe(response => {
      if (response) {
        this.valorTotal.set(response.valorTotal);
      }
    });
  }

  loadRenunciasDaPagina(page: number): void {
    this.isLoading.set(true);

    this.apiService.getRenunciasFiscais('1', page, this.itensPorPagina).subscribe({
      next: (response) => {
        this.renunciasPaginadas.set(response.items);
        this.totalPaginas.set(response.totalPages);
        this.paginaAtual.set(response.currentPage + 1);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar renúncias fiscais:', err);
        this.isLoading.set(false);
      }
    });
  }

  proximaPagina(): void {
    if (this.paginaAtual() < this.totalPaginas()) {
      this.loadRenunciasDaPagina(this.paginaAtual() + 1);
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual() > 1) {
      this.loadRenunciasDaPagina(this.paginaAtual() - 1);
    }
  }

  formatCurrency(value: number): string {
    return this.dataService.formatCurrency(value);
  }
}
