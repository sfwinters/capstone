import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enterprise1Component } from './enterprise1.component';

describe('Enterprise1Component', () => {
  let component: Enterprise1Component;
  let fixture: ComponentFixture<Enterprise1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enterprise1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enterprise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
