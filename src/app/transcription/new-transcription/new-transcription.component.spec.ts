import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTranscriptionComponent } from './new-transcription.component';

describe('NewTranscriptionComponent', () => {
  let component: NewTranscriptionComponent;
  let fixture: ComponentFixture<NewTranscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTranscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTranscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
