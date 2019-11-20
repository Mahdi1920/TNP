import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurauthComponent } from './erreurauth.component';

describe('ErreurauthComponent', () => {
  let component: ErreurauthComponent;
  let fixture: ComponentFixture<ErreurauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
