import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgSphereComponent } from './borg-sphere.component';

describe('BorgSphereComponent', () => {
  let component: BorgSphereComponent;
  let fixture: ComponentFixture<BorgSphereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgSphereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
