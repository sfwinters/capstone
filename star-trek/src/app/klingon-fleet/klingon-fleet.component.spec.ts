import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlingonFleetComponent } from './klingon-fleet.component';

describe('KlingonShipsComponent', () => {
  let component: KlingonFleetComponent;
  let fixture: ComponentFixture<KlingonFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlingonFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlingonFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
