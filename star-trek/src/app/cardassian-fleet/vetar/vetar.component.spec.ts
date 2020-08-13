import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetarComponent } from './vetar.component';

describe('VetarComponent', () => {
  let component: VetarComponent;
  let fixture: ComponentFixture<VetarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
