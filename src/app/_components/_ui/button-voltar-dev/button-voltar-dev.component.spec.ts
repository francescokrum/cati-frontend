import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVoltarDevComponent } from './button-voltar-dev.component';

describe('ButtonVoltarDevComponent', () => {
  let component: ButtonVoltarDevComponent;
  let fixture: ComponentFixture<ButtonVoltarDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonVoltarDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonVoltarDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
