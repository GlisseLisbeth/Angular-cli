import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTextComponent } from './last-text.component';

describe('LastTextComponent', () => {
  let component: LastTextComponent;
  let fixture: ComponentFixture<LastTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
