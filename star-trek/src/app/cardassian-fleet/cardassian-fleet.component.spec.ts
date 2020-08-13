import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardassianFleetComponent } from './cardassian-fleet.component';

describe('CardassianFleetComponent', () => {
  let component: CardassianFleetComponent;
  let fixture: ComponentFixture<CardassianFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardassianFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardassianFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
