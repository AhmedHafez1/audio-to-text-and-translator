import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionTranslationOutputComponent } from './transcription-translation-output.component';

describe('TranscriptionTranslationOutputComponent', () => {
  let component: TranscriptionTranslationOutputComponent;
  let fixture: ComponentFixture<TranscriptionTranslationOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptionTranslationOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscriptionTranslationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
