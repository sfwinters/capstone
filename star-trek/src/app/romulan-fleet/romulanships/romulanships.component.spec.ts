import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomulanshipsComponent } from './romulanships.component';

describe('RomulanshipsComponent', () => {
  let component: RomulanshipsComponent;
  let fixture: ComponentFixture<RomulanshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomulanshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomulanshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
