import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomulanFleetComponent } from './romulan-fleet.component';

describe('RomulanFleetComponent', () => {
  let component: RomulanFleetComponent;
  let fixture: ComponentFixture<RomulanFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomulanFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomulanFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
