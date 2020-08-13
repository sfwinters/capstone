import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotarranComponent } from './rotarran.component';

describe('RotarranComponent', () => {
  let component: RotarranComponent;
  let fixture: ComponentFixture<RotarranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotarranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotarranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
