import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNotes } from './doctor-notes';

describe('DoctorNotes', () => {
  let component: DoctorNotes;
  let fixture: ComponentFixture<DoctorNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
