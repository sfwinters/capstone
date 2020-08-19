import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgCubeComponent } from './borg-cube.component';

describe('BorgCubeComponent', () => {
  let component: BorgCubeComponent;
  let fixture: ComponentFixture<BorgCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
