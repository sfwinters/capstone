import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarksTreasureComponent } from './quarks-treasure.component';

describe('QuarksTreasureComponent', () => {
  let component: QuarksTreasureComponent;
  let fixture: ComponentFixture<QuarksTreasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarksTreasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarksTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
