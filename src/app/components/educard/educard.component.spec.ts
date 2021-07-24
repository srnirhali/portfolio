import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducardComponent } from './educard.component';

describe('EducardComponent', () => {
  let component: EducardComponent;
  let fixture: ComponentFixture<EducardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
