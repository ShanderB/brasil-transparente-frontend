import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly storageService: StorageService = inject(StorageService);
  public readonly router: Router = inject(Router);

  federalEntityName = signal('União Federal');
  federalEntityImage = signal('');

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.storageService.federalEntityName$
      .pipe(takeUntil(this.destroy$))
      .subscribe(name => {
        this.federalEntityName.set(name);
      });
    this.storageService.federalEntityImage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(image => {
        this.federalEntityImage.set(image);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
