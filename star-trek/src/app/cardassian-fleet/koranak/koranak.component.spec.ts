import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoranakComponent } from './koranak.component';

describe('KoranakComponent', () => {
  let component: KoranakComponent;
  let fixture: ComponentFixture<KoranakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoranakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoranakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
