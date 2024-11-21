import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EfectivoPage } from './efectivo.page';

describe('EfectivoPage', () => {
  let component: EfectivoPage;
  let fixture: ComponentFixture<EfectivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EfectivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
