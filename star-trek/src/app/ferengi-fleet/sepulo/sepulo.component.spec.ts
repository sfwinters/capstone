import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepuloComponent } from './sepulo.component';

describe('SepuloComponent', () => {
  let component: SepuloComponent;
  let fixture: ComponentFixture<SepuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
