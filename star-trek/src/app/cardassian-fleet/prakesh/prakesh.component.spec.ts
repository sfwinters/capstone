import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakeshComponent } from './prakesh.component';

describe('PrakeshComponent', () => {
  let component: PrakeshComponent;
  let fixture: ComponentFixture<PrakeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
