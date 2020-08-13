import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChajohComponent } from './chajoh.component';

describe('ChajohComponent', () => {
  let component: ChajohComponent;
  let fixture: ComponentFixture<ChajohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChajohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChajohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
