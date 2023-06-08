import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechRecordingComponent } from './speech-recording.component';

describe('SpeechRecordingComponent', () => {
  let component: SpeechRecordingComponent;
  let fixture: ComponentFixture<SpeechRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechRecordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
