import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailRunComponent } from './trail-run.component';

describe('TrailRunComponent', () => {
  let component: TrailRunComponent;
  let fixture: ComponentFixture<TrailRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
