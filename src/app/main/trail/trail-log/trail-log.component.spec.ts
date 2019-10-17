import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailLogComponent } from './trail-log.component';

describe('TrailLogComponent', () => {
  let component: TrailLogComponent;
  let fixture: ComponentFixture<TrailLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
