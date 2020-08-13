import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeghtaComponent } from './heghta.component';

describe('HeghtaComponent', () => {
  let component: HeghtaComponent;
  let fixture: ComponentFixture<HeghtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeghtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeghtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
