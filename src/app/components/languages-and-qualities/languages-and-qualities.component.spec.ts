import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesAndQualitiesComponent } from './languages-and-qualities.component';

describe('LanguagesAndQualitiesComponent', () => {
  let component: LanguagesAndQualitiesComponent;
  let fixture: ComponentFixture<LanguagesAndQualitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesAndQualitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesAndQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
