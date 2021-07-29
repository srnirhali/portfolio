import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillcardComponent } from './skillcard.component';

describe('SkillcardComponent', () => {
  let component: SkillcardComponent;
  let fixture: ComponentFixture<SkillcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
