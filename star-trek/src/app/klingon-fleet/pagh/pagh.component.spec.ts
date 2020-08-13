import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaghComponent } from './pagh.component';

describe('PaghComponent', () => {
  let component: PaghComponent;
  let fixture: ComponentFixture<PaghComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaghComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
