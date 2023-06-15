import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputWayComponent } from './select-input-way.component';

describe('SelectInputWayComponent', () => {
  let component: SelectInputWayComponent;
  let fixture: ComponentFixture<SelectInputWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInputWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInputWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
