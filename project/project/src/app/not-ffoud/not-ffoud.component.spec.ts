import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFfoudComponent } from './not-ffoud.component';

describe('NotFfoudComponent', () => {
  let component: NotFfoudComponent;
  let fixture: ComponentFixture<NotFfoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFfoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFfoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
