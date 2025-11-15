import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregandoDados } from './carregando-dados';

describe('CarregandoDados', () => {
  let component: CarregandoDados;
  let fixture: ComponentFixture<CarregandoDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarregandoDados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarregandoDados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
