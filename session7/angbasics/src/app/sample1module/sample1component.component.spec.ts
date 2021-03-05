import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1componentComponent } from './sample1component.component';

describe('Sample1componentComponent', () => {
  let component: Sample1componentComponent;
  let fixture: ComponentFixture<Sample1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample1componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
