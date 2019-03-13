import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeHomeComponent } from './trainee-home.component';

describe('TraineeHomeComponent', () => {
  let component: TraineeHomeComponent;
  let fixture: ComponentFixture<TraineeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
