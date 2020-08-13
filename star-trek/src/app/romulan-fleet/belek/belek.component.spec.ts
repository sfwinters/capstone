import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelekComponent } from './belek.component';

describe('BelekComponent', () => {
  let component: BelekComponent;
  let fixture: ComponentFixture<BelekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
