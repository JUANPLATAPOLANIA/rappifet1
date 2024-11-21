import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoEnCaminoPage } from './pedido-en-camino.page';

describe('PedidoEnCaminoPage', () => {
  let component: PedidoEnCaminoPage;
  let fixture: ComponentFixture<PedidoEnCaminoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEnCaminoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
