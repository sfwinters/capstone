import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerengiFleetComponent } from './ferengi-fleet.component';

describe('FerengiFleetComponent', () => {
  let component: FerengiFleetComponent;
  let fixture: ComponentFixture<FerengiFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerengiFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerengiFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
