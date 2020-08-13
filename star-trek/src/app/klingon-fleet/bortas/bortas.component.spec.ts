import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BortasComponent } from './bortas.component';

describe('BortasComponent', () => {
  let component: BortasComponent;
  let fixture: ComponentFixture<BortasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BortasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
