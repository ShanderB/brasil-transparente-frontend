import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { PageSkeletonComponent } from "./core/page-skeleton/page-skeleton.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PageSkeletonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('brasil-transparente');
  isLoading = signal(true);

  constructor() {
    // Hide skeleton after initial load
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }
}
