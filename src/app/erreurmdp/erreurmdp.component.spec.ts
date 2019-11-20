import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurmdpComponent } from './erreurmdp.component';

describe('ErreurmdpComponent', () => {
  let component: ErreurmdpComponent;
  let fixture: ComponentFixture<ErreurmdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurmdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurmdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
