import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardassianshipsComponent } from './cardassianships.component';

describe('CardassianshipsComponent', () => {
  let component: CardassianshipsComponent;
  let fixture: ComponentFixture<CardassianshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardassianshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardassianshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
