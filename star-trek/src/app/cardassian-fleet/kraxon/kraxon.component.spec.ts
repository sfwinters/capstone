import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KraxonComponent } from './kraxon.component';

describe('KraxonComponent', () => {
  let component: KraxonComponent;
  let fixture: ComponentFixture<KraxonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KraxonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KraxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
