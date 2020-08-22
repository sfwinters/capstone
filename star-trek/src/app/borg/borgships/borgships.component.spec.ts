import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgshipsComponent } from './borgships.component';

describe('BorgshipsComponent', () => {
  let component: BorgshipsComponent;
  let fixture: ComponentFixture<BorgshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
