import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlingonshipsComponent } from './klingonships.component';

describe('KlingonshipsComponent', () => {
  let component: KlingonshipsComponent;
  let fixture: ComponentFixture<KlingonshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlingonshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlingonshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
