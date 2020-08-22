import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerengishipsComponent } from './ferengiships.component';

describe('FerengishipsComponent', () => {
  let component: FerengishipsComponent;
  let fixture: ComponentFixture<FerengishipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerengishipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerengishipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
