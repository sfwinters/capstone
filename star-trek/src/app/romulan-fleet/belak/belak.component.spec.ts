import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelakComponent } from './belak.component';

describe('BelakComponent', () => {
  let component: BelakComponent;
  let fixture: ComponentFixture<BelakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
