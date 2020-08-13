import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiantComponent } from './defiant.component';

describe('DefiantComponent', () => {
  let component: DefiantComponent;
  let fixture: ComponentFixture<DefiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
