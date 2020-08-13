import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederationFleetComponent } from './federation-fleet.component';

describe('FederationFleetComponent', () => {
  let component: FederationFleetComponent;
  let fixture: ComponentFixture<FederationFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederationFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederationFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
