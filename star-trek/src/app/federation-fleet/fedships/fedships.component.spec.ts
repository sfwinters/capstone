import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FedshipsComponent } from './fedships.component';

describe('FedshipsComponent', () => {
  let component: FedshipsComponent;
  let fixture: ComponentFixture<FedshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FedshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FedshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
