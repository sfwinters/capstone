import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enterprise2Component } from './enterprise2.component';

describe('Enterprise2Component', () => {
  let component: Enterprise2Component;
  let fixture: ComponentFixture<Enterprise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enterprise2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enterprise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
