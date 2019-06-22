import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SphenixComponent} from './sphenix.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SphenixComponent', () => {
  let component: SphenixComponent;
  let fixture: ComponentFixture<SphenixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SphenixComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
