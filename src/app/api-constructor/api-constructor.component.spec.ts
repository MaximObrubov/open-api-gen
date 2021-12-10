import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConstructorComponent } from './api-constructor.component';

describe('ApiConstructorComponent', () => {
  let component: ApiConstructorComponent;
  let fixture: ComponentFixture<ApiConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
