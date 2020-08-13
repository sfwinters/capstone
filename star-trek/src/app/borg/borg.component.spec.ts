import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgComponent } from './borg.component';

describe('BorgComponent', () => {
  let component: BorgComponent;
  let fixture: ComponentFixture<BorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
