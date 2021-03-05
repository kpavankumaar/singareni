import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample12componentComponent } from './sample12component.component';

describe('Sample12componentComponent', () => {
  let component: Sample12componentComponent;
  let fixture: ComponentFixture<Sample12componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample12componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample12componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
